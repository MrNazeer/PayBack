import React from "react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import "./style/_conprofile.scss";


function showPassword() {
  var x = document.querySelector(".password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

export default function Conprofile() {
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
          <article className="oauth">
              <div className="gbtn">
                <GoogleLogin
                  clientId=""
                  buttonText="Login"
                  // onSuccess={onSuccess}
                  // onFailure={onFailure}
                  cookiePolicy={"single_host_orgin"}
                  isSignedIn={true}
                />
              </div>
          </article>
        </section>
      </div>
    </div>
  );
}
