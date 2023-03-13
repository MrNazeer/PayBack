import React from "react";
import "./style/sellerdbstyle.scss";
import Menu from "./Menu/Menu";
import { Outlet } from "react-router-dom";
export default function SellerDashboard() {
  return (
    <div className="dash">
      <Menu />
      <Outlet />
    </div>
  );
}
