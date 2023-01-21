import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <>
      <Outlet/>
    </>
  );
}
