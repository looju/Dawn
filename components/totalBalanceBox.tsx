"use client";
import React from "react";
import CountUp from "react-countup";
const TotalBalanceBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  let currency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(totalCurrentBalance);

  return (
    <section className="total-balance">
      <div className="total-balance-chart"></div>
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold mb-1">Bank Accounts:{totalBanks}</h2>
        <div className="gap-2">
          <span>Total current balance</span>
          <h4 className="text-2xl font-5xl font-extrabold ">
            <CountUp
              end={totalCurrentBalance}
              start={0}
              duration={4}
              decimal="."
              prefix="₦"
            />
          </h4>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
