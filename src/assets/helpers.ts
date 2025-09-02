export const isValidRUC = (ruc: string) => {
  if (typeof ruc !== "string") return false;
  const cleaned = ruc.replace(/\s+/g, "");
  if (!/^\d{11}$/.test(cleaned)) return false;

  const prefix = cleaned.slice(0, 2);
  if (!["10", "15", "16", "17", "20"].includes(prefix)) return false;

  const digits = cleaned.split("").map(Number);
  const weights = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

  const sum = weights.reduce((acc, w, i) => acc + digits[i] * w, 0);
  const remainder = sum % 11;
  let check = 11 - remainder;
  if (check === 10) check = 0;
  else if (check === 11) check = 1;

  return check === digits[10];
};
