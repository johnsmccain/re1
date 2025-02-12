
import { useReadContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useUserIncomeDetails(userId: bigint) {
    return useReadContract({
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'userIncomeDetails',
        args: [userId],
    });
}
