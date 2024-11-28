"use client";
import { ChartProps } from "@/types";
import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }: ChartProps) => {
  return (
    <Doughnut
      data={chartData}
      options={{ cutout: "95%", radius: "100%" }}
      style={{ width: 240, height: 240 }}
    />
  );
};

export default DoughnutChart;
