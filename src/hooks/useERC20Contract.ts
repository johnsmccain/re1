import { useReadContract, useSimulateContract, useWriteContract } from 'wagmi';
import { tokenConfig } from '../abi';

// Hook for `allowance`
export function useAllowance(owner: `0x${string}`|undefined, spender: `0x${string}`|undefined) {
    return useReadContract({
        address: tokenConfig.address as `0x${string}`,
        abi: tokenConfig.abi,
        functionName: 'allowance',
        args: [owner, spender],
    });
}

// Hook for `approve`
export function useApprove(spender: string, value: bigint) {
    const { writeContract, isSuccess, isPending, isError, data, status } = useWriteContract();
    const approve = () => {
       writeContract({
            address: tokenConfig.address as `0x${string}`,
            abi: tokenConfig.abi,
            functionName: 'approve',
            args: [spender, value],
        });
    }
    return {approve, isSuccess, isPending, isError, data, status};
}

// Hook for `balanceOf`
export function useBalanceOf(account: string) {
    return useReadContract({
        address: tokenConfig.address as `0x${string}`,
        abi: tokenConfig.abi,
        functionName: 'balanceOf',
        args: [account],
    });
}

// Hook for `totalSupply`
export function useTotalSupply() {
    return useReadContract({
        address: tokenConfig.address as `0x${string}`,
        abi: tokenConfig.abi,
        functionName: 'totalSupply',
    });
}

// Hook for `transfer`
export function useTransfer(to: string, value: bigint) {
    const result = useSimulateContract({
        address: tokenConfig.address as `0x${string}`,
        abi: tokenConfig.abi,
        functionName: 'transfer',
        args: [to, value],
    });
    return result;
}

// Hook for `transferFrom`
export function useTransferFrom(from: string, to: string, value: bigint) {
    const result = useSimulateContract({
        address: tokenConfig.address as `0x${string}`,
        abi: tokenConfig.abi,
        functionName: 'transferFrom',
        args: [from, to, value],
    });
    return result;
}
