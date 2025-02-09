import { useWriteContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi';
export const useUpgrade = () => {
    const { writeContract, isSuccess, isPending, isError,failureReason,error, data, status} = useWriteContract()
    // useWaitForTransactionReceipt()
    const upgrade = async (_id: bigint, _lvls: bigint, amt: bigint) => {
        writeContract({
            address: rich5WorldConfig.address as `0x${string}`,
            abi: rich5WorldConfig.abi,
            functionName: "upgrade",
            args: [_id, _lvls, amt],

        });
    };

    return { upgrade, isSuccess, isPending, isError, failureReason, error, data, status };
};