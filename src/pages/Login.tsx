import { useState } from 'react'

const Login = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const setConnection = () => {
    setIsConnected(true);
  }

  const sendingEmail = () => {
    setEmailSent(true);
  }

  return (
    <div>
      <div className="w-full md:h-full h-fit py-32 md:py-0 flex justify-center items-center">
        <p className="font-bold text-3xl">BYFOREX</p>
      </div>
      <div className="px-6">
        <div className="flex justify-center flex-col gap-5 items-center">
          <input type="text" disabled className="rounded-md bg-primary w-full h-12" />
          <div onClick={setConnection} className="px-8 py-2 bg-primary text-black rounded-md text-xl">Connect wallet</div>
        </div>
        {isConnected &&
          <div className="py-10">
            <div className="rounded-lg justify-center items-center bg-primary p-8">
              <div className=" flex flex-col gap-10 ">
                <div className="relative w-full h-fit">
                  <label className="absolute -top-3 bg-primary px-1 text-lg left-3" htmlFor="email">Email Address</label>
                  <input type="text" id="email" className="bg-transparent border border-black w-full h-12" />
                </div>
                <div className="flex gap-5">
                  {emailSent && <input type="text" className="h-12 w-full bg-white placeholder:text-primary px-3 rounded-md" placeholder="Submit OTP" />}
                  <div onClick={sendingEmail} className="px-6 py-2 w-fit bg-white text-black rounded-md text-xl">Submit</div>
                </div>
              </div>

              {emailSent &&
                <div className="flex flex-col pt-10 gap-10">
                  <div className="relative w-full h-fit">
                    <label className="absolute -top-3 bg-primary px-1 text-lg left-3" htmlFor="username">User Name</label>
                    <input type="text" id="username" className="bg-transparent border border-black w-full h-12" />
                  </div>
                  <div className="relative w-full h-fit">
                    <label className="absolute -top-3 bg-primary px-1 text-lg left-3" htmlFor="ref">Referral Name</label>
                    <input type="text" id="ref" className="bg-transparent border border-black w-full h-12" />
                  </div>
                  <div className="py-10 w-full flex justify-center">
                    <button className="text-black text-xl bg-white py-2 px-12 uppercase rounded-full">Register</button>
                  </div>
                </div>
              }
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Login