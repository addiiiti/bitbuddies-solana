# BitBuddies

A decentralized habit accountability app built on Solana.

---

## 🔗 Overview

- Two users commit to a goal and stake SOL tokens.
- If one user fails, their SOL is burned or sent to the other user.
- Ensures real commitment with real stakes.

---

## 🛠 Tech Stack

- **Solana (Rust + Anchor)** – Smart contract backend
- **Next.js + Tailwind CSS** – Frontend framework and styling
- **Solana Wallet Adapter** – Wallet connection & interaction
- **@solana/web3.js** – Interact with smart contract
- **Firebase (Planned)** – For off-chain session metadata

---

## 📦 Structure

- `/backend`: Anchor-based Solana program
- `/frontend`: Next.js app with wallet integration

---

## 🚀 Status

- ✅ Smart contract deployed on Devnet
- ✅ Phantom wallet connection functional
- 🔜 Add session staking & logic
- 🔜 Build dashboard & user sessions
- 🔜 Firebase + email verification
- 🔜 Premium landing page

---

## 🧪 Commands

```bash
# Run frontend dev server
cd frontend && npm run dev

# Build & deploy Solana program
cd backend && anchor build && anchor deploy --provider.cluster devnet
