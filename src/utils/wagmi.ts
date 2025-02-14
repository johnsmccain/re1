
// import { getDefaultConfig } from '@rainbow-me/rainbowkit';
// import { bsc } from 'viem/chains';

// export const config = getDefaultConfig({
//   appName: 'By_forex',
//   projectId: '296924cdb9a40ac2bfe6b78e60779e09',
//   chains: [ bsc],
// });

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { opBNB } from 'viem/chains';
import { binanceWallet, metaMaskWallet, rainbowWallet, trustWallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { createConfig, http } from 'wagmi';
const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [rainbowWallet, walletConnectWallet, trustWallet, metaMaskWallet, binanceWallet],
  },
],
{
  appName: 'Rich 5 World',
  projectId: 'cba249ad45d3903ef0079a56364519c2',
})
export const config = createConfig({
  connectors,
  chains: [opBNB],
  transports: {
    [opBNB.id]: http(),
  },
});