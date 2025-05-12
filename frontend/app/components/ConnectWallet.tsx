'use client'

import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export function ConnectWallet() {
  const { setVisible } = useWalletModal()
  const { connected, publicKey } = useWallet()

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        onClick={() => setVisible(true)}
        className="bg-purple-600 px-6 py-3 rounded text-white font-semibold hover:bg-purple-700"
      >
        {connected ? 'Wallet Connected' : 'Connect Wallet'}
      </button>

      {connected && publicKey && (
        <p className="text-sm text-gray-300">
          Connected wallet: <span className="font-mono">{publicKey.toBase58()}</span>
        </p>
      )}
    </div>
  )
}
