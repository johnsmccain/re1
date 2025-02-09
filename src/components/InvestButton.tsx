import { useAccount } from 'wagmi';
// import { useInvestment } from '../hooks/useInvestment';

interface InvestButtonProps {
  amount: number;
  referrerId?: number;
  disabled?: boolean;
  className?: string;
}

export const InvestButton = ({  referrerId, disabled, className }: InvestButtonProps) => {
  const { address } = useAccount();
  // const { invest } = useInvestment();

  const handleClick = async () => {
    try {
      // await invest(amount, referrerId);
    } catch (error) {
      console.error('Investment failed:', error);
    }
  };

  if (!address) {
    return (
      <button 
        className={`${className} opacity-50 cursor-not-allowed`}
        disabled
      >
        Connect Wallet to Invest
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={className}
    >
      {referrerId ? 'Register & Invest' : 'Invest'}
    </button>
  );
};