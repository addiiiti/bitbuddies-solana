'use client'

import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import WalletContextProvider from './components/WalletContextProvider'
import '@solana/wallet-adapter-react-ui/styles.css'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WalletContextProvider>
      <WalletModalProvider>
        {children}
      </WalletModalProvider>
    </WalletContextProvider>
  )
}

