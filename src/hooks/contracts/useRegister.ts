import { useWriteContract } from 'wagmi';
import { rich5WorldConfig } from '../../abi'; // Adjust the import path as needed
import { useState } from 'react';
export const useRegister = (_ref: bigint, _newAcc: `0x${string}`, amt: bigint) => {
    const [txHash, setTxHash] = useState<any>(null);
    const { writeContract, isSuccess, isPending, isError ,error,failureReason, data} = useWriteContract()
    //   const [isLoading, setIsLoading,] = useState(false)
    const register = async () => {
        console.log(_ref, _newAcc, amt)
        const txHashx = writeContract({
            address: rich5WorldConfig.address as `0x${string}`,
            abi: rich5WorldConfig.abi,
            functionName: "register",
            args: [_ref, _newAcc, amt]
        });
        setTxHash(txHashx);
    };
    return { register, txHash, isSuccess, isPending, isError,error,failureReason , data};
};