import React from "react";
import "./style/Cmenu.scss";
import { NavLink } from "react-router-dom";
import img from "./profile.jpg";
import { AiFillBook } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { MdRepeat } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";


// import axios from 'axios';

// // Function to decode base64 string to image
// const decodeBase64Image = (dataUrl) => {
//   const match = dataUrl.match(/^data:(.*);base64,(.*)$/);
//   if (!match) {
//     throw new Error('Invalid base64 string');
//   }
//   const contentType = match[1];
//   const content = match[2];
//   const byteCharacters = atob(content);
//   const byteArrays = new Array(byteCharacters.length);
//   for (let i = 0; i < byteCharacters.length; i++) {
//     byteArrays[i] = byteCharacters.charCodeAt(i);
//   }
//   const byteArray = new Uint8Array(byteArrays);
//   const blob = new Blob([byteArray], { type: contentType });
//   return URL.createObjectURL(blob);
// };

// // Function to make Axios request and decode response data
// const makeRequest = async () => {
//   const response = await axios.get('/image');
//   const imageData = response.data;
//   const imageUrl = decodeBase64Image(imageData);
//   const imageElement = document.createElement('img');
//   imageElement.src = imageUrl;
//   document.body.appendChild(imageElement);
// };






export function CMenu() {
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
            <NavLink
              to="CDashboard"
              style={({ isActive }) => ({
                color: isActive ? "red" : "black",
              })}
              className="dasboard-icon"
            >
              <RxDashboard />
            </NavLink>
            <NavLink
              to="CDashboard"
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
              <NavLink
                to="Shops"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="shop-icon"
              >
                <BsShop />
              </NavLink>
              <NavLink
                to="Shops"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="shop-text"
              >
                Your Shops
              </NavLink>
            </div>
            <div className="oTrans">
              <NavLink
                to="ConsumerOT"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="oTrans-icon"
              >
                <MdRepeat />
              </NavLink>
              <NavLink
                to="ConsumerOT"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="oTrans-text"
              >
                Over All Transactions
              </NavLink>
            </div>
            <div className="iTrans">
              <NavLink
                to="ConsumerIT"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="iTrans-icon"
              >
                <BsFileEarmarkPersonFill />
              </NavLink>
              <NavLink
                to="ConsumerIT"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="iTrans-text"
              >
                Individual Transactions
              </NavLink>
            </div>
            <div className="c-profile-edit">
              <NavLink
                to="ConProfileEdit"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="c-profile-icon"
              >
                <FaUserEdit />
              </NavLink>
              <NavLink
                to="ConProfileEdit"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="c-profile-text"
              >
                Update Profile
              </NavLink>
            </div>


            <div className="logout">
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="logout-icon"
              >
                <BiLogOut />
              </NavLink>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                })}
                className="logout-text"
              >
                Log Out
              </NavLink>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
