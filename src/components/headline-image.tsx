import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type HeadlineImageProps = {
  imageURL: string | StaticImageData;
  imageLink: string;
};

const HeadlineImage: React.FC<HeadlineImageProps> = ({
  imageURL,
  imageLink,
}) => {
  return (
    <div className="w-full aspect-video relative">
      <Link href={imageLink}>
        <Image
          className="object-cover aspect-video w-full"
          src={imageURL}
          alt="headline-image"
          fill={true}
        />
      </Link>
    </div>
  );
};

export default HeadlineImage;
