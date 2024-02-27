"use client";

import React from "react";
import logo from "../../public/logo_kenzy.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-screen p-4 bg-slate-500">
      <div className="w-screen flex justify-center">
        <Image alt="Logo" src={logo} quality={100} />
      </div>
    </nav>
  );
};

export default Navbar;
