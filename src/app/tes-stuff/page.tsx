"use client";

import { Button } from "@/components/ui/button";
import { getDataById, getDataQuery } from "@/firebase/database/readData"; // replace './getData' with the actual path to getData file

// ... other code

import React from "react";

const fetchData = async () => {
  const data = await getDataQuery("main_poster");

  // Convert the data object to an array
  const dataArray = Object.keys(data).map((key) => {
    return data[key].imageUrl;
  });

  // Map over the data array and log each item
  dataArray.map((item) => {
    console.log(item);
  });
};

const page = () => {
  return (
    <div>
      <Button onClick={fetchData}>Click Bitch</Button>
    </div>
  );
};

export default page;
