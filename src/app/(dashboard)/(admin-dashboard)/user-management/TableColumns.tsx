import { ColumnDef } from "@tanstack/react-table";

export type User = {
  email: string;
  password: string;
  isAdmin: boolean;
};

export const TableColumns: ColumnDef<User>[] = [
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "password",
    header: "Password",
  },
  {
    accessorKey: "isAdmin",
    header: "Admin",
  },
];
