import { ArrowUpDown } from 'lucide-react';

interface User {
  id: string;
  address: string;
  totalInvestment: number;
  activePackages: number;
  lastInvestment: string;
  status: 'active' | 'inactive';
}

const mockUsers: User[] = [
  {
    id: '1',
    address: '0x1234...5678',
    totalInvestment: 500,
    activePackages: 3,
    lastInvestment: '2024-02-28',
    status: 'active',
  },
  {
    id: '2',
    address: '0xabcd...efgh',
    totalInvestment: 1000,
    activePackages: 5,
    lastInvestment: '2024-02-27',
    status: 'active',
  },
  {
    id: '3',
    address: '0x9876...4321',
    totalInvestment: 200,
    activePackages: 1,
    lastInvestment: '2024-02-25',
    status: 'inactive',
  },
];

export const UsersTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800/50">
            {['User', 'Total Investment', 'Active Packages', 'Last Investment', 'Status'].map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-300 cursor-pointer hover:text-white"
              >
                <div className="flex items-center space-x-1">
                  <span>{header}</span>
                  <ArrowUpDown size={14} />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr
              key={user.id}
              className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors"
            >
              <td className="px-4 py-3">
                <div className="font-mono text-sm">{user.address}</div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm">${user.totalInvestment}</div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm">{user.activePackages}</div>
              </td>
              <td className="px-4 py-3">
                <div className="text-sm">{user.lastInvestment}</div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${user.status === 'active' 
                      ? 'bg-green-500/20 text-green-400'
                      : 'bg-gray-500/20 text-gray-400'
                    }`}
                >
                  {user.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};