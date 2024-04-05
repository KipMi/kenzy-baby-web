"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import CreateUserForm from "./CreateUserForm";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";

const UserManagementPage = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  React.useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  return (
    <div className="p-5 min-h-screen">
      <Card>
        <CardHeader>
          <CardTitle>Create User</CardTitle>
        </CardHeader>
        <CardContent>{/* <CreateUserForm /> */}</CardContent>
      </Card>
    </div>
  );
};

export default UserManagementPage;
