"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import addData from "@/firebase/firestore/addData";
import { read } from "fs";
import uploadImage from "@/firebase/storage/uploadImage";
import { getDownloadURL } from "firebase/storage";
import postData from "@/firebase/database/createData";

type formType = {
  title: string;
  imageUrl: string;
  link: string;
};

let formSchema: z.ZodSchema<any>;

if (typeof window !== "undefined") {
  formSchema = z.object({
    title: z.string().max(100).min(1),
    imageUrl: z
      .instanceof(FileList)
      .refine((file) => file?.length == 1, "Image is required"),
    bannerLink: z.string().min(1),
  });
} else {
  formSchema = z.object({
    title: z.string().max(100).min(1),
    imageUrl: z.string(),
    bannerLink: z.string().min(1),
  });
}

const HeadlineBannerForm = () => {
  const [imageName, setImageName] = useState<string | null>(null);
  const [image, setImage] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      bannerLink: "",
    },
  });

  const fileRef = form.register("imageUrl");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageName(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    // const { result, error } = await addData(
    //   "home_poster",
    //   Math.floor(Date.now()).toString(),
    //   values
    // );

    // if (error) {
    //   return console.log(error);
    // }

    // return console.log(result);
    let imageUrl = "";

    if (values.imageUrl && values.imageUrl.length > 0) {
      try {
        const snapshot = await uploadImage(values.imageUrl[0]);

        if (snapshot) {
          imageUrl = await getDownloadURL(snapshot?.ref);
        }
      } catch (error) {
        console.log("Error uploading image: ", error);
        throw error;
      }
    }

    const newChildKey = await postData<formType>("main_poster", {
      title: values.title,
      imageUrl: imageUrl,
      link: values.bannerLink,
    });

    console.log("New Child Key: ", newChildKey);
  };

  return (
    <div>
      <div className="flex justify-center w-full">
        <div className="aspect-video w-full lg:w-1/2 bg-slate-300 mb-3 relative">
          {imageName ? (
            <Image
              className="object-cover w-full aspect-video"
              src={imageName || ""}
              alt="image"
              fill={true}
            />
          ) : (
            <div className="flex w-full h-full justify-center items-center">
              Image display here
            </div>
          )}
        </div>
      </div>
      <h1 className="font-bold lg:hidden">Tampilan Poster</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Judul</FormLabel>
                  <FormControl>
                    <Input placeholder="judul banner" {...field} />
                  </FormControl>
                  <FormDescription>Judul banner</FormDescription>
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>File Gambar</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="gambar"
                      type="file"
                      {...fileRef}
                      onChange={handleOnChange}
                    />
                  </FormControl>
                  <FormDescription>
                    Upload gambar untuk ditampilkan ke carousel home
                  </FormDescription>
                </FormItem>
              );
            }}
          />

          <FormField
            control={form.control}
            name="bannerLink"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Link Banner</FormLabel>
                  <FormControl>
                    <Input placeholder="link halaman" {...field} />
                  </FormControl>
                  <FormDescription>Link tautan banner</FormDescription>
                </FormItem>
              );
            }}
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default HeadlineBannerForm;
