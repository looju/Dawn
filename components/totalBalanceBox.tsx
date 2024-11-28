import React from "react";

const TotalBalanceBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  let currency = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });

  return (
    <section className="total-balance">
      <div className="total-balance-chart"></div>
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold mb-1">{totalBanks} Bank Accounts</h2>
        <div className="gap-2">
          <span>Total current balance</span>
          <h4 className="text-2xl font-5xl font-extrabold ">
            {currency.format(totalCurrentBalance)}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
