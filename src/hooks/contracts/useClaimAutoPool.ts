
import { useWriteContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useClaimAutoPool() {
    const { writeContract, data } = useWriteContract();

    const claimAutoPool = async (poolId: bigint) => {
        await writeContract({
            address: rich5WorldConfig.address as `0x${string}`,
            abi: rich5WorldConfig.abi,
            functionName: 'claimAutoPool',
            args: [poolId],
        });
    };

    return { claimAutoPool, data };
}
