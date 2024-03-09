"use client";

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

import React from "react";

const Shop = () => {
  return (
    <div className="min-h-screen p-4">
      <h1 className="mb-3">Shop Catalog</h1>
      <div className="w-full flex">
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
      <div className="mt-2 flex justify-end">
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
    </div>
  );
};

export default Shop;
