
import { useWriteContract } from 'wagmi';
import { useState } from 'react';
import { rich5WorldConfig } from '../../abi';

export function useDistributeDividend() {
    const { writeContract, isSuccess, isError } = useWriteContract();
    const [isLoading, setIsLoading] = useState(false);

    const distributeDividend = async () => {
        setIsLoading(true);
        await writeContract({
            address: rich5WorldConfig.address as `0x${string}`,
            abi: rich5WorldConfig.abi,
            functionName: 'distributeDividend' as any,
        });
        setIsLoading(false);
    };

    return { distributeDividend, isLoading, isSuccess, isError };
}
