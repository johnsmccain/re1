
import { useReadContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useUserMissedIncome(id: bigint | undefined) {
    return useReadContract({
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'userMissedIncome',
        args: id ? [id] : undefined,
    });
}
