import React from 'react';
// import { Investment } from '../types/investment';

interface ClaimPoolProps {
  investment: any;
  onClaim: () => void;
}

export const ClaimPool: React.FC<ClaimPoolProps> = ({ investment, onClaim }) => {
  const { amount, fulfilled, claimable } = investment;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 gap-4">
      <span className="text-gray-300">Pool ${amount}</span>
      <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-start">
        <span className={claimable ? "text-green-400" : "text-gray-500"}>
          {fulfilled ? (claimable ? "Eligible" : "Claimed") : "Ineligible"}
        </span>
        {claimable && (
          <button
            onClick={onClaim}
            className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors"
          >
            Claim
          </button>
        )}
      </div>
    </div>
  );
};