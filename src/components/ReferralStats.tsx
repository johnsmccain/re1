import React from 'react';
import { Users, Gift, Coins } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ icon, label, value }) => (
  <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
        {icon}
      </div>
      <div>
        <p className="text-gray-400 text-sm">{label}</p>
        <p className="text-lg sm:text-xl font-bold text-white">{value}</p>
      </div>
    </div>
  </div>
);

export const ReferralStats = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <StatCard icon={<Users size={20} />} label="Total Referrals" value={42} />
    <StatCard icon={<Gift size={20} />} label="Active Referrals" value={28} />
    <StatCard icon={<Coins size={20} />} label="Total Rewards" value="$1,234" />
  </div>
);