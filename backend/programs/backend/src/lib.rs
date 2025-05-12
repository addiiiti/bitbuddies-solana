use anchor_lang::prelude::*;

declare_id!("H8XkNyH9xsW116zk5DkWojqVhTe1AtA8r8y62uLTqqjG");


#[program]
pub mod backend {
    use super::*;

    pub fn create_pact(ctx: Context<CreatePact>, stake_amount: u64) -> Result<()> {
        let pact = &mut ctx.accounts.pact;

        pact.user1 = *ctx.accounts.user1.key;
        pact.user2 = *ctx.accounts.user2.key;
        pact.stake_amount = stake_amount;
        pact.verified1 = false;
        pact.verified2 = false;

        Ok(())
    }

    pub fn verify_proof(ctx: Context<VerifyProof>, user_index: u8) -> Result<()> {
        let pact = &mut ctx.accounts.pact;

        if user_index == 1 {
            pact.verified1 = true;
        } else if user_index == 2 {
            pact.verified2 = true;
        }

        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreatePact<'info> {
    #[account(init, payer = user1, space = 8 + 32*2 + 8 + 1 + 1)]
    pub pact: Account<'info, Pact>,

    #[account(mut)]
    pub user1: Signer<'info>,

    /// CHECK: We’re just saving user2's public key — no need to verify
    pub user2: AccountInfo<'info>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct VerifyProof<'info> {
    #[account(mut)]
    pub pact: Account<'info, Pact>,
}

#[account]
pub struct Pact {
    pub user1: Pubkey,
    pub user2: Pubkey,
    pub stake_amount: u64,
    pub verified1: bool,
    pub verified2: bool,
}
