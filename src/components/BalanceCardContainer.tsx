import { MoveRight, Wallet } from "lucide-react";
import BalanceCard from "./BalanceCard";
import BalanceCardSkeleton from "./BalanceCardSkeleton";

import { getWalletCards } from "@/actions/wallet.action";
import { colorCollection } from "@/lib/colorCollection";

async function BalanceCardContainer() {
  const wallets = await getWalletCards();

  // new account
  if (wallets && wallets.length === 0) {
    return (
      <div className="grid place-items-center my-4 md:my-8">
        <a
          href="/wallet"
          className="cursor-pointer group hover:underline hover:bg-neutral-500/10 duration-200 ease-in-out border-2 border-dashed py-6 rounded-lg flex items-center justify-center gap-2 w-full"
        >
          <div className="flex items-center gap-2">
            <span className="font-semibold">Start Tracking Your Expenses</span>
            <MoveRight className="group-hover:-rotate-20 ease-in-out duration-200" />
          </div>
        </a>
      </div>
    );
  }

  // loading state
  if (!wallets || wallets.length === 0) {
    return (
      <div className="grid place-items-center my-4 md:my-8">
        <BalanceCardSkeleton />
      </div>
    );
  }

  return (
    <div className="grid place-items-center h-40 md:h-48 my-4 md:my-8">
      <BalanceCard wallets={wallets!!} colors={colorCollection} />
    </div>
  );
}

export default BalanceCardContainer;
