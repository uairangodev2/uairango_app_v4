//format number to currency BRL with two decimal places with name of function convertReal
export function convertReal(number?: number): string {
  if (!number) return "R$ 0,00";

  return number.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
