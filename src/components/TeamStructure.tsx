import React from 'react';
import { User } from 'lucide-react';

interface TeamMemberProps {
  address: string;
  level: number;
  investment: number;
  rewards: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ address, level, investment, rewards }) => (
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-800/30 rounded-xl border border-gray-700/50 gap-4">
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-blue-500/20 rounded-lg">
        <User size={20} className="text-blue-400" />
      </div>
      <div>
        <p className="text-white font-mono">{address.slice(0, 6)}...{address.slice(-4)}</p>
        <p className="text-sm text-gray-400">Level {level}</p>
      </div>
    </div>
    <div className="text-right w-full sm:w-auto flex justify-between sm:block">
      <p className="text-white">${investment} USDT</p>
      <p className="text-sm text-green-400">+${rewards} earned</p>
    </div>
  </div>
);

export const TeamStructure = () => {
  const teamMembers: TeamMemberProps[] = [
    { address: "0x1234567890abcdef", level: 1, investment: 200, rewards: 20 },
    { address: "0xabcdef1234567890", level: 2, investment: 100, rewards: 10 },
    { address: "0x9876543210fedcba", level: 1, investment: 150, rewards: 15 },
  ];

  return (
    <div className="space-y-4">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} {...member} />
      ))}
    </div>
  );
};