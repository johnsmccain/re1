import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronUp, Lock } from 'lucide-react';

interface InvestmentPackageProps {
  amount: number;
  isSelected: boolean;
  onClick: () => void;
  isFirst: boolean;
  isActive: boolean;
  isFulfilled: boolean;
  isNextUpgrade: boolean;
}

export const InvestmentPackage: React.FC<InvestmentPackageProps> = ({ 
  amount, 
  isSelected, 
  onClick, 
  isFirst,
  isActive,
  isFulfilled,
  isNextUpgrade
}) => {
  return (
    <motion.button
      whileHover={{ scale: isActive ? 1.05 : 1 }}
      whileTap={{ scale: isActive ? 0.95 : 1 }}
      className={`
        relative px-6 py-4 rounded-xl backdrop-blur-md
        ${isSelected 
          ? 'bg-gradient-to-r from-blue-500/80 to-cyan-500/80 text-white border-2 border-cyan-400 shadow-lg shadow-blue-500/20'
          : isFulfilled
            ? 'bg-green-500/20 text-green-300 border border-green-500/50'
            : isNextUpgrade
              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50 animate-pulse'
              : 'bg-white/5 text-gray-300 border border-gray-700/50'}
        ${isFirst ? 'ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900' : ''}
        ${!isActive ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/10'}
        transition-all duration-300 ease-out group
      `}
      onClick={isActive ? onClick : undefined}
      disabled={!isActive}
    >
      <div className="flex items-center justify-center space-x-2">
        <span className="text-lg font-bold">${amount}</span>
        {isFulfilled && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-green-400 rounded-full p-1"
          >
            <Check size={16} className="text-gray-900" />
          </motion.div>
        )}
        {!isActive && !isFulfilled && (
          <Lock size={16} className="text-gray-500" />
        )}
        {isNextUpgrade && !isFulfilled && (
          <ChevronUp size={16} className="text-blue-400 animate-bounce" />
        )}
      </div>
      {isFirst && (
        <div className="absolute -top-2 -right-2">
          <div className="px-2 py-0.5 text-xs bg-blue-500 text-white rounded-full">
            Default
          </div>
        </div>
      )}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </motion.button>
  );
};