"use client";

import { Button } from "@/components/ui/button";
import { deleteDataByPath } from "@/firebase/database/deleteData";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";

export type Poster = {
  id: string;
  imageUrl: string;
  title: string;
  link: string;
};

export const posterColumn: ColumnDef<Poster>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "title",
    header: "Judul",
  },
  {
    accessorKey: "imageUrl",
    header: "Gambar",
    cell: ({ row }) => (
      <div className="w-20">
        <Image
          className="object-cover"
          src={row.getValue("imageUrl")}
          alt="Image"
          width={50}
          height={50}
        />
      </div>
    ),
  },
  {
    accessorKey: "link",
    header: "Tautan",
    cell: ({ row }) => (
      <Button>
        <Link href={row.getValue("link")}>Link Tautan</Link>
      </Button>
    ),
  },
  {
    id: "actions",
    header: "Action",
    cell: ({ row }) => (
      <Button
        onClick={async () => {
          await deleteDataByPath("main_poster/" + row.getValue("id"));
        }}
      >
        Delete
      </Button>
    ),
  },
];
