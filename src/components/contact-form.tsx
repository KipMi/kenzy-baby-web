"use client";

import React, { useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { sendEmail } from "@/emails/sendEmail";

const formSchema = z.object({
  emailAddress: z.string().email().min(1),
  subject: z.string().max(50).min(1),
  body: z.string().max(300).min(1),
});

const ContactForm = () => {
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: "",
      subject: "",
      body: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    sendEmail(values);
    // console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            name="emailAddress"
            control={form.control}
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email"
                      type="email"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="font-medium">Subject</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Subject"
                      {...field}
                      className="bg-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className=" font-medium">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message here."
                      {...field}
                      className="bg-white min-h-32 max-h-40"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <Button
            type="submit"
            value={"Submit"}
            className="bg-white text-black mt-2"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
