"use client";

import { Form } from "@/components/ui/form";
import React, { useState } from "react";
import HeadlineBannerForm from "./HeadlineBannerForm";
// import ContactForm from "@/components/contact-form";
// import testbg from "../../../../../public/testbg.jpg";
// import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/config";
// import BannerTable from "./BannerTable";
import { DataTable } from "@/components/ui/data-table";
import { Poster, posterColumn } from "./BannerColumn";
import { getDataQuery } from "@/firebase/database/readData";

const HeadlineBannerPage = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const [data, setData] = useState<Poster[] | null>(null);

  React.useEffect(() => {
    const getData = async (): Promise<Poster[]> => {
      try {
        const data = await getDataQuery("main_poster");
        const dataArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        return dataArray;
      } catch (error) {
        console.error("Error fetching data: ", error);
        return [];
      }
    };
    getData().then((data) => setData(data));
  }, []);

  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="lg:min-h-screen p-5">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold hidden lg:block">Tampilan Poster</h1>
        {/* <div className="aspect-video w-full lg:w-1/2 bg-red-300 mb-3">
          <Image className="object-cover w-full" src={testbg} alt="image" />
        </div> */}
        <h1 className="font-bold lg:hidden">Tampilan Poster</h1>
      </div>
      <div className="p-3">
        <HeadlineBannerForm />
      </div>
      <hr className="my-5" />
      <h1>List Poster</h1>
      <div>{data && <DataTable columns={posterColumn} data={data} />}</div>
    </div>
  );
};

export default HeadlineBannerPage;
