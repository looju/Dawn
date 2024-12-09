import { Transition } from "@headlessui/react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import clsx from "clsx";

type AlertBoxProps = {
  message: string;
  info: "Success" | "Error" | "Warning";
};
export function AlertBox({ message, info }: AlertBoxProps) {
  return (
    <Alert
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: "0.5rem",
        boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
        zIndex: 1000,
        width: "20rem",
        height: "4rem",
        backgroundColor: info == "Error" ? "red" : "green",
      }}
      className="min-sm:hidden"
    >
      <AlertTitle style={{ color: "#fff" }}>{info}</AlertTitle>
      <AlertDescription style={{ color: "#fff" }}>{message}</AlertDescription>
    </Alert>
  );
}
