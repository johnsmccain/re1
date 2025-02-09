import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useAccount } from "wagmi";
// import { useWriteContract } from "wagmi";
// import { byForexConfig } from "../../abi";

const Earning = () => {
  const navigate = useNavigate();

  const { isConnected, address } = useAccount();
  // const { writeContract, error } = useWriteContract()

  useEffect(() => {
    if (!isConnected) {
      navigate("/");
    }
  }, [isConnected, navigate]);

  const maskAddress = (address: string) => {
    if (address.length <= 8) return address;
    return `${address.slice(0, 4)}****${address.slice(-4)}`;
  };




  return (
    <div className="px-3 md:px-28 py-20 flex flex-col ">
      <div className="h-screen w-full absolute top-0 left-0 flex justify-center flex-col items-center">
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

      <div>
        <p className="text-2xl md:text-4xl text-white font-bold">Dashboard</p>
        <div className="flex flex-col text-white gap-2 py-4 px-2">
          <div className="flex justify-between">
            <p className="text-white">user:</p>
            <p className="text-primary font-semibold">{maskAddress(address ? address as string : "Gabrielgoodwallet here man")}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">Total investments:</p>
            <p className="text-primary font-semibold">$150</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">Total withdrawal:</p>
            <p className="text-primary font-semibold">$150</p>
          </div>
          <div className="flex justify-between">
            <p className="text-white">Referrals: </p>
            <p className="text-primary font-semibold">10</p>
          </div>
        </div>
        <button className="w-full py-2 rounded-lg bg-primary text-white font-semibold text-lg" >Withdraw</button>
      </div>

    </div>
  )
}

export default Earning