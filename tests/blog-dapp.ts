import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { BlogDapp } from '../target/types/blog_dapp';

describe('blog-dapp', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.BlogDapp as Program<BlogDapp>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
