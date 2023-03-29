import React from "react";
import "./style/menu.scss";
import { NavLink } from "react-router-dom";
import img from "./profile.jpg";
import { AiFillBook } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { MdRepeat } from "react-icons/md";

export default function Menu() {
  return (
    <div className="Menu">
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
            <NavLink
              to="Sdashboard"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              className="dasboard-icon"
            >
              <RxDashboard />
            </NavLink>
            <NavLink
              to="Sdashboard"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              className="dashboard"
            >
              Dashborad
            </NavLink>
          </article>
          <article className="sidebar-transac">
            <div className="shop">
              <NavLink to="consumer" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="shop-icon">
                <BsFillPersonFill />
              </NavLink>
              <NavLink to="consumer" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="shop-text">
                Your Consumer
              </NavLink>
            </div>
            <div className="oTrans">
              <NavLink to="SellerOT" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="oTrans-icon">
                <MdRepeat />
              </NavLink>
              <NavLink to="SellerOT" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="oTrans-text">
                Over All Transactions
              </NavLink>
            </div>
            <div className="iTrans">
              <NavLink to="SellerIT" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="iTrans-icon">
                <BsFileEarmarkPersonFill />
              </NavLink>
              <NavLink to="SellerIT" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="iTrans-text">
                Individual Transactions
              </NavLink>
            </div>
            <div className="logout">
              <NavLink to="/" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="logout-icon">
                <BiLogOut />
              </NavLink>
              <NavLink to="/" style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })} className="logout-text">
                Log Out
              </NavLink>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
