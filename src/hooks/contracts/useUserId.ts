
import { useReadContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useUserId(userAddress: `0x${string}` | undefined) {
    return useReadContract({
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'id',
        args: userAddress ? [userAddress] : undefined,
    });
}
