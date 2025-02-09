// import { ConnectButton } from "@rainbow-me/rainbowkit"
// import { Packakges } from "../utils/constants"
// import PackageCard from "../components/PackageCard"
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom"
import { useAccount } from "wagmi"

const Home = () => {
  const navigate = useNavigate();

  const { isConnected } = useAccount();

  const goDashboard = () => {
    if(!isConnected) {
      return toast.error('Please connect your wallet to continue');
    }
    navigate('/dashboard')
  }
  // register page
  // const goRegister = () => {
  //   navigate('/register')
  // }
  const location = useLocation();
  
  useEffect(() => {
    if(location.search.split('=')[1]){
      localStorage.setItem('referralCode', JSON.stringify(location.search.split('=')[1]));
    }else{
      localStorage.setItem('referralCode', JSON.stringify('1000'));
    }
    console.log(localStorage.getItem('referralCode'))
  }, [location.search.split('=')[1]])

  return (
    <div>
      {/* <div className=" w-full fixed top-0 left-0 flex justify-center flex-col items-center">
        <div className="md:-top-10 -top-5 absolute">
          <img src="/svgs/OFF.svg" alt="off img" />
        </div>
        <div className="md:-bottom-10 -bottom-5 fixed">
          <img src="/svgs/25%.svg" alt="off img" />
        </div>
        <div className="absolute top-0 left-0 h-screen w-full -z-50">
          <img src="/svgs/bg.svg" alt="bg-galaxy" />
          <img src="/svgs/bg.svg" className="h-full" alt="bg-galaxy" />
          <img src="/svgs/bg.svg" alt="bg-galaxy" />
        </div>
      </div> */}

      {/* =================== MAIN PAGE ====================== */}
      <div className="py-20 md:py-32 px-3 overflow-y-auto h-screen w-full home container mx-auto flex flex-col items-center">
        <div className="flex flex-col gap-5 items-center md:p-20 max-w-[900px] p-5 m-auto border-primary border rounded-lg border-opacity-20 bg-primary bg-opacity-10 backdrop-blur-md">
          <p className="font-bold text-2xl text-center md:text-5xl text-white">Join Now</p>
          <p className="text-white px-2 py-3 text-sm md:text-base">
          Experience a fully decentralized platform with no admin control, where all income is automatically distributed through smart contracts. Transparent, secure, and fair – our system empowers you to grow your network and earn in real time without intermediaries. Join today and take control of your financial future!          </p>
          <div className="flex w-full justify-center gap-3 py-3">
            <button onClick={goDashboard} className="text-primary border-2 scale-[1.01] rounded-full px-8 py-2 border-primary">Enter App</button>
          </div>
        </div>

        {/* ========= PACKAGES ======== */}
        {/* <div className="py-5">
          <p className="text-2xl py-1 text-white font-bold">Packakges</p>
          <div className="w-full package overflow-x-scroll">
            <div className="flex gap-5 py-4 w-full px-2">
              {
                Packakges.map((item, index) => (
                  <div
                  // onMouseEnter={() => setActive(index)}
                  >
                    <PackageCard key={index} packageMode={item} />
                  </div>
                ))
              }
            </div>
          </div>
        </div> */}

        {/* ========= FOOTER ======== */}
        <div className="flex w-full text-center absolute bottom-0 left-0 justify-center">
          <p className="text-primary text-sm">&copy; {new Date().getFullYear()} ByForex. All rights reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Home