
import { useWriteContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useClaimDividend() {
    const { writeContract, data } = useWriteContract();

    const claimDividend = async (poolId: bigint) => {
        await writeContract({
            address: rich5WorldConfig.address as `0x${string}`,
            abi: rich5WorldConfig.abi,
            functionName: 'claimDividend',
            args: [poolId],
        });
    };

    return { claimDividend, data };
}
