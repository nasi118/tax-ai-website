//#region node_modules/.nitro/vite/services/ssr/assets/tax-engine-BkIXDARw.js
var usd = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	maximumFractionDigits: 0
});
new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	minimumFractionDigits: 0,
	maximumFractionDigits: 0
});
new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
	notation: "compact",
	maximumFractionDigits: 1
});
function money(n) {
	const rounded = Math.round(n);
	const formatted = usd.format(Math.abs(rounded));
	return rounded < 0 ? `−${formatted}` : formatted;
}
function pct(n, digits = 1) {
	return `${(n * 100).toFixed(digits)}%`;
}
var TY = {
	2025: {
		brackets: {
			single: [
				[0, .1],
				[11925, .12],
				[48475, .22],
				[103350, .24],
				[197300, .32],
				[250525, .35],
				[626350, .37]
			],
			mfj: [
				[0, .1],
				[23850, .12],
				[96950, .22],
				[206700, .24],
				[394600, .32],
				[501050, .35],
				[751600, .37]
			],
			mfs: [
				[0, .1],
				[11925, .12],
				[48475, .22],
				[103350, .24],
				[197300, .32],
				[250525, .35],
				[375800, .37]
			],
			hoh: [
				[0, .1],
				[17e3, .12],
				[64850, .22],
				[103350, .24],
				[197300, .32],
				[250500, .35],
				[626350, .37]
			]
		},
		stdDeduction: {
			single: 15750,
			mfj: 31500,
			mfs: 15750,
			hoh: 23625
		},
		ssWageBase: 176100,
		qbiThreshold: {
			single: 197300,
			mfj: 394600,
			mfs: 197300,
			hoh: 197300
		},
		qbiPhaseInWidth: {
			single: 5e4,
			mfj: 1e5,
			mfs: 5e4,
			hoh: 5e4
		},
		addlMedThreshold: {
			single: 2e5,
			mfj: 25e4,
			mfs: 125e3,
			hoh: 2e5
		},
		ctc: {
			amount: 2200,
			threshold: {
				single: 2e5,
				mfj: 4e5,
				mfs: 2e5,
				hoh: 2e5
			}
		}
	},
	2026: {
		brackets: {
			single: [
				[0, .1],
				[12400, .12],
				[50400, .22],
				[105700, .24],
				[201775, .32],
				[256225, .35],
				[640600, .37]
			],
			mfj: [
				[0, .1],
				[24800, .12],
				[100800, .22],
				[211400, .24],
				[403550, .32],
				[512450, .35],
				[768700, .37]
			],
			mfs: [
				[0, .1],
				[12400, .12],
				[50400, .22],
				[105700, .24],
				[201775, .32],
				[256225, .35],
				[384350, .37]
			],
			hoh: [
				[0, .1],
				[17700, .12],
				[67450, .22],
				[105700, .24],
				[201750, .32],
				[256200, .35],
				[640600, .37]
			]
		},
		stdDeduction: {
			single: 16100,
			mfj: 32200,
			mfs: 16100,
			hoh: 24150
		},
		ssWageBase: 184500,
		qbiThreshold: {
			single: 201750,
			mfj: 403500,
			mfs: 201775,
			hoh: 201750
		},
		qbiPhaseInWidth: {
			single: 75e3,
			mfj: 15e4,
			mfs: 75e3,
			hoh: 75e3
		},
		addlMedThreshold: {
			single: 2e5,
			mfj: 25e4,
			mfs: 125e3,
			hoh: 2e5
		},
		ctc: {
			amount: 2200,
			threshold: {
				single: 2e5,
				mfj: 4e5,
				mfs: 2e5,
				hoh: 2e5
			}
		}
	}
};
var SS_RATE = .124;
var MEDICARE_RATE = .029;
var FICA_SS = .062;
var FICA_MED = .0145;
var ADDL_MED = .009;
var SE_NET = .9235;
function round(n) {
	return Math.round(n);
}
function ordinaryTax(taxable, brackets) {
	let tax = 0;
	for (let i = 0; i < brackets.length; i++) {
		const [lo, rate] = brackets[i];
		const hi = i + 1 < brackets.length ? brackets[i + 1][0] : Infinity;
		if (taxable <= lo) break;
		tax += (Math.min(taxable, hi) - lo) * rate;
	}
	return tax;
}
function marginalRate(taxable, brackets) {
	let rate = brackets[0][1];
	for (const [lo, r] of brackets) if (taxable > lo) rate = r;
	return rate;
}
function qbiDeduction(opts) {
	const { qbi, wages, ubia, tiBefore, threshold, width, sstb } = opts;
	if (qbi <= 0) return {
		deduction: 0,
		note: "No qualified business income."
	};
	const tentative = qbi * .2;
	const tiCap = Math.max(0, tiBefore) * .2;
	Math.max(wages * .5, wages * .25 + ubia * .025);
	const ceiling = threshold + width;
	if (tiBefore <= threshold) {
		if (sstb) return {
			deduction: round(Math.min(tentative, tiCap)),
			note: "Below the Sec. 199A threshold; SSTB limitation not yet applied."
		};
		return {
			deduction: round(Math.min(tentative, tiCap)),
			note: "Below the Sec. 199A threshold; wage/UBIA limit not applied."
		};
	}
	if (sstb && tiBefore >= ceiling) return {
		deduction: 0,
		note: "SSTB fully phased out above the Sec. 199A range."
	};
	const applicableTentative = (sstb ? qbi * (1 - (tiBefore - threshold) / width) : qbi) * .2;
	const applicableWages = sstb ? wages * (1 - (tiBefore - threshold) / width) : wages;
	const applicableLimit = Math.max(applicableWages * .5, applicableWages * .25 + ubia * .025);
	if (tiBefore >= ceiling) return {
		deduction: round(Math.min(applicableTentative, applicableLimit, tiCap)),
		note: wages === 0 && ubia === 0 ? "Above the Sec. 199A range with no W-2 wages or UBIA — deduction limited to zero." : "Above the Sec. 199A range; W-2/UBIA limitation fully applied."
	};
	const reduction = Math.max(0, applicableTentative - applicableLimit) * ((tiBefore - threshold) / width);
	return {
		deduction: round(Math.min(Math.max(0, applicableTentative - reduction), tiCap)),
		note: "Inside the Sec. 199A phase-in range; wage/UBIA limitation is blending in."
	};
}
function compute(input) {
	const year = TY[input.year];
	const profit = Math.max(0, input.profit);
	const ownerComp = Math.min(Math.max(0, input.ownerComp), profit);
	const itemized = Math.max(0, input.itemized);
	const std = year.stdDeduction[input.status];
	const deduction = Math.max(std, itemized);
	const deductionKind = itemized > std ? "itemized" : "standard";
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
		seTaxRaw = Math.min(seBase, year.ssWageBase) * SS_RATE + seBase * MEDICARE_RATE;
		seDeduction = round(seTaxRaw / 2);
		qbi = Math.max(0, profit - seDeduction);
		qbiWages = 0;
	} else {
		wages = ownerComp;
		employeeFica = Math.min(wages, year.ssWageBase) * FICA_SS + wages * FICA_MED;
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
	const agi = round((input.entity === "sole" ? profit : wages + k1) - seDeduction);
	const tiBeforeQbi = Math.max(0, agi - deduction);
	const qbiResult = qbiDeduction({
		qbi,
		wages: qbiWages,
		ubia: 0,
		tiBefore: tiBeforeQbi,
		threshold: year.qbiThreshold[input.status],
		width: year.qbiPhaseInWidth[input.status],
		sstb: input.sstb
	});
	const taxableIncome = Math.max(0, tiBeforeQbi - qbiResult.deduction);
	const ordinaryTaxRounded = round(ordinaryTax(taxableIncome, year.brackets[input.status]));
	const addlBase = input.entity === "sole" ? seBase : wages;
	const addlMedicare = round(Math.max(0, addlBase - year.addlMedThreshold[input.status]) * ADDL_MED);
	const payrollTax = input.entity === "sole" ? seTax : employeeFica + employerFica;
	const totalTax = ordinaryTaxRounded + payrollTax + addlMedicare;
	const afterTaxCash = round(profit - totalTax);
	const effectiveRate = agi > 0 ? totalTax / agi : 0;
	const lines = [
		{
			id: "profit",
			label: "Business profit before owner compensation",
			amount: profit
		},
		...input.entity === "scorp" ? [
			{
				id: "wages",
				label: "Owner W-2 (reasonable compensation)",
				amount: wages
			},
			{
				id: "er-fica",
				label: "Employer FICA",
				amount: employerFica
			},
			{
				id: "k1",
				label: "K-1 ordinary income",
				amount: k1
			}
		] : [
			{
				id: "se-base",
				label: "Net earnings from self-employment (92.35%)",
				amount: round(seBase)
			},
			{
				id: "se-tax",
				label: "Self-employment tax",
				amount: seTax
			},
			{
				id: "se-ded",
				label: "Deductible half of SE tax",
				amount: -seDeduction
			}
		],
		{
			id: "agi",
			label: "Adjusted gross income",
			amount: agi
		},
		{
			id: "ded",
			label: deductionKind === "itemized" ? "Itemized deduction" : "Standard deduction",
			amount: -deduction
		},
		{
			id: "ti-qbi",
			label: "Taxable income before QBI",
			amount: tiBeforeQbi
		},
		{
			id: "qbi",
			label: "Sec. 199A deduction",
			amount: -qbiResult.deduction,
			note: qbiResult.note
		},
		{
			id: "ti",
			label: "Taxable income",
			amount: taxableIncome
		},
		{
			id: "ord",
			label: "Ordinary income tax",
			amount: ordinaryTaxRounded
		},
		...addlMedicare ? [{
			id: "addl-med",
			label: "Additional Medicare tax (0.9%)",
			amount: addlMedicare
		}] : [],
		...input.entity === "scorp" ? [{
			id: "ee-fica",
			label: "Employee FICA",
			amount: employeeFica
		}, {
			id: "er-fica-tax",
			label: "Employer FICA (tax cost)",
			amount: employerFica
		}] : [],
		{
			id: "total",
			label: "Total federal tax burden",
			amount: totalTax
		}
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
		lines
	};
}
var GOLDEN_INPUT = {
	year: 2025,
	status: "mfj",
	entity: "sole",
	profit: 75e4,
	ownerComp: 15e4,
	itemized: 35e3,
	sstb: false
};
var STATUS_LABEL = {
	single: "Single",
	mfj: "Married filing jointly",
	mfs: "Married filing separately",
	hoh: "Head of household"
};
var ENTITY_LABEL = {
	sole: "Sole proprietor",
	scorp: "S corporation"
};
var PRESETS = [
	{
		id: "golden",
		label: "Online retail · $750k",
		hint: "Workbench golden case — MFJ, $35k itemized, $150k reasonable compensation.",
		input: { ...GOLDEN_INPUT }
	},
	{
		id: "consulting",
		label: "Consulting · $120k",
		hint: "Seed tie-out case. Standard deduction, no extra wages.",
		input: {
			year: 2025,
			status: "mfj",
			entity: "sole",
			profit: 12e4,
			ownerComp: 55e3,
			itemized: 0,
			sstb: false
		}
	},
	{
		id: "sstb",
		label: "Advisory SSTB · $420k",
		hint: "Specified service trade or business sitting in the QBI phase-out.",
		input: {
			year: 2025,
			status: "mfj",
			entity: "sole",
			profit: 42e4,
			ownerComp: 16e4,
			itemized: 28e3,
			sstb: true
		}
	}
];
//#endregion
export { compute as a, STATUS_LABEL as i, GOLDEN_INPUT as n, money as o, PRESETS as r, pct as s, ENTITY_LABEL as t };
