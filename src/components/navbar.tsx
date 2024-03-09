"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/logo_kenzy.svg";
import menu from "../../public/menu_icon.svg";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-screen p-4 shadow-md sticky top-0 z-50 bg-white">
      <div className="flex">
        <Drawer direction="right">
          <DrawerTrigger>
            {/* <Button variant={"ghost"}> */}
            <Image alt="Menu" src={menu} quality={100} width={30} height={30} />
            {/* </Button> */}
          </DrawerTrigger>
          <DrawerContent className="fixed h-screen w-3/4 top-0 right-0 left-auto mt-0 rounded-none">
            <DrawerHeader>
              <DrawerTitle>Kenzy Premium Baby Wear</DrawerTitle>
            </DrawerHeader>
            <ul className=" space-y-5 p-3">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/shop"}>Shop</Link>
              </li>
            </ul>
          </DrawerContent>
        </Drawer>

        <div className="w-full flex justify-center">
          <Image alt="Logo" src={logo} quality={100} width={80} height={80} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
