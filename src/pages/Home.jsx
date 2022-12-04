import React, { useMemo, useState, useEffect } from "react";
import { Container } from '@mui/material'
import MaterialReactTable from "material-react-table";

export default function Home() {
  const [users, setUsers] = useState([]);

  async function getData() {
    await fetch("https://www.melivecode.com/api/users")
      .then((res) => res.json())
      .then((res) => setUsers(res));
  }

  useEffect(() => {
    getData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "fname",
        header: "First Name",
      },
      {
        accessorKey: "lname",
        header: "Last Name",
      },
      {
        accessorKey: "username",
        header: "User Name",
      },
      {
        accessorKey: "avatar",
        header: "Avatar",
      },
    ],
    []
  );

  return (
      <MaterialReactTable columns={columns} data={users} />
  )
}
