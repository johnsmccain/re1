// import React from 'react';
// import { DataTable } from '../components/DataTable';
import { Users } from 'lucide-react';
import { DataTable } from '../components/DataTable';
import { useAccount } from 'wagmi';
import {   useGetDirectTeamUsers,  useUserId } from '../hooks/useContract';
// import { parseUserInfo } from '../utils/helper';
// import { convertTimestampToDate } from '../utils';
// import { formatEther } from 'viem';

// type Referral = {
//   id: string;
//   userId: string;
//   date: string;
//   status: string;
//   earnings: number;
// };

export function ReferralsList() {
  const { address } = useAccount()
  const { data: userId } = useUserId(address as `0x${string}`)
  const {data: getDirectTeamUsers} = useGetDirectTeamUsers(userId as bigint)
  // const { data: userInfo } = useUserInfo(userId as bigint)
  // const parsedUserInfo = parseUserInfo([userInfo][0] || [])
  // const { data: getDirectTeamUsers } = useGetDirectTeamUsers(parsedUserInfo.id)
  // const { data: getRecentActivities } = useActivity(parsedUserInfo.id)
  return (
    <div className="p-3">
      <div className="space-y-6 mt-20 container mx-auto">
        <div className="flex items-center space-x-3">
          <Users className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-white">Direct Team</h1>
        </div>
        <DataTable headers={['User Addr', "User ID"]}>
          {getDirectTeamUsers?.map((referral) => (
            <tr key={Number(referral.referrer)}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {referral.account.slice(0, 4) + '...' + referral.account.slice(-4)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {Number(referral.id)}
              </td>
            </tr>
          ))}
        </DataTable>
      </div>
    </div>
  );
}