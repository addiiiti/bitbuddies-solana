'use client'

import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'
import { useState } from 'react'

export function ConnectWallet() {
  const { setVisible } = useWalletModal()
  const { connected, publicKey, disconnect } = useWallet()
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className="flex flex-col items-center gap-4">
      {!connected ? (
        <button
          onClick={() => setVisible(true)}
          className="connect-wallet-btn"
        >
          Connect Wallet
        </button>
      ) : (
        <div className="relative inline-block text-left">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:brightness-110 transition"
          >
            Wallet Connected
          </button>

          {dropdownOpen && (
            <div className="absolute mt-2 w-56 right-0 bg-white rounded-lg shadow-lg z-10">
              <div className="px-4 py-2 text-xs text-gray-500">
                <p className="break-words">
                  <span className="font-mono">
                    {publicKey?.toBase58().slice(0, 6)}...
                    {publicKey?.toBase58().slice(-4)}
                  </span>
                </p>
              </div>
              <button
                onClick={disconnect}
                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded-b-lg"
              >
                Disconnect Wallet
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
