"use client";
import { CreditCardProps } from "@/types";
import Link from "next/link";
import React from "react";
import { ATMCard as Cards } from "atm-card-react";

export default function ATMCard({
  account,
  userName,
  showBalance,
  system,
  bgColor,
}: CreditCardProps) {
  return (
    <div id="PaymentForm">
      <Link href={"/"}>
        <Cards
          cvv={"222"}
          holderName={userName}
          number={"3344"}
          month={1}
          year={26}
          system={system}
          hideDigits={true}
          dark={true}
          onChange={() => null}
          lifted={true}
          scale={0.6}
          bgColor={bgColor}
          bankLogo={
            <h1
              style={{
                fontFamily: "serif",
                fontSize: 14,
                color: "white",
              }}
            >
              Horizon
            </h1>
          }
        />
      </Link>
    </div>
  );
}
