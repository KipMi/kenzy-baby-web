"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BigCarousel = () => {
  return (
    <Carousel className="w-screen h-64 bg-slate-500 relative">
      <CarouselContent>
        <CarouselItem>
          <div className="w-full h-64 bg-red-300 flex justify-center items-center">
            Item 1
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-64 bg-blue-300 flex justify-center items-center">
            Item 2
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-full h-64 bg-green-300 flex justify-center items-center">
            Item 3
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="left-4" />
      <CarouselNext className="right-4" />
    </Carousel>
  );
};

export default BigCarousel;
