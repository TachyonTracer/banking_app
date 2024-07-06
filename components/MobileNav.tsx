"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Section } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathname = usePathname();
  return (
    <section className="w-full ">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="Menu"
            className="cursour-pointer "
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className=" flex mb-12 cursor-pointer items-center gap-2"
          >
            <Image src="/icons/logo.svg" width="34" height="34" alt="logo" />
            <h1 className="text-24 font-ibm-plex-serif font-bold text-black-1">
              Logo
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);
                  return (
                    <SheetClose asChild key={item.route}>
<Link className={cn("  mobilenav-sheet_close ", {
                        "bg-bank-gradient": isActive,
                      })}
                      href={item.route}
                      key={item.label}
                    >
                     
                        <Image
                          src={item.imgURL}
                          width={20}
                          height={20}
                          alt={item.label}
                    
                          className={cn({
                            " flex brightness-[3] invert-0": isActive,
                          })}
                        ></Image>
                     
                      <p className={cn(" text-16 font-semibold text-black-2", {
                          "!text-white": isActive
                        })}
                      >
                        {item.label}
                      </p>
                    </Link>
                    </SheetClose>
                    
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
