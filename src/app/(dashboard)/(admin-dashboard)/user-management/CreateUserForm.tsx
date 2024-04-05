// "use client";

// import React, { useEffect, useState } from "react";
// import * as z from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";
// import Link from "next/link";
// import createUser from "@/firebase/auth/signup";
// import { useRouter } from "next/navigation";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select"
// import { getDataQuery } from "@/firebase/database/readData";

// type Roles = {
//   id: string,
//   createdAt: number,
//   roleName: string,
//   status: string
// }

// const formSchema = z.object({
//   email: z.string().min(1),
//   password: z.string().min(1),
//   role: z.string().min(1),
// });

// const CreateUserForm = () => {
//   const [roles, setRoles] = useState<Roles[] | null>(null)

//   useEffect(() => {
//     const getData = async (): Promise<Roles[]> => {
//       try {
//         const data = await getDataQuery('roles')
//         const dataArray = Object.keys(data).map((key) => ({
//           id: key,
//           ...data[key]
//         }));

//         return dataArray
//       } catch (error) {
//         console.error('Error fetching data: ', error)
//         return []
//       }
//     }

//     getData().then((data) => setRoles(data))
//   }, [])

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//   });

//   const router = useRouter();

//   const handleSubmit = async (values: z.infer<typeof formSchema>) => {
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//         </pre>
//       ),
//     });

//     const { result, error } = await createUser(values.email, values.password);

//     if (error) {
//       return console.error;
//     }

//     console.log(result);
//     return router.push("/user-management");
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
//         <FormField
//           control={form.control}
//           name="email"
//           render={({ field }) => {
//             return (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input placeholder="E- Mail" {...field} />
//                 </FormControl>
//               </FormItem>
//             );
//           }}
//         />

//         <FormField
//           control={form.control}
//           name="password"
//           render={({ field }) => {
//             return (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Password" {...field} />
//                 </FormControl>
//               </FormItem>
//             );
//           }}
//         />

//         <FormField
//           control={form.control}
//           name="role"
//           render={({ field }) => {
//             return (
//               <FormItem className="flex flex-row items-start space-x-3 space-y-0">
//                 <FormControl>
//                   <Select>
//                     <SelectTrigger>
//                       <SelectValue placeholder="Role" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {}
//                     </SelectContent>
//                   </Select>
//                 </FormControl>
//                 <FormLabel>Admin User</FormLabel>
//               </FormItem>
//             );
//           }}
//         />

//         <Button className="mt-5" type="submit">
//           Create New User
//         </Button>
//       </form>
//     </Form>
//   );
// };

// export default CreateUserForm;
