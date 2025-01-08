import { signOut } from "@/lib/user.actions";
import { trimString } from "@/lib/utils";
import { FooterProps, User } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { TbDoorExit } from "react-icons/tb";
import useLocalStorage from "use-local-storage";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();
  const curYr = new Date().getFullYear();
  const [loggedInUser] = useLocalStorage("user", null);
  const handleLogOut = async () => {
    await signOut().then(() => {
      router.push("/signIn");
    });
  };
  return (
    <footer className={type == "mobile" ? "mt-[200%]" : undefined}>
      <div className="flex flex-row w-[110%] h-[100%]  items-center">
        <TbDoorExit
          width={50}
          height={50}
          color="blue"
          onClick={() => handleLogOut()}
          className="hover:cursor-pointer"
        />
        <div
          className={
            type == "desktop" ? "footer_email-mobile ml-2" : "footer_email"
          }
        >
          <p className="font-medium text-sm text-black-1 truncate">
            {trimString(loggedInUser?.providerUid, 10)}...
          </p>
          <p className="font-medium text-xs text-black-1 truncate">
            <span className="mr-1">&#169;{curYr}</span>Dawn Bank.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
