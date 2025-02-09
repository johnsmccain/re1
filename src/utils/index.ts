import { formatUnits } from "viem";

// Function to format USDT with 6 decimals
const formatAmount = (amount: bigint, decimals: number = 6): string => {
  const formattedAmount = formatUnits(amount, decimals);
  return formattedAmount;
};

export default formatAmount;

export function convertTimestampToDate(timestamp: number): string {
  // Multiply by 1000 to convert seconds to milliseconds
  const date = new Date(timestamp * 1000);

  // Format the date to a readable string
  return date.toLocaleString(); // Adjust locale as needed, e.g., 'en-US'
}