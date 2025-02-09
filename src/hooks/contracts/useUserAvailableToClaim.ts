
import { useReadContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useUserAvailableToClaim(userId: bigint | undefined, id: bigint) {
    return useReadContract({
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'userAvailablePoolIncomeToClaim',
        args: userId ? [userId, id] : undefined,
    });
}
