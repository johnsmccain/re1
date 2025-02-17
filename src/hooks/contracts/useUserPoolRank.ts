
import { useReadContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useUserPoolRank(_num: bigint) {
    return useReadContract({
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'userPoolRank',
        args: [_num],
    });
}
