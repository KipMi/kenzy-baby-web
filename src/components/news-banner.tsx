import React from "react";
import { Button } from "./ui/button";

const NewsBanner = () => {
  return (
    <div className="relative w-11/12 h-60 mt-3 bg-red-300 p-3">
      <h1>Newsletter</h1>
      <Button className="absolute bottom-7 right-7">Subscribe</Button>
    </div>
  );
};

export default NewsBanner;
