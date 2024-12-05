import { RightSidebarProps } from "@/types";
import React from "react";
import { FaPlus } from "react-icons/fa";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-4">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p style={{ fontWeight: "lighter", fontSize: 12 }}>{user.email}</p>
          </div>
        </div>
      </section>
      <section className="banks">
        <div style={styles.banksRow}>
          <h1 style={styles.banks}>My banks</h1>
          <h1 style={styles.plus}>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                alignItems: "center",
              }}
            >
              <FaPlus style={{}} />
              <h2 style={styles.add}>Add Bank</h2>
            </div>
          </h1>
        </div>
        {banks.length > 0 && (
          <div className="flex flex-1 flex-col items-center justify-center relative gap-5">
            <div className="relative z-10">BANK CARD 1</div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                BANK CARD 2
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

const styles = {
  banksRow: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  banks: {
    fontWeight: "bold",
    fontSize: 15,
  },
  plus: {
    display: "flex",
    alignSelf: "flex-end",
  },
  add: {
    fontSize: 15,
  },
};
export default RightSideBar;
