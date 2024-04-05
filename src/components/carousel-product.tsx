import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ProductCard from "./product-card";
import testbg from "../../public/testbg.jpg";
import { StaticImageData } from "next/image";

interface Product {
  id: number;
  title: string;
  imageURL: string;
  price: number;
}

const getProducts = async (): Promise<Product[]> => {
  const res = await fetch("http://localhost:4000/products");
  const data: Product[] = await res.json();
  return data;
};

const CarouselProduct = async () => {
  // const url = "http://localhost:3000/api/handle-product";
  // const res = await fetch(url);
  // console.log(res);
  const products = await getProducts();
  const newProducts = products.slice(-4);
  const newProductsBig = products.slice(-6);
  return (
    <div className="w-full">
      <Carousel
        opts={{ align: "start", slidesToScroll: "auto" }}
        className="w-full max-w-xl lg:hidden"
      >
        <CarouselContent>
          {newProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <div className="p-2">
                <ProductCard
                  title={product.title}
                  price={product.price}
                  imageURL={testbg}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="hidden w-full px-32 lg:flex flex-wrap justify-around">
        {newProductsBig.map((product) => (
          <div className="p-4" key={product.id}>
            <ProductCard
              imageURL={testbg}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselProduct;
