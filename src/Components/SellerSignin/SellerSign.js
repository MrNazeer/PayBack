import React from "react";
import { GoogleLogin } from "react-google-login";
import "./style/Selsign.scss";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import { Link } from "react-router-dom";

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

export default function SellerSign() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <div className="container">
      <div className="sel-container">
        <div className="menu">
          <p className="slogo">PayBack</p>
          <Link to ="/sellersign/sellerlogin" className="btn">Login</Link>
        </div>
        <section className="sel-profile">
          <article className="inputs">
            <p className="title">Welcome Seller !...</p>
            <div className="fname">
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="lname ">
              <label htmlFor="">Shop Name</label>
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
          <article className="oauth">
            <div className="name">
              <div className="gbtn">
                <GoogleLogin
                  clientId="clientId"
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_orgin"}
                  isSignedIn={true}
                  className="GoogleLogin"
                />
              </div>
              <div className="lname"></div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
