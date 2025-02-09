import React, { useState } from 'react';
import { X } from 'lucide-react';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (referralCode?: string) => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onConfirm }) => {
  const [referralCode, setReferralCode] = useState('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(referralCode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 border border-gray-800 rounded-2xl p-6 w-full max-w-md mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-2xl font-bold text-white mb-4">Register Investment</h3>
        <p className="text-gray-300 mb-6">
          You are about to register an investment of $20 USDT. This action cannot be undone.
        </p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="referralCode" className="text-sm text-gray-300">
              Referral Code (Optional)
            </label>
            <input
              id="referralCode"
              type="text"
              value={referralCode}
              onChange={(e) => setReferralCode(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white"
              placeholder="Enter referral code"
            />
          </div>

          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">Investment Amount</span>
              <span className="text-white font-bold">20 USDT</span>
            </div>
          </div>
          
          <button
            onClick={handleConfirm}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg
                     hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
          >
            Confirm Registration
          </button>
        </div>
      </div>
    </div>
  );
};