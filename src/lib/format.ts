const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const usdExact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const compact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  notation: "compact",
  maximumFractionDigits: 1,
});

export function money(n: number): string {
  const rounded = Math.round(n);
  const formatted = usd.format(Math.abs(rounded));
  return rounded < 0 ? `−${formatted}` : formatted;
}

export function moneyPlain(n: number): string {
  return usdExact.format(Math.round(n));
}

export function moneyCompact(n: number): string {
  return compact.format(Math.round(n));
}

export function pct(n: number, digits = 1): string {
  return `${(n * 100).toFixed(digits)}%`;
}

export function signedMoney(n: number): string {
  if (Math.round(n) === 0) return money(0);
  const sign = n > 0 ? "−" : "+";
  return `${sign}${usd.format(Math.abs(Math.round(n)))}`;
}
