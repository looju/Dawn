"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SiderbarProps } from "@/types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import Footer from "./Footer";

const SideBar = ({ user }: SiderbarProps) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <div className="sidebar">
      <nav className="flex flex-col gap-4">
        <div className="mb-12 cursor-pointer items-center gap-2">
          <div className="flex flex-row items-center">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="logo"
              className="max-xl:w-11"
            />
            <h1 className="sidebar-logo">Horizon</h1>
          </div>
          {sidebarLinks.map((item, index) => {
            const isActive =
              pathName === item.route || pathName.startsWith(`${item.route}/`);
            return (
              <>
                <div key={index}>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(item.route);
                    }}
                    className={cn("sidebar-link", "w-full", {
                      "bg-bankGradient": isActive,
                    })}
                  >
                    <div className="relative size-6 w-full h-2 items-center flex flex-row my-2">
                      <Image
                        src={item.imgURL}
                        width={20}
                        height={20}
                        alt="link images"
                        className="mr-2"
                      />
                      <p
                        className={cn("sidebar-label", {
                          "!text-white": isActive,
                        })}
                        style={{
                          textWrap: "pretty",
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </nav>
      <Footer user={user} />
    </div>
  );
};

export default SideBar;
