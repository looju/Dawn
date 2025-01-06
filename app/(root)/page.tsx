"use client";
import RightSideBar from "@/components/RightSideBar";
import Headerbox from "@/components/headerbox";
import TotalBalanceBox from "@/components/totalBalanceBox";
import { firstNames, lastNames } from "@/constants";
import { getLoggedInUser } from "@/lib/user.actions";
import React, { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";

export default function Home() {
  const [loggedIn2] = useLocalStorage<any>("user", null);
  const [generatedFirstName, setGeneratedFirstName] = useState("");
  const [generatedLastName, setGeneratedLastName] = useState("");
  const email = loggedIn2?.providerUid;
  const loggedIn = {
    firstName: generatedFirstName,
    lastName: generatedLastName,
    email: email,
  };

  useEffect(() => {
    const generate = () => {
      const randomFirstName =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const randomLastName =
        lastNames[Math.floor(Math.random() * lastNames.length)];
      setGeneratedFirstName(randomFirstName);
      setGeneratedLastName(randomLastName);
    };
    generate();
  }, []);
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
      <RightSideBar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
}
