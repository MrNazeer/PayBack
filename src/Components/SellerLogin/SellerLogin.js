import React from "react";
import "./style/sellerLogin.scss"
import { NavLink } from "react-router-dom";


export default function Login() {
  return (
  <div className="signin container">
    <section className="seller-container">
      <article className="signin-left">
        <img src={require("./img.jpg")} alt="img1" />
      </article>
      <article className="signin-right">
        <p className="sl-logo">Pay Back</p>
        <p className="text">Hello Seller</p>
        <div className="login">
          <div className="login-inputs">
            <div className="input-1">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="email" />
            </div>
            <div className="input-2">
              <label htmlFor="pass">Password</label>
              <input type="password" name="pass" />
            </div>
            <a href="">Forget Password ?</a>
          </div>
          <div className="input-btn">
            <NavLink  to="/Sellerdashboard/Sdashboard" className="loginbtn">Login</NavLink>
            <NavLink  to="/sellersign" className="SignUpbtn">Sign Up</NavLink>
          </div>
        </div>
      </article>
    </section>
  </div>
  )
}