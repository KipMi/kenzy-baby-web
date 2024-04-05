import ProductCard from "@/components/product-card";
import React from "react";
import testbg from "../../../public/testbg.jpg";

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

const ProductDisplay = async () => {
  const products = await getProducts();
  return (
    <div className="w-full h-auto flex flex-wrap justify-center">
      {/* {products.map((product) => (
        <div key={product.id} className="p-4">
          <ProductCard
            imageURL={testbg}
            title={product.title}
            price={product.price}
          />
        </div>
      ))} */}
    </div>
  );
};

export default ProductDisplay;
