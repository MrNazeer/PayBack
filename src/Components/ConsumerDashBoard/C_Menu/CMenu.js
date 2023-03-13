import React from "react";
import "./style/Cmenu.scss";
import { NavLink } from "react-router-dom";
import img from "./profile.jpg";
import { AiFillBook } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export  function CMenu() {
  return (
    <div className="CMenu">
      <div className="containers">
        <section className="side-bar">
          <article className="sidebar-logo">
            <div className="icon">
              <AiFillBook />
            </div>
            <div className="logo">PayBack</div>
          </article>
          <article className="sidebar-profile">
            <div className="img">
              <img src={img} alt="" />
            </div>
            <div className="username">Nazeer ahamed</div>
          </article>
          <article className="sidebar-dashboard">
            <NavLink to="CDashboard" className="dasboard-icon">
              <RxDashboard />
            </NavLink>
            <NavLink to="CDashboard" className="dashboard">
              Dashborad
            </NavLink>
          </article>
          <article className="sidebar-transac">
            <div className="shop">
              <NavLink to="Shops" className="shop-icon">
                <BsShop />
              </NavLink>
              <NavLink to="Shops" className="shop-text">
                Your Shops
              </NavLink>
            </div>
            <div className="oTrans">
              <NavLink to="ConsumerOT" className="oTrans-icon">
                <GrTransaction />
              </NavLink>
              <NavLink to="ConsumerOT" className="oTrans-text">
        
                Over All Transactions
              </NavLink>
            </div>
            <div className="iTrans">
              <NavLink to="ConsumerIT" className="iTrans-icon">
                <BsFileEarmarkPersonFill />
              </NavLink>
              <NavLink to="ConsumerIT" className="iTrans-text">
                Individual Transactions
              </NavLink>
            </div>
            <div className="logout">
              <NavLink to="/" className="logout-icon">
                <BiLogOut />
              </NavLink>
              <NavLink to="/" className="logout-text">
                Log Out
              </NavLink>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
