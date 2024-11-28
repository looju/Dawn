import Headerbox from "@/components/headerbox";
import TotalBalanceBox from "@/components/totalBalanceBox";
import React from "react";

export default function Home() {
  const loggedIn = { firstName: "Loju" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={12500}
          />
        </header>
      </div>
    </section>
  );
}
