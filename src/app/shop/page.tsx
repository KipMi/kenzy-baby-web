// "use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import testbg from "../../../public/testbg.jpg";

import React from "react";
import Image from "next/image";
import ProductCard from "@/components/product-card";
import ProductDisplay from "./ProductDisplay";

const Shop = () => {
  return (
    <div className="min-h-screen">
      <div className="w-full h-64 bg-red-300 overflow-hidden relative hidden lg:block">
        <h1 className="font-bold absolute bottom-10 left-10 text-xl">
          Shop Catalog
        </h1>
        <Image className="object-cover w-full" src={testbg} alt="shop image" />
      </div>
      <h1 className="m-3 lg:hidden">Shop Catalog</h1>
      <div className="lg:w-full lg:flex lg:justify-end p-4">
        <div className="w-full lg:w-1/4 flex space-x-3">
          <Input placeholder="Search..." />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button>Filters</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-32">
              <DropdownMenuLabel>Filters</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Category</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="mt-2 px-4 flex justify-end">
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="populer">Populer</SelectItem>
            <SelectItem value="lowest">Harga terendah</SelectItem>
            <SelectItem value="highest">Harga tertinggi</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <ProductDisplay />
    </div>
  );
};

export default Shop;
