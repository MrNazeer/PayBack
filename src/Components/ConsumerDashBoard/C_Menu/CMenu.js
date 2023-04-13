import React, { useState,useEffect  } from "react";
import "./style/Cmenu.scss";
import { NavLink } from "react-router-dom";
// import img from "./profile.jpg";
import { AiFillBook } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { BsShop } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
import { MdRepeat } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const isBase64 = (str) => {
  // Regular expression to match a valid Base64 string
  const base64Regex = /^[a-zA-Z0-9+/]+={0,2}$/;

  // Test if the given string matches the regular expression
  return base64Regex.test(str);
}

export function CMenu() {
  const [name, setName] = useState(localStorage.getItem("name"));
  const [imge, setImg] = useState(localStorage.getItem("image"));
  const [displaypic, setDisplaypic] = useState("");

  
  
  // Usage
  
  // if (isBase64(imge)) {
  //   console.log("Valid Base64 string");
  //   setDisplaypic(imge);
  //   console.log(displaypic);
  // } else {
  //   console.log("Not a valid Base64 string");
  //   setDisplaypic(imge);
  //   console.log(displaypic);
  // }


  useEffect(() => {
    if (isBase64(imge)) {
      console.log("Valid Base64 string");
    const base64String = imge; // Base64 encoded string without data URI
    const binaryString = Uint8Array.from(atob(base64String), (c) =>
      c.charCodeAt(0)
    );
    const blob = new Blob([binaryString], { type: "image/png" });
    const imageUrl = URL.createObjectURL(blob);

      setDisplaypic(imageUrl);
      console.log(displaypic);
    } else {
      console.log("Not a valid Base64 string");
      setDisplaypic(imge);
      console.log(displaypic);
    }
  }, [imge]);



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
              <img src={displaypic} alt="" />
            </div>
            <div className="username">{name}</div>
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
