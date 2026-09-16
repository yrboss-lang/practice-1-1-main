// Тип валюты — только три варианта
export type Currency = "RUB" | "USD" | "EUR";

// Курсы конвертации (упрощенно, относительно RUB):
// 1 USD = 90 RUB
// 1 EUR = 100 RUB

export function convert(amount: number, from: Currency, to: Currency): number {
  // 1. Если from === to, вернуть amount
  if (from === to) {
    return amount;
  }

  // 2. Иначе конвертировать from -> RUB, потом RUB -> to
  const rates: Record<Currency, number> = {
    RUB: 1,
    USD: 90,
    EUR: 100,
  };

  const amountInRub = amount * rates[from];
  return amountInRub / rates[to];
}

export function formatCurrency(amount: number, currency: Currency): string {
  // Вернуть строку вида "100 RUB" или "50.5 USD"
  return amount + " " + currency;
}