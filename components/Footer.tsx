import { signOut } from "@/lib/user.actions";
import { FooterProps, User } from "@/types";
import Image from "next/image";
import React from "react";
import { TbDoorExit } from "react-icons/tb";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  return (
    <footer className={type == "desktop" ? "mt-[200%]" : undefined}>
      <div className="flex flex-row w-[110%] h-[100%]  items-center">
        <Image
          src={"/icons/logo.svg"}
          alt="sign-out-img"
          width={30}
          height={30}
        />
        <div
          className={type == "mobile" ? "footer_email-mobile" : "footer_email"}
        >
          <p className="font-medium text-sm text-black-1 truncate">User name</p>
          <p className="font-medium text-xs text-black-1 truncate">
            user email
          </p>
        </div>
        <TbDoorExit
          width={30}
          height={30}
          color="blue"
          onClick={() => signOut()}
          className="hover:cursor-pointer"
        />
      </div>
    </footer>
  );
};

export default Footer;
