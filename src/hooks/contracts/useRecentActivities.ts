
import { useReadContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useGetRecentActivities(userId: bigint | undefined, pageNumber: bigint | undefined) {
    return useReadContract({
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'getRecentActivities',
        args: userId && pageNumber ? [userId, pageNumber] : undefined,
    });
}
