
export function greet(name: string | undefined): string {
  if (name === undefined) {
    return "Привет, Гость!";
  }
  return "Привет, " + name + "!";
}

export function applyDiscount(price: number, discount: number | null): number {
  if (discount === null) {
    return price;
  }
  return price - discount;
}

export function getErrorMessage(code: number | undefined): string {
  if (code === undefined) {
    return "Неизвестная ошибка";
  }
  if (code === 404) {
    return "Не найдено";
  }
  if (code === 500) {
    return "Внутренняя ошибка";
  }
  return "Ошибка " + code;
}