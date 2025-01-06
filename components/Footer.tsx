import { signOut } from "@/lib/user.actions";
import { FooterProps, User } from "@/types";
import Image from "next/image";
import React from "react";
import { TbDoorExit } from "react-icons/tb";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  return (
    <footer>
      <div className="flex flex-row w-[100%] h-[100%] items-center">
        <Image
          src={"/icons/logo.svg"}
          alt="sign-out-img"
          width={30}
          height={30}
        />
        <div className="left-1 ml-1 mr-2.5">
          <p className="font-medium text-sm text-black-1 truncate">User name</p>
          <p className="font-medium text-xs text-black-1">user email</p>
        </div>
        <TbDoorExit
          width={30}
          height={30}
          color="blue"
          onClick={() => signOut()}
        />
      </div>
    </footer>
  );
};

export default Footer;
