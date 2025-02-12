import { useAccount, useWaitForTransactionReceipt } from "wagmi"
import {
  useCheckPoolEligibility,
  // useGetDividendIncome,
  useRegister,
  useUpgrade,
  useUserAvailableToClaim,
  useUserId,
  useUserMissedIncome,
  useAvailableLevelIncomeToClaim,
  useClaimLevelDividend,
  useUserInfo
} from "../hooks/useContract";
import { useEffect, useState } from "react";
import { useApprove } from "../hooks/useERC20Contract";
import { formatEther, parseEther } from "viem";
import {  parseUserInfo } from "../utils/helper";
import toast from "react-hot-toast";
// import { convertTimestampToDate } from "../utils";
import { rich5WorldConfig } from "../abi";
import { readContract } from "wagmi/actions";
import { config } from "../utils/wagmi";
import { useUserIncomeDetails } from "../hooks/contracts/useUserIncomeDetails";
import { useTotalTeamCount } from "../hooks/contracts/useTotalTeamCount";
import { useTotalTeamBiz } from "../hooks/contracts/useTotalTeamBiz";
import { useGetAutoPoolIncome } from "../hooks/contracts/useDividendIncome";
import { useClaimAutoPool } from "../hooks/contracts/useClaimAutoPool";
// import { useClaimLevelIncome } from "../hooks/contracts/useClaimDividend";
const packages = ["25", "50", "100", "200", "500", "1000", "2500", "5000"]

const Dashboard = () => {

  const [referralCode, setReferralCode] = useState("1000");
  const { address } = useAccount()
  const { upgrade: upgradeLevel, isPending: isUpgradePending, isError: isUpgradeError, data: upgradeTxHash } = useUpgrade();
  const { data: userId } = useUserId(address as `0x${string}`)
  const { data: userInfo } = useUserInfo(userId as bigint)
  // const parsedUserInfo = parseUserInfo([userInfo][0] || [])
  const [parsedUserInfo, setParsedUserInfo] = useState(parseUserInfo([userInfo][0] as any || []));
  const [packageId, setPackageId] = useState<number>((Number(parsedUserInfo.level)));
  const [maxLevel, setMaxLevel] = useState((Number(parsedUserInfo.level)) === 12)

  // console.log(maxLevel)
  const [investmentAmount, setInvestmentAmount] = useState<string>(maxLevel ? packages[packageId - 1] : packages[packageId]);
  const { approve, isPending: isApprovePending, data: approveTxHash, isError: isApproveError, } = useApprove(rich5WorldConfig.address, parseEther(String(Number(investmentAmount) + 0.1) || "0"));
  const { register, isPending: isRegisterPending, isError: isRegisterError, data: registerTxHash } = useRegister(BigInt(referralCode), address as `0x${string}`, parseEther(investmentAmount || "0"));

  const { data: getAutoPoolIncome } = useGetAutoPoolIncome(userId as bigint)
  const {claimLevelIncome } = useClaimLevelDividend()
  const { data: userIncomeDetails } = useUserIncomeDetails(userId as bigint)
  const { data: totalTeamCount } = useTotalTeamCount(userId as bigint)
  const { data: totalTeamBiz } = useTotalTeamBiz(userId as bigint)
  const { claimAutoPool, data: claimAutoPoolTxHash } = useClaimAutoPool()
  // console.log(packages, packageId, packages[packageId])

  const { data: getMissedIncome } = useUserMissedIncome(userId as bigint)
  // const { data: userPoolRank } = useUserPoolRank(userId as bigint)
  const { data: checkPoolEligibility } = useCheckPoolEligibility(userId as bigint)
  const {data: availableLevelIncomeToClaim} = useAvailableLevelIncomeToClaim(userId as bigint)
  const { data: userAvailableToClaim1 } = useUserAvailableToClaim(userId as bigint, BigInt("0"))
  const { data: userAvailableToClaim2 } = useUserAvailableToClaim(userId as bigint, BigInt("1"))
  const { data: userAvailableToClaim3 } = useUserAvailableToClaim(userId as bigint, BigInt("2"))
  const { data: userAvailableToClaim4 } = useUserAvailableToClaim(userId as bigint, BigInt("3"))
  const { data: userAvailableToClaim5 } = useUserAvailableToClaim(userId as bigint, BigInt("4"))

  // Get the full URL
  const getfullURL = `${window.location.origin}?referral=${parsedUserInfo.id}`;
  // console.log(getDividendIncome)
  const handleRegister = async () => {
    await register()
  }
  const handleInvest = async () => {
    Number(parsedUserInfo.level) >= 1 ? await upgradeLevel(BigInt(userId as bigint), BigInt("1"), parseEther(investmentAmount || "0")) : handleRegister()

  };

  const [isAllowed, setIsAllowed] = useState(false);
  const [userAvailableToClaimed, setuserAvailableToClaimed] = useState([userAvailableToClaim1, userAvailableToClaim2, userAvailableToClaim3, userAvailableToClaim4]);
  /**
   * Approves the ERC20 contract to spend the user's investment amount
  */
  const handleApprove = () => {
    setIsAllowed(true)
    approve();
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(getfullURL).then(() => {
      toast.success('Referral link copied to clipboard!');
    });
  };

  const storedCode = localStorage.getItem('referralCode')

  useEffect(() => {
    if (storedCode) {
      setReferralCode(JSON.parse(storedCode))
    }
  }, [storedCode])
  console.log(availableLevelIncomeToClaim)

  // console.log(referralCode)

  // console.log(`approveTransactionConfirmations ${approveTransactionisFetched} transactionTransactionConfirmations ${transactionisFetched}`)
  const { isFetched: registerWaitForTransactionReceipt } = useWaitForTransactionReceipt({
    hash: registerTxHash,
  })
  const { isFetched: upgradeWaitForTransactionReceipt } = useWaitForTransactionReceipt({
    hash: upgradeTxHash,
  })
  const { isFetched: approveWaitForTransactionReceipt } = useWaitForTransactionReceipt({
    hash: approveTxHash,
  })
  const { isFetched: claimDividendWaitForTransactionReceipt } = useWaitForTransactionReceipt({
    hash: claimAutoPoolTxHash,
  })

  const [currentLevel, setCurrentLevel,] = useState<number>(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (registerWaitForTransactionReceipt) {
        toast.success("Registration successful")
      } else if (upgradeWaitForTransactionReceipt) {
        toast.success("Upgrading successful")
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [upgradeWaitForTransactionReceipt, registerWaitForTransactionReceipt])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (approveWaitForTransactionReceipt) {
        toast.success("Approval successful")
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [approveWaitForTransactionReceipt])

  useEffect(() => {
    if (isRegisterError) {
      setIsAllowed(false)
      toast.error("Registration Failed, Check Your Wallet balance and Try Again")
    }
    if (isApproveError) {
      setIsAllowed(false)
      toast.error("Approval Failed, Check Your Wallet balance and Try Again")
    }
  }, [isRegisterError, isApproveError])

  // console.log(parsedUserInfo.levelIncome)
  const userInfomation = async () => {
    try {
      const res = await readContract(config, {
        address: rich5WorldConfig.address as `0x${string}`,
        abi: rich5WorldConfig.abi,
        functionName: 'userInfo',
        args: [userId as bigint],
      })
      // toast.success(Number(c.totalDeposit) as any)
      return res
    } catch (error) {
      console.error('Error fetching blockchain data:', error);
    }
  }
  useEffect(() => {
    userInfomation().then((e) => {
      const c = parseUserInfo(e as any || [])
      if (c.level === BigInt(packages.length)) {
        setPackageId(Number(c.level) - 1)
        setInvestmentAmount(packages[Number(c.level) - 1])
        setCurrentLevel(Number(c.level) - 1)
      } else if (c.level < BigInt(packages.length)) {
        setPackageId(Number(c.level))
        setInvestmentAmount(packages[Number(c.level)])
        setCurrentLevel(Number(c.level))
      }
      setParsedUserInfo(c);
      setMaxLevel((Number(c.level)) === 12);
      setIsAllowed(false)
    })
  }, [userId])

  useEffect(() => {
    setuserAvailableToClaimed([userAvailableToClaim1, userAvailableToClaim2, userAvailableToClaim3, userAvailableToClaim4, userAvailableToClaim5])
  }, [claimDividendWaitForTransactionReceipt, userAvailableToClaim1])

  useEffect(() => {
    userInfomation().then((e) => {
      const c = parseUserInfo(e as any || [])
      if (c.level === BigInt(packages.length)) {
        setPackageId(Number(c.level) - 1)
        setCurrentLevel(Number(c.level) - 1)
        setInvestmentAmount(packages[Number(c.level) - 1])
      } else if (c.level < BigInt(packages.length)) {
        setPackageId(Number(c.level))
        setInvestmentAmount(packages[Number(c.level)])
        setCurrentLevel(Number(c.level))
      }
      setParsedUserInfo(c);
      setIsAllowed(false)
    
      setMaxLevel((Number(c.level)) === 12);
    })

  }, [registerWaitForTransactionReceipt, upgradeWaitForTransactionReceipt]);

  console.log(referralCode)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isUpgradeError || isRegisterError) {
        setIsAllowed(false)
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [isUpgradeError, isRegisterError])

  useEffect(() => {
    if (approveWaitForTransactionReceipt) {
      handleInvest()
    }
  }, [approveWaitForTransactionReceipt]);
  const requiredTeamSizes = [4, 10, 20, 30, 40];
  // console.log(getDividendIncome)
  return (
    <div className="">
      <div className="px-3 md:px-28 py-20 flex flex-col  pt-20">
        <div className="h-screen w-full fixed top-0 left-0 flex justify-center flex-col items-center">
          <div className="md:-top-10 -top-5 absolute">
            <img src="/svgs/OFF.svg" alt="off img" />
          </div>
          <div className="md:-bottom-10 -bottom-5 absolute">
            <img src="/svgs/25%.svg" alt="off img" />
          </div>
          <div className="absolute top-0 left-0 h-screen w-full -z-50">
            <img src="/svgs/bg.svg" alt="bg-galaxy" />
            <img src="/svgs/bg.svg" className="h-full" alt="bg-galaxy" />
            <img src="/svgs/bg.svg" alt="bg-galaxy" />
          </div>
        </div>


        <div className="flex gap-5 z-20 flex-col">
          <div className="w-full">
            <p className="text-2xl  max-sm:text-lg py-4 text-white font-bold">Dashboard</p>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 flex flex-col gap-5">
              <div className="w-full gap-2 flex-col flex flex-wrap max-sm:text-xs">
                <div className="flex items-center gap-2 ">
                  <p className="text-base font-semibold text-[#00ff03]">User ID:</p>
                  <p className="text-base text-white">{Number(userId)}</p>
                </div>
                <div className="flex items-center gap-2 max-sm:text-xs ">
                  <p className="text-base font-semibold text-[#00ff03] ">Wallet Address:</p>
                  <p className="text-base text-white">{address && address?.slice(0, 6)}...{address && address?.slice(-4)}</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl  max-sm:text-lg py-4 text-white font-bold">Purchase Slot</p>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 flex flex-col gap-5">
              <div className="w-full gap-2 justify-evenly flex flex-wrap max-sm:text-xs">

                {packages.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => { setInvestmentAmount(item); setPackageId(index + 1); }}
                    disabled={(Number(parsedUserInfo.level)) !== (index) || maxLevel}
                    className={`py-2 px-4 rounded-md   font-semibold ${currentLevel === (index) ? 'bg-primary cursor-pointer text-white' : currentLevel > (index) ? 'bg-gray-300 text-gray-500 cursor-not-allowed bg-opacity-40' : 'bg-gray-400 cursor-not-allowed text-white'
                      }`}
                  >
                    ${item}
                  </button>
                ))}
              </div>


              <div className="flex bg-[#021d18]  rounded-md p-2 justify-between max-sm:text-xs">
                <p className="text-[#00ff03]">Total slot Purchased</p>
                {/* <p className="text-white">${formatEther(userInfo?.[9] as bigint)}</p> */}
              </div>
              <button
                onClick={handleApprove}
                disabled={Number(parseEther(investmentAmount || "0")) === 0 || isAllowed || maxLevel}
                className={`w-full py-2 rounded-lg text-base max-sm:text-xs font-semibold bg-primary ${Number(parseEther(investmentAmount || "0")) === 0 || isApprovePending || isRegisterPending || isUpgradePending || isAllowed || maxLevel ? "outline-none opacity-50 cursor-not-allowed " : isUpgradeError || isRegisterError ? "outline-none  bg-red-500 text-white" : "text-white cursor-pointer"}`}
              >
                {isApprovePending || isRegisterPending || isUpgradePending || isAllowed ? <span className="animate-pulse transition-all ease-in-out">Proccessing...</span> : maxLevel ? "Max Level" : `Approve ${investmentAmount} USDT`}
              </button>

              <div className="flex bg-[#021d18] rounded-md p-2 justify-between max-sm:text-xs">
                <p className="text-[#00ff03]">Total Missed Income</p>
                <p className="text-white">${formatEther(BigInt(getMissedIncome?.toString() || "0"))}</p>
              </div>

            </div>
          </div>
          
          <div className="">
            <p className="text-2xl  max-sm:text-lg py-4 text-white font-bold">My team</p>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 max-sm:text-xs ">
              <div className="flex max-sm:flex-col gap-3 sm:justify-around">
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg sm:w-[30%] px-3">
                  <p className=" font-semibold my-auto text-[#00ff03]" >Total income earned</p>
                  <p className="text-white">${formatEther(userIncomeDetails?.[0] as bigint || 0n)}</p>
                </div>
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg sm:w-[30%] px-3">
                  <p className=" font-semibold my-auto  text-[#00ff03]">Total team members</p>
                  <p className="text-white">{Number(totalTeamCount as bigint || 0n)}</p>
                </div>
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg sm:w-[30%] px-3">
                  <p className=" font-semibold my-auto  text-[#00ff03]">Total team business</p>
                  <p className="text-white">${formatEther(totalTeamBiz as bigint || 0n)}</p>
                </div>

              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl  max-sm:text-lg py-4  text-white font-bold">Referral link</p>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 flex flex-col md:flex-row gap-5 max-sm:text-xs">
              <div className="w-full">
                <input
                  type="text"
                  value={getfullURL}
                  readOnly
                  className="h-12 border-2 border-black rounded-lg w-full px-3 text-center font-semibold"
                />
              </div>
              <div className="flex w-full justify-end">
                <button
                  onClick={handleCopy}
                  className="text-white text-xl max-sm:text-xs font-semibold bg-primary w-full md:w-fit py-2 px-4 rounded-md"
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-2xl  max-sm:text-lg py-4 text-white font-bold">My direct</p>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 max-sm:text-xs">
              <div className="flex flex-col gap-3">
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg">
                  <p className=" font-semibold my-auto text-[#00ff03]">Direct members:</p>
                  <p className="text-white">{Number(userInfo?.[6]) || 0}</p>
                </div>
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg">
                  <p className=" font-semibold my-auto text-[#00ff03]">Direct business:</p>
                  <p className="text-white">${formatEther(userInfo?.[7] as bigint || 0n)}</p>
                </div>
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg">
                  <p className=" font-semibold my-auto text-[#00ff03]">Referral income earned:</p>
                  <p className="text-white">${formatEther(userIncomeDetails?.[2] as bigint || 0n)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <p className="text-2xl  max-sm:text-lg py-4 text-white font-bold">Level income</p>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3">
              <div className="flex flex-col gap-3 max-sm:text-xs">
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg">
                  <p className=" font-semibold my-auto text-[#00ff03] ">Total level income earned:</p>
                  <p className="text-white">${formatEther(userIncomeDetails?.[1] as bigint || 0n)}</p>
                </div>
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg">
                  <p className=" font-semibold my-auto text-[#00ff03] ">Available level income: <span className="text-[#ffffff]">${formatEther(availableLevelIncomeToClaim || 0n)}</span></p>
                  {availableLevelIncomeToClaim > 0? <button className="rounded-lg border-2 border-primary text-white py-1 px-3 font-semibold" onClick={claimLevelIncome}>Claim</button> : <button className="rounded-lg border-2 border-primary text-white py-1 px-3 font-semibold">Not Eligible</button>}
                </div>


              </div>
            </div>
          </div>

          <div className="">
            <p className="text-2xl  max-sm:text-lg py-4 text-white font-bold">Autopool income</p>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 max-sm:text-xs">
              <div className="flex flex-col gap-3">
                <div className="bg-[#021d18]  flex justify-between p-2 rounded-lg max-sm:text-xs">
                  <p className=" font-semibold my-auto text-[#00ff03]">Total autopool income earned:</p>
                  <p className="text-white">${formatEther(userInfo?.[7] as bigint || 0n)}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-2xl  max-sm:text-lg py-4 text-white font-bold">Available pool income</p>
            </div>
            <div className="bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 max-sm:text-xs">
              <div className="flex flex-col gap-3">
                {getAutoPoolIncome?.map((poolBalance: any, index: number) => (

                  <div key={index} className="bg-[#021d18]  flex justify-between p-2 rounded-lg">
                    <p className=" font-semibold my-auto text-[#00ff03]">Pool {index + 1}</p>
                    <p className="text-gray-300">
                      ${formatEther(poolBalance)} / ${userAvailableToClaimed && formatEther(userAvailableToClaimed[index] as any || "0")}
                    </p>
                    
                    {
                    Number(userId) > 1000 && Number(checkPoolEligibility &&checkPoolEligibility[index]) > 0 && index === 0 && Number(userInfo?.[6]) === requiredTeamSizes[index]? <button className="rounded-lg border-2 border-primary text-gray-300 py-1 px-3 font-semibold max-sm:text-xs" onClick={() => claimAutoPool(BigInt(index))}>Claim</button>: Number(userId) > 1000 && Number(checkPoolEligibility &&checkPoolEligibility[index]) > 0?
                    <button className="rounded-lg border-2 border-primary text-gray-300 py-1 px-3 font-semibold max-sm:text-xs" >Eligible</button>:
                    <button className="rounded-lg border-2 border-primary text-gray-300 py-1 px-3 font-semibold max-sm:text-xs" >Not Eligible</button>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* <div>
            <p className="text-2xl  max-sm:text-lg py-4  text-white font-bold">Income claim</p>
            <div className="flex flex-col gap-3">
              <div className=" bg-[#021d18] bg-opacity-50 w-full rounded-lg py-5 px-3 flex flex-col gap-5 ">
                <div className="flex justify-between">
                  <p className="font-bold text-base">Total income claimed</p>
                  <p className="text-gray-700 ml-1">${formatEther(parsedUserInfo.levelIncome)}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-base"> TotalIncome to claim</p>
                  <p className="text-gray-700 ml-1">${formatEther(availableLevelIncomeToClaim.data || 0n)}</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    </div>

  )
}

export default Dashboard