
import { useWriteContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';

export function useClaimLevelDividend() {
    const { writeContract, data } = useWriteContract();

    const claimLevelIncome = async () => {
        await writeContract({
            address: rich5WorldConfig.address as `0x${string}`,
            abi: rich5WorldConfig.abi,
            functionName: 'claimLevelIncome',
        });
    };

    return { claimLevelIncome, data };
}
