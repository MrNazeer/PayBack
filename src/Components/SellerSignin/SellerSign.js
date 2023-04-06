import React from "react";
import "./style/Selsign.scss";
import { Link } from "react-router-dom";

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
  return (
    <div className="container">
      <div className="sel-container">
        <div className="menu">
          <p className="slogo">PayBack</p>
          <Link to="/sellersign/sellerlogin" className="btn">
            Login
          </Link>
        </div>
        <section className="sel-profile">
          <article className="inputs">
            <p className="title">Welcome Seller !...</p>
            <div className="fname">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="Sname ">
              <label htmlFor="">Shop Name</label>
              <input type="text" />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile</label>
              <input type="tel" maxLength={10} />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="pic">
              <label htmlFor="">Profile Pic</label>
              <input type="file" name="img" id="img" className="img" />
            </div>
            <div className="pass">
              <label htmlFor="">Password</label>
              <div className="pas-cont">
                <input className="password" type="password" />
                <span className="pshow" onClick={showPassword}>
                  show
                </span>
              </div>
            </div>
            <div className="btn-cont">
              <div className="btn">Submit</div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
