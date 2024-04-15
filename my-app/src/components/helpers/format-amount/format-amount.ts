export const formatAmount = ({ amount }: { amount: number }): string => {
  const amountInPounds = amount / 100;
  const formattedAmount = amountInPounds.toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return formattedAmount;
};
