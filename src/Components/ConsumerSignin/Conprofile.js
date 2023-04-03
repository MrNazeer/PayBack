import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import "./style/_conprofile.scss";



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




const clientId =
  "346729302127-lt9a58fdsgd7c78sa7ccc6g2dgub119o.apps.googleusercontent.com";

function showPassword() {
  var x = document.querySelector(".password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


const onSuccess = (res) => {
  console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
};

const onFailure = (res) => {
  console.log("LOGIN FAILED! red: ", res);
};

const logout = () => {
  console.log("Log out successfully");
};


const signIn = async () => {
  try {
    const user = await gapi.auth2.signIn();
    const token = await gapi.auth2.getToken();
    
    console.log(user);
    console.log(token);

  } catch (err) {
    // Handle errors
  }
};



export default function Conprofile() {
  
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        client_id: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  
  
  return (
    <div className="container">
      <div className="con-container">
        <div className="menu">
          <p className="clogo">PayBack</p>
          <Link to="/conprofile/userLogin" className="btn">Login</Link>
        </div>
        <section className="con-profile">
          <article className="inputs">
            <p className="title">Welcome Consumer !...</p>
            <div className="fname">
              <label htmlFor="">First Name</label>
              <input type="text" />
            </div>
            <div className="lname ">
              <label htmlFor="">Last Name</label>
              <input type="text" />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile</label>
              <input type="tel" />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" />
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
          <article className="divide"></article>
          <article className="c-oauth">
              <div className="c-gbtn">
              <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_orgin"}
                  isSignedIn={true}
                  className="c-glogin-btn"
                  onClick={signIn}
                />
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={logout}
                  className="c-glogout-btn"
                />
              </div>
          </article>
        </section>
      </div>
    </div>
  );
}
