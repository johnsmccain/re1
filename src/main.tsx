import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import './index.css'
import App from './App.tsx'
import '@rainbow-me/rainbowkit/styles.css';
import { BrowserRouter } from 'react-router-dom'
import { config } from './utils/wagmi.ts';
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <BrowserRouter>
            <div className="relative">
              <div className="absolute inset-0 -z-10 w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#FBBF24_100%)]"></div>
              <App />
            </div>
          </BrowserRouter>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
