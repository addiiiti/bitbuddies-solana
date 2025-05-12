use anchor_lang::prelude::*;

declare_id!("H8XkNyH9xsW116zk5DkWojqVhTe1AtA8r8y62uLTqqjG");

#[program]
pub mod backend {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
