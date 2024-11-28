import Headerbox from "@/components/headerbox";
import React from "react";

export default function Home() {
  const loggedIn = { firstName: "Loju" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="welcome"
            user={loggedIn?.firstName || "Guest"}
            subText="Access and manage your accounts and transactions"
          />
        </header>
      </div>
    </section>
  );
}
