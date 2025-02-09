import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { ReferralsList } from './pages/ReferralsList'
// import { InvestmentsList } from './pages/InvestmentsList'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import { InvestmentsList } from './pages/InvestmentsList'
import { useAccount } from 'wagmi'


function App() {
    const { isConnected } = useAccount()
    console.log(isConnected)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={isConnected ?<Dashboard /> : <Home/>} />
        <Route path="/referals" element={isConnected ?<ReferralsList /> : <Home/>} />
        <Route path="/activities" element={isConnected ?<InvestmentsList /> : <Home/>} />
      </Routes>
      <Toaster />

    </>
  )
}

export default App
