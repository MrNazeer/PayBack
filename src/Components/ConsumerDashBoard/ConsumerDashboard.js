import React from "react";
import "./style/ConsumerDashboard.scss"
import { CMenu  } from "./C_Menu/CMenu";

import { Outlet } from "react-router-dom";

export  function ConsumerDashboard() {
  return (
    <div className="Cdash">
      <CMenu />
      <Outlet />
    </div>
  );
}
