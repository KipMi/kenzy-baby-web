import React from "react";
import { Poster, posterColumn } from "./BannerColumn";
import { getDataQuery } from "@/firebase/database/readData";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Poster[]> {
  const data = await getDataQuery("main_poster");
  const dataArray = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
  return dataArray;
}

const BannerTable = async () => {
  const data = await getData();
  return (
    <div>
      <DataTable columns={posterColumn} data={data} />
    </div>
  );
};

export default BannerTable;
