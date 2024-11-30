"use client";
import { sidebarLinks } from "@/constants";
import { SiderbarProps } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SideBar = ({ user }: SiderbarProps) => {
  const router = useRouter();
  return (
    <div className="sidebar">
      <nav className="flex flex-col gap-4">
        <div className="mb-12 cursor-pointer items-center gap-2">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="logo"
            className="max-xl:w-11"
          />
          <h1 className="sidebar-logo">Horizon</h1>
          {sidebarLinks.map((item) => (
            <>
              <h2
                onClick={(e) => {
                  e.preventDefault();
                  router.push(item.route);
                }}
                key={item.imgURL}
                className={cn}
              >
                {item.label}
              </h2>
            </>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
