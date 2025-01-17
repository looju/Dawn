"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import "chart.js/auto";
import { Pie, Doughnut } from "react-chartjs-2";
import { TotlaBalanceBoxProps } from "@/types";
import { getRandomColor } from "@/helpers/RandomColor";
const TotalBalanceBox = ({
  accounts,
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  const Data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
      color: getRandomColor(),
      name: "Bank of America",
    },
    {
      id: 2,
      year: 2017,
      userGain: 45677,
      userLost: 345,
      color: getRandomColor(),
      name: "Bank of America",
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555,
      color: getRandomColor(),
      name: "Bank of America",
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
      color: getRandomColor(),
      name: "Bank of America",
    },
    {
      id: 4,
      year: 2019,
      userGain: 90000,
      userLost: 4555,
      color: getRandomColor(),
      name: "Bank of America",
    },
  ];
  const chartData = {
    datasets: [
      {
        labels: Data.map((data) => [data.color]),
        data: Data.map((data) => data.userGain),
        borderColor: Data.map((data) => [data.color]),
        borderWidth: 14,
      },
    ],
    labels: Data.map((data) => [data.color]),
  };

  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <Doughnut
          data={chartData}
          options={{
            cutout: "95%",
            radius: "100%",
            plugins: { legend: { display: false } },
          }}
          style={{ width: 240, height: 240 }}
        />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="text-lg font-bold mb-1">Bank Accounts:{totalBanks}</h2>
        <div className="gap-2">
          <span>Total current balance</span>
          <h4 className="text-2xl font-5xl font-extrabold ">
            <div className="w-full">
              <CountUp
                end={totalCurrentBalance}
                start={0}
                duration={4}
                decimal="."
                decimals={2}
                prefix="₦"
              />
            </div>
          </h4>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
