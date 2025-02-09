
import { useReadContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useCheckPoolEligibility(userId: bigint | undefined) {
    return useReadContract({
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'checkPoolEligibility',
        args: userId ? [userId] : undefined,
    });
}
