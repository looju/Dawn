import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ZustandStorage } from "./AsyncStorage";

export interface Transaction {
  id: string;
  amount: number;
  date: number;
  title: string;
}

export interface BalanceState {
  transactions: Array<Transaction>;
  runTransaction: (transaction: Transaction) => void;
  balance: () => number;
  clearTransaction: () => void;
  title: () => string | string;
}

export const useDataStore = create(
  persist(
    (set, get) => ({
      user: [],
      setUser: (data: any) => {
        set(() => ({
          user: [data],
        }));
      },
    }),
    {
      name: "balanceStore",
      storage: createJSONStorage(() => ZustandStorage),
    }
  )
);
