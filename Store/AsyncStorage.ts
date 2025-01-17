import { StateStorage } from "zustand/middleware";
export const ZustandStorage: StateStorage = {
  setItem: async (name, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      const storedValue = await localStorage.setItem(name, jsonValue);

      return storedValue;
    } catch (e) {
      console.log("error saving value with async storage");
    }
  },
  getItem: async (name) => {
    try {
      const jsonValue = await localStorage.getItem(name);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("error getting value with async storage");
    }
  },
  removeItem: async (name) => {
    try {
      await localStorage.removeItem(name);
      console.log("success deleting item");
    } catch (e) {
      console.log("error removing value with async storage");
    }
  },
};
