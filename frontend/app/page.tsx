import React from 'react';
import Logo from './components/logo';
import { ConnectWallet } from './components/ConnectWallet';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="landing-container">
      <div className="nav-header">
        <div className="logo-section">
          <Logo />
        </div>
        <ConnectWallet />
      </div>

      <div className="hero-section">
        <div className="pet-logo-container">
          <Image 
            src="/bitbuddy.png" 
            alt="BitBuddy Pet Logo" 
            width={300} 
            height={300} 
            priority
          />
        </div>
        
        <h1 className="hero-title">
          <span className="purple-text">Decentralized.</span> <span className="teal-text">Trustless.</span><br />
          <span className="purple-text">Together.</span>
        </h1>
        
        <p className="hero-description">
          Commit to your habits with friends and SOL on the Solana blockchain. Powered by accountability.
        </p>
        
        <button className="select-wallet-btn">
          <span className="wallet-icon">📱</span>
          Select Wallet
        </button>
      </div>

      {/* Decorative circles */}
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
    </main>
  );
}