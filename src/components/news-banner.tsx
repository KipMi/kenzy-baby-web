import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import testbg from "../../public/testbg.jpg";

const NewsBanner = () => {
  return (
    <div className="relative aspect-square w-11/12 lg:aspect-5/2 lg:w-3/4 mt-3 bg-red-300">
      {/* <h1>Newsletter</h1> */}
      <Button className="absolute bottom-7 right-7">Subscribe</Button>
      <Image
        className="object-cover w-full aspect-square lg:aspect-5/2"
        src={testbg}
        alt="Newsletter"
      />
    </div>
  );
};

export default NewsBanner;
