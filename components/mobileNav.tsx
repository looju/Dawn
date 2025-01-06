"use client";
import { MobileNavProps } from "@/types";
import React, { MutableRefObject, useRef } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoReorderThree } from "react-icons/io5";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const router = useRouter();
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[24px]">
      <Sheet>
        <SheetTrigger>
          <IoReorderThree size={24} />
        </SheetTrigger>
        <SheetContent
          side={"left"}
          className="bg-white w-1/4 content-center pt-10 items-center"
        >
          {sidebarLinks.map((item) => {
            const isActive =
              pathName === item.route || pathName.startsWith(`${item.route}/`);
            return (
              <>
                <SheetClose key={item.imgURL}>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(item.route);
                    }}
                    key={item.imgURL}
                    className={cn(
                      "sidebar-link",
                      "w-full, hover:cursor-pointer",
                      {
                        "bg-bankGradient": isActive,
                      }
                    )}
                    style={{
                      flex: 1,
                      width: "100%",
                    }}
                  >
                    <div className="relative  w-full h-2 items-center content-center flex flex-row my-2 self-center">
                      <Image
                        src={item.imgURL}
                        width={20}
                        height={20}
                        alt="link images"
                        className="mr-2 text-white bg-black "
                      />
                      <p
                        className={cn("sidebar-label", {
                          "!text-white": isActive,
                        })}
                        style={{
                          flexWrap: "wrap",
                          textAlign: "justify",
                        }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                </SheetClose>
              </>
            );
          })}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
