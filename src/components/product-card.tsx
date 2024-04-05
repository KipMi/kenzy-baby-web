import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

type CardProps = {
  title: string;
  imageURL: string | StaticImageData;
  price: number;
};

const ProductCard: React.FC<CardProps> = ({ title, imageURL, price }) => {
  return (
    <div>
      <Card className="w-full max-w-sm">
        <div className="flex aspect-square justify-center items-center overflow-hidden p-1">
          <Image
            className="object-cover aspect-square rounded-md"
            src={imageURL}
            alt="image"
            // height={80}
            // style={{
            //   aspectRatio: "20/30",
            //   objectFit: "cover",
            // }}
            // width={90}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-base line-clamp-2">{title}</CardTitle>
          <CardDescription className="text-sm">Rp {price}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default ProductCard;
