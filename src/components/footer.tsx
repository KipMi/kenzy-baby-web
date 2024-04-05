import React from "react";
import ContactForm from "./contact-form";
import Link from "next/link";
import tokped from "../../public/tkp.png";
import lazada from "../../public/lzd.png";
import shopee from "../../public/shp.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="max-w-screen p-4 bg-[#f6edcf] lg:flex mt-10 bottom-0">
      <div className="lg:w-1/2 lg:p-5">
        <h1 className="font-bold">Kontak Kami</h1>
        <ContactForm />
      </div>
      <div className="lg:w-1/2 lg:p-5">
        <h1 className="font-bold">Toko Kami</h1>
        <ul className="flex justify-around items-center h-28 w-1/2">
          <li>
            <Link
              href={
                "https://shopee.co.id/kenzybaby?categoryId=100633&entryPoint=ShopByPDP&itemId=19695433659&upstream=search"
              }
              target="_blank"
            >
              <Image src={shopee} alt="shopee image" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={tokped} alt="shopee image" width={30} height={30} />
            </Link>
          </li>
          <li>
            <Link href={""}>
              <Image src={lazada} alt="shopee image" width={30} height={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
