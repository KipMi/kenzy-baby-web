import React from "react";
import ContactForm from "./contact-form";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="max-w-screen p-4 bg-lime-200 lg:flex">
      <div className="lg:w-1/2 lg:p-5">
        <h1 className="font-bold">Kontak Kami</h1>
        <ContactForm />
      </div>
      <div className="lg:w-1/2 lg:p-5">
        <h1 className="font-bold">Toko Kami</h1>
        <ul className="flex flex-col justify-around h-28">
          <li>
            <Link href={""}>Shopee</Link>
          </li>
          <li>
            <Link href={""}>Tokopedia</Link>
          </li>
          <li>
            <Link href={""}>Lazada</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
