import React, { useState } from "react";
import "./style/Selsign.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

// import axios from 'axios';

// Function to encode image file to base64 string
// const encodeImageFileAsURL = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       resolve(reader.result);
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(file);
//   });
// };

// Function to make Axios request with encoded image data

// const makeRequest = async () => {
//   const fileInput = document.querySelector('input[type="file"]');
//   const imageFile = fileInput.files[0];
//   const imageData = await encodeImageFileAsURL(imageFile);
//   const response = await axios.post('/upload', { imageData });
//   console.log(response);
// };

function showPassword() {
  var x = document.querySelector(".password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default function SellerSign() {

  const navigates = useNavigate();

  const [sname, setSname] = useState("");
  const [shopname, setShopname] = useState("");
  const [smob, setSmob] = useState("");
  const [semail, setSemail] = useState("");
  const [simage, setSimage] = useState("");
  const [spass, setSpass] = useState("");

  const handleSellerName = (e) => {
    setSname(e.target.value);
  };
  const handleSellerShopname = (e) => {
    setShopname(e.target.value);
  };
  const handleSellerMob = (e) => {
    setSmob(e.target.value);
  };
  const handleSellerEmail = (e) => {
    setSemail(e.target.value);
  };
  const handleSellerImage = (e) => {
    setSimage(e.target.value);
  };
  const handleSellerPass = (e) => {
    setSpass(e.target.value);
  };

  const sellerSignIn = (e) => {
    e.preventDefault();
    if (
      sname !== "" &&
      shopname !== "" &&
      smob !== "" &&
      semail !== "" &&
      // simage !== "" &&
      spass !== ""
    ) {
      axios
        .post("/seller/signin_seller", {
          Name: sname,
          shopName: shopname,
          mobNo: smob,
          gmail: semail,
          password: spass,
          image: simage,
        })
        .then((data) => {
          alert("Sign In Successfully");
          navigates("/sellerlogin", { replace: true });
        })
        .catch((err) => {
          alert("This mail Id Already Present !");
        });
    } else {
      alert("Please enter all the fileds");
    }
  };

  return (
    <div className="container">
      <div className="sel-container">
        <div className="menu">
          <p className="slogo">PayBack</p>
          <Link to="/sellerlogin" className="btn">
            Login
          </Link>
        </div>
        <section className="sel-profile">
          <form className="inputs">
            <p className="title">Welcome Seller !...</p>
            <div className="fname">
              <label htmlFor="">Name</label>
              <input type="text" onChange={handleSellerName} required />
            </div>
            <div className="Sname ">
              <label htmlFor="">Shop Name</label>
              <input type="text" onChange={handleSellerShopname} required />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile</label>
              <input
                type="tel"
                maxLength={10}
                onChange={handleSellerMob}
                required
              />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" onChange={handleSellerEmail} required />
            </div>
            {/* <div className="pic">
              <label htmlFor="">Profile Pic</label>
              <input
                type="file"
                name="img"
                id="img"
                className="img"
                onChange={handleSellerImage}
              />
            </div> */}
            <div className="pass">
              <label htmlFor="">Password</label>
              <div className="pas-cont">
                <input
                  className="password"
                  type="password"
                  onChange={handleSellerPass}
                  required
                />
                <span className="pshow" onClick={showPassword}>
                  show
                </span>
              </div>
            </div>
            <div className="btn-cont">
              <input
                type="submit"
                value="Submit"
                className="btn"
                onClick={sellerSignIn}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
