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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const onSignOut = () => {
    signOut(auth);
    router.push("/");
  };

  return (
    <nav className=" p-4 shadow-md sticky top-0 z-50 bg-white">
      <div className="flex items-center">
        <div className="lg:hidden">
          <Drawer direction="right">
            <DrawerTrigger>
              {/* <Button variant={"ghost"}> */}
              <Image
                className="object-cover"
                alt="Menu"
                src={menu}
                quality={100}
                width={30}
                height={30}
              />
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
                  <Link href={"/shop"}>Shop</Link>
                </li>
                <h1 className="font-bold">Staff Dashboard</h1>
                <li>
                  <Link href={"/headline-banner"}>Headline Banner</Link>
                </li>
                <li>
                  <Link href={"/shop-banner"}>Shop Banner</Link>
                </li>
                {user ? (
                  <div>
                    <h1 className="font-bold">Admin Dashboard</h1>
                    {/* <li>
                      <Link href={"/user-management"}>User Management</Link>
                    </li> */}
                    <li>
                      <Link href={"/headline-banner"}>Home Poster</Link>
                    </li>
                    {/* <li>
                      <Link href={"/shop-banner"}>Shop Banner</Link>
                    </li> */}
                    <Button onClick={onSignOut}>Sign Out</Button>
                  </div>
                ) : (
                  ""
                )}
              </ul>
            </DrawerContent>
          </Drawer>
        </div>

        <div className="w-full flex justify-center items-center lg:justify-between px-10">
          <Image
            className="object-contain"
            alt="Logo"
            src={logo}
            quality={100}
            width={80}
            height={80}
          />
          <div className="hidden h-full lg:flex items-center w-1/4">
            <ul className="flex w-full justify-around">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/shop"}>Shop</Link>
              </li>
              {user ? (
                <li>
                  <Drawer direction="bottom">
                    <DrawerTrigger>
                      <p>Admin Dashoard</p>
                    </DrawerTrigger>
                    <DrawerContent className="">
                      <ul className=" space-y-5 p-3">
                        <h1 className="font-bold">Admin Dashboard</h1>
                        {/* <li>
                          <Link href={"/user-management"}>User Management</Link>
                        </li> */}
                        <li>
                          <Link href={"/headline-banner"}>Home Poster</Link>
                        </li>
                        {/* <li>
                          <Link href={"/shop-banner"}>Shop Banner</Link>
                        </li> */}
                        <Button onClick={onSignOut}>Sign Out</Button>
                      </ul>
                    </DrawerContent>
                  </Drawer>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
