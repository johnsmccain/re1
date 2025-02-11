import { ConnectButton } from "@rainbow-me/rainbowkit";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import logo from "../assets/Rich5world (1).png"
const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { isConnected } = useAccount();


  return (
    <div className="fixed top-0 w-full flex items-center justify-between py-3 px-3 md:py-4 md:px-28 backdrop-blur-md z-40 ">
      <div className="my-auto">
        {/* <div className="text-2xl md:text-4xl my-auto font-bold">
          <span className="text-white">Rich</span>
          <span className="text-primary">5</span>
          <span className="text-white">World</span>
        </div> */}
        <img src={logo} alt="logo" className="h-14" />
      </div>{
        isConnected &&
        <div className="flex gap-3 flex-wrap max-sm:hidden">
          <button onClick={() => navigate('/dashboard')} className="my-auto hover:text-primary transition-colors text-white cursor-pointer">Dashboard</button>
          <button onClick={() => navigate('/activities')} className="my-auto hover:text-primary transition-colors text-white cursor-pointer">Activities</button>
          <button onClick={() => navigate('/referals')} className="my-auto hover:text-primary transition-colors text-white cursor-pointer">Referrals</button>
        </div>}
      {/* <div className="gap-2 flex h-[35px]"> */}
        <ConnectButton />
      {/* </div> */}

      {/* Mobile */}
      <div className="sm:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <MenuIcon size={20} className="text-white"/>
      </div>
      {
        isMenuOpen &&
        <div className="sm:hidden absolute top-16 bg-black w-full flex justify-center right-0">
          <div className="flex flex-col gap-10 p-9">
            <button onClick={() => {navigate('/dashboard'); setIsMenuOpen(false)}} className="my-auto hover:bg-primary transition-colors hover:text-black text-white cursor-pointer  w-full">Dashboard</button>
            <button onClick={() => {navigate('/activities'); setIsMenuOpen(false)}} className="my-auto hover:bg-primary transition-colors hover:text-black text-white cursor-pointer w-full ">Activities</button>
            <button onClick={() => {navigate('/referals'); setIsMenuOpen(false)}} className="my-auto hover:bg-primary transition-colors hover:text-black text-white cursor-pointer  w-full">Referals</button>
            <div className="gap-2 flex " onClick={() => setIsMenuOpen(false)}>
              <ConnectButton />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar;