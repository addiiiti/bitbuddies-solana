import { ConnectWallet } from './components/ConnectWallet'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to BitBuddies</h1>
      <p className="text-lg mb-4 text-center">Commit to your goals with real stakes on Solana.</p>
      <ConnectWallet />
    </main>
  )
}
