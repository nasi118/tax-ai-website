/**
 * Illustrative TY2025/TY2026 federal planning engine for the public studio.
 * Modeled after the workbench golden case (sole prop vs S-corp) so the
 * published $750k / MFJ / $35k itemized figures can be reproduced here.
 *
 * This is a planning estimate, not a filed-return computation. AMT, state
 * tax, estimated-tax penalties, and several other items are out of scope.
 */

export type FilingStatus = "single" | "mfj" | "mfs" | "hoh";
export type Entity = "sole" | "scorp";
export type TaxYear = 2025 | 2026;

export type PlanInput = {
  year: TaxYear;
  status: FilingStatus;
  entity: Entity;
  profit: number;
  ownerComp: number;
  itemized: number;
  sstb: boolean;
};

export type Line = {
  id: string;
  label: string;
  amount: number;
  note?: string;
};

export type PlanResult = {
  year: TaxYear;
  status: FilingStatus;
  entity: Entity;
  grossProfit: number;
  wages: number;
  k1: number;
  seBase: number;
  seTax: number;
  employeeFica: number;
  employerFica: number;
  seDeduction: number;
  agi: number;
  deduction: number;
  deductionKind: "standard" | "itemized";
  tiBeforeQbi: number;
  qbi: number;
  qbiDeduction: number;
  qbiNote: string;
  taxableIncome: number;
  ordinaryTax: number;
  addlMedicare: number;
  payrollTax: number;
  totalTax: number;
  afterTaxCash: number;
  effectiveRate: number;
  marginalRate: number;
  lines: Line[];
};

type YearTable = {
  brackets: Record<FilingStatus, [number, number][]>;
  stdDeduction: Record<FilingStatus, number>;
  ssWageBase: number;
  qbiThreshold: Record<FilingStatus, number>;
  qbiPhaseInWidth: Record<FilingStatus, number>;
  addlMedThreshold: Record<FilingStatus, number>;
  ctc: { amount: number; threshold: Record<FilingStatus, number> };
};

const TY: Record<TaxYear, YearTable> = {
  2025: {
    brackets: {
      single: [
        [0, 0.1],
        [11925, 0.12],
        [48475, 0.22],
        [103350, 0.24],
        [197300, 0.32],
        [250525, 0.35],
        [626350, 0.37],
      ],
      mfj: [
        [0, 0.1],
        [23850, 0.12],
        [96950, 0.22],
        [206700, 0.24],
        [394600, 0.32],
        [501050, 0.35],
        [751600, 0.37],
      ],
      mfs: [
        [0, 0.1],
        [11925, 0.12],
        [48475, 0.22],
        [103350, 0.24],
        [197300, 0.32],
        [250525, 0.35],
        [375800, 0.37],
      ],
      hoh: [
        [0, 0.1],
        [17000, 0.12],
        [64850, 0.22],
        [103350, 0.24],
        [197300, 0.32],
        [250500, 0.35],
        [626350, 0.37],
      ],
    },
    stdDeduction: { single: 15750, mfj: 31500, mfs: 15750, hoh: 23625 },
    ssWageBase: 176100,
    qbiThreshold: { single: 197300, mfj: 394600, mfs: 197300, hoh: 197300 },
    qbiPhaseInWidth: { single: 50000, mfj: 100000, mfs: 50000, hoh: 50000 },
    addlMedThreshold: { single: 200000, mfj: 250000, mfs: 125000, hoh: 200000 },
    ctc: {
      amount: 2200,
      threshold: { single: 200000, mfj: 400000, mfs: 200000, hoh: 200000 },
    },
  },
  2026: {
    brackets: {
      single: [
        [0, 0.1],
        [12400, 0.12],
        [50400, 0.22],
        [105700, 0.24],
        [201775, 0.32],
        [256225, 0.35],
        [640600, 0.37],
      ],
      mfj: [
        [0, 0.1],
        [24800, 0.12],
        [100800, 0.22],
        [211400, 0.24],
        [403550, 0.32],
        [512450, 0.35],
        [768700, 0.37],
      ],
      mfs: [
        [0, 0.1],
        [12400, 0.12],
        [50400, 0.22],
        [105700, 0.24],
        [201775, 0.32],
        [256225, 0.35],
        [384350, 0.37],
      ],
      hoh: [
        [0, 0.1],
        [17700, 0.12],
        [67450, 0.22],
        [105700, 0.24],
        [201750, 0.32],
        [256200, 0.35],
        [640600, 0.37],
      ],
    },
    stdDeduction: { single: 16100, mfj: 32200, mfs: 16100, hoh: 24150 },
    ssWageBase: 184500,
    qbiThreshold: { single: 201750, mfj: 403500, mfs: 201775, hoh: 201750 },
    qbiPhaseInWidth: { single: 75000, mfj: 150000, mfs: 75000, hoh: 75000 },
    addlMedThreshold: { single: 200000, mfj: 250000, mfs: 125000, hoh: 200000 },
    ctc: {
      amount: 2200,
      threshold: { single: 200000, mfj: 400000, mfs: 200000, hoh: 200000 },
    },
  },
};

const SS_RATE = 0.124;
const MEDICARE_RATE = 0.029;
const FICA_SS = 0.062;
const FICA_MED = 0.0145;
const ADDL_MED = 0.009;
const SE_NET = 0.9235;

function round(n: number): number {
  return Math.round(n);
}

function ordinaryTax(taxable: number, brackets: [number, number][]): number {
  let tax = 0;
  for (let i = 0; i < brackets.length; i++) {
    const [lo, rate] = brackets[i];
    const hi = i + 1 < brackets.length ? brackets[i + 1][0] : Infinity;
    if (taxable <= lo) break;
    tax += (Math.min(taxable, hi) - lo) * rate;
  }
  return tax;
}

function marginalRate(taxable: number, brackets: [number, number][]): number {
  let rate = brackets[0][1];
  for (const [lo, r] of brackets) {
    if (taxable > lo) rate = r;
  }
  return rate;
}

function qbiDeduction(opts: {
  qbi: number;
  wages: number;
  ubia: number;
  tiBefore: number;
  threshold: number;
  width: number;
  sstb: boolean;
}): { deduction: number; note: string } {
  const { qbi, wages, ubia, tiBefore, threshold, width, sstb } = opts;
  if (qbi <= 0) return { deduction: 0, note: "No qualified business income." };

  const tentative = qbi * 0.2;
  const tiCap = Math.max(0, tiBefore) * 0.2;
  const wageLimit = Math.max(wages * 0.5, wages * 0.25 + ubia * 0.025);
  const ceiling = threshold + width;

  if (tiBefore <= threshold) {
    if (sstb) {
      return {
        deduction: round(Math.min(tentative, tiCap)),
        note: "Below the Sec. 199A threshold; SSTB limitation not yet applied.",
      };
    }
    return {
      deduction: round(Math.min(tentative, tiCap)),
      note: "Below the Sec. 199A threshold; wage/UBIA limit not applied.",
    };
  }

  if (sstb && tiBefore >= ceiling) {
    return {
      deduction: 0,
      note: "SSTB fully phased out above the Sec. 199A range.",
    };
  }

  const applicableQbi = sstb
    ? qbi * (1 - (tiBefore - threshold) / width)
    : qbi;
  const applicableTentative = applicableQbi * 0.2;
  const applicableWages = sstb
    ? wages * (1 - (tiBefore - threshold) / width)
    : wages;
  const applicableLimit = Math.max(
    applicableWages * 0.5,
    applicableWages * 0.25 + ubia * 0.025,
  );

  if (tiBefore >= ceiling) {
    const deduction = round(Math.min(applicableTentative, applicableLimit, tiCap));
    return {
      deduction,
      note:
        wages === 0 && ubia === 0
          ? "Above the Sec. 199A range with no W-2 wages or UBIA — deduction limited to zero."
          : "Above the Sec. 199A range; W-2/UBIA limitation fully applied.",
    };
  }

  const excess = Math.max(0, applicableTentative - applicableLimit);
  const reduction = excess * ((tiBefore - threshold) / width);
  const deduction = round(
    Math.min(Math.max(0, applicableTentative - reduction), tiCap),
  );
  return {
    deduction,
    note: "Inside the Sec. 199A phase-in range; wage/UBIA limitation is blending in.",
  };
}

export function compute(input: PlanInput): PlanResult {
  const year = TY[input.year];
  const profit = Math.max(0, input.profit);
  const ownerComp = Math.min(Math.max(0, input.ownerComp), profit);
  const itemized = Math.max(0, input.itemized);
  const std = year.stdDeduction[input.status];
  const deduction = Math.max(std, itemized);
  const deductionKind: "standard" | "itemized" =
    itemized > std ? "itemized" : "standard";

  let wages = 0;
  let k1 = 0;
  let seBase = 0;
  let seTaxRaw = 0;
  let employeeFica = 0;
  let employerFica = 0;
  let seDeduction = 0;
  let qbi = 0;
  let qbiWages = 0;

  if (input.entity === "sole") {
    seBase = profit * SE_NET;
    const ss = Math.min(seBase, year.ssWageBase) * SS_RATE;
    const medicare = seBase * MEDICARE_RATE;
    seTaxRaw = ss + medicare;
    seDeduction = round(seTaxRaw / 2);
    qbi = Math.max(0, profit - seDeduction);
    qbiWages = 0;
  } else {
    wages = ownerComp;
    const ssWages = Math.min(wages, year.ssWageBase);
    employeeFica = ssWages * FICA_SS + wages * FICA_MED;
    employerFica = employeeFica;
    k1 = Math.max(0, profit - wages - employerFica);
    qbi = k1;
    qbiWages = wages;
  }

  const seTax = round(seTaxRaw);
  employeeFica = round(employeeFica);
  employerFica = round(employerFica);
  k1 = round(k1);
  qbi = round(qbi);

  const grossIncome = input.entity === "sole" ? profit : wages + k1;
  const agi = round(grossIncome - seDeduction);
  const tiBeforeQbi = Math.max(0, agi - deduction);

  const qbiResult = qbiDeduction({
    qbi,
    wages: qbiWages,
    ubia: 0,
    tiBefore: tiBeforeQbi,
    threshold: year.qbiThreshold[input.status],
    width: year.qbiPhaseInWidth[input.status],
    sstb: input.sstb,
  });

  const taxableIncome = Math.max(0, tiBeforeQbi - qbiResult.deduction);
  const ordinary = ordinaryTax(taxableIncome, year.brackets[input.status]);
  const ordinaryTaxRounded = round(ordinary);

  const addlBase =
    input.entity === "sole" ? seBase : wages;
  const addlMedicare = round(
    Math.max(0, addlBase - year.addlMedThreshold[input.status]) * ADDL_MED,
  );

  const payrollTax =
    input.entity === "sole" ? seTax : employeeFica + employerFica;
  const totalTax = ordinaryTaxRounded + payrollTax + addlMedicare;
  const afterTaxCash = round(profit - totalTax);
  const effectiveRate = agi > 0 ? totalTax / agi : 0;

  const lines: Line[] = [
    { id: "profit", label: "Business profit before owner compensation", amount: profit },
    ...(input.entity === "scorp"
      ? [
          { id: "wages", label: "Owner W-2 (reasonable compensation)", amount: wages },
          { id: "er-fica", label: "Employer FICA", amount: employerFica },
          { id: "k1", label: "K-1 ordinary income", amount: k1 },
        ]
      : [
          {
            id: "se-base",
            label: "Net earnings from self-employment (92.35%)",
            amount: round(seBase),
          },
          { id: "se-tax", label: "Self-employment tax", amount: seTax },
          {
            id: "se-ded",
            label: "Deductible half of SE tax",
            amount: -seDeduction,
          },
        ]),
    { id: "agi", label: "Adjusted gross income", amount: agi },
    {
      id: "ded",
      label: deductionKind === "itemized" ? "Itemized deduction" : "Standard deduction",
      amount: -deduction,
    },
    { id: "ti-qbi", label: "Taxable income before QBI", amount: tiBeforeQbi },
    {
      id: "qbi",
      label: "Sec. 199A deduction",
      amount: -qbiResult.deduction,
      note: qbiResult.note,
    },
    { id: "ti", label: "Taxable income", amount: taxableIncome },
    { id: "ord", label: "Ordinary income tax", amount: ordinaryTaxRounded },
    ...(addlMedicare
      ? [
          {
            id: "addl-med",
            label: "Additional Medicare tax (0.9%)",
            amount: addlMedicare,
          },
        ]
      : []),
    ...(input.entity === "scorp"
      ? [
          { id: "ee-fica", label: "Employee FICA", amount: employeeFica },
          { id: "er-fica-tax", label: "Employer FICA (tax cost)", amount: employerFica },
        ]
      : []),
    { id: "total", label: "Total federal tax burden", amount: totalTax },
  ];

  return {
    year: input.year,
    status: input.status,
    entity: input.entity,
    grossProfit: profit,
    wages,
    k1,
    seBase: round(seBase),
    seTax,
    employeeFica,
    employerFica,
    seDeduction,
    agi,
    deduction,
    deductionKind,
    tiBeforeQbi,
    qbi,
    qbiDeduction: qbiResult.deduction,
    qbiNote: qbiResult.note,
    taxableIncome,
    ordinaryTax: ordinaryTaxRounded,
    addlMedicare,
    payrollTax,
    totalTax,
    afterTaxCash,
    effectiveRate,
    marginalRate: marginalRate(taxableIncome, year.brackets[input.status]),
    lines,
  };
}

export const GOLDEN_INPUT: PlanInput = {
  year: 2025,
  status: "mfj",
  entity: "sole",
  profit: 750000,
  ownerComp: 150000,
  itemized: 35000,
  sstb: false,
};

export const GOLDEN_EXPECTED = {
  sole: {
    seTax: 41923,
    seDeduction: 20961,
    agi: 729039,
    qbiDeduction: 0,
    taxableIncome: 694039,
    ordinaryTax: 182008,
    addlMedicare: 3984,
    totalTax: 227915,
    afterTaxCash: 522085,
  },
  scorp: {
    employerFica: 11475,
    k1: 588525,
    qbiDeduction: 75000,
    taxableIncome: 628525,
    ordinaryTax: 159078,
    totalTax: 182028,
    afterTaxCash: 567972,
  },
};

export const STATUS_LABEL: Record<FilingStatus, string> = {
  single: "Single",
  mfj: "Married filing jointly",
  mfs: "Married filing separately",
  hoh: "Head of household",
};

export const ENTITY_LABEL: Record<Entity, string> = {
  sole: "Sole proprietor",
  scorp: "S corporation",
};

export const PRESETS: { id: string; label: string; hint: string; input: PlanInput }[] =
  [
    {
      id: "golden",
      label: "Online retail · $750k",
      hint: "Workbench golden case — MFJ, $35k itemized, $150k reasonable compensation.",
      input: { ...GOLDEN_INPUT },
    },
    {
      id: "consulting",
      label: "Consulting · $120k",
      hint: "Seed tie-out case. Standard deduction, no extra wages.",
      input: {
        year: 2025,
        status: "mfj",
        entity: "sole",
        profit: 120000,
        ownerComp: 55000,
        itemized: 0,
        sstb: false,
      },
    },
    {
      id: "sstb",
      label: "Advisory SSTB · $420k",
      hint: "Specified service trade or business sitting in the QBI phase-out.",
      input: {
        year: 2025,
        status: "mfj",
        entity: "sole",
        profit: 420000,
        ownerComp: 160000,
        itemized: 28000,
        sstb: true,
      },
    },
  ];
