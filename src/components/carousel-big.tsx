"use client";

import React, { useEffect, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeadlineImage from "./headline-image";
import testbg from "../../public/testbg.jpg";
import { getDataQuery } from "@/firebase/database/readData";

const BigCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [data, setData] = useState<any[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataQuery("main_poster");
      const resultArray = Object.keys(result).map((key) => ({
        id: key,
        ...result[key],
      }));
      setData(resultArray);
    };

    fetchData();
  }, []);

  return (
    <Carousel
      className="w-full lg:w-3/4 lg:my-5 aspect-video"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data
          ? data.map((items) => (
              <CarouselItem key={items.id}>
                <HeadlineImage
                  imageURL={items.imageUrl}
                  imageLink={items.link}
                />
                {/* item {index} */}
              </CarouselItem>
            ))
          : ""}
      </CarouselContent>
      <CarouselPrevious className="left-4 lg:hidden" />
      <CarouselNext className="right-4 lg:hidden" />
    </Carousel>
  );
};

export default BigCarousel;
