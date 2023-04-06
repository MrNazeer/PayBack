import React from "react";
import "./_style/_signin.scss";
import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "346729302127-lt9a58fdsgd7c78sa7ccc6g2dgub119o.apps.googleusercontent.com";

const loginSuccess = (res) => {
  console.log("LOGIN SUCCESS! Current User: ", res.profileObj);
};

const loginFailure = (res) => {
  console.log("LOGIN FAILED! red: ", res);
};

const logIn = async () => {
  try {
    const user = await gapi.auth2.signIn();
    const token = await gapi.auth2.getToken();

    console.log(user);
    console.log(token);
  } catch (err) {
    // Handle errors
  }
};

export default function Login() {
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
    <div className="signin container">
      <section className=" sign-container">
        <article className="signin-left">
          <img src={require("./img.jpg")} alt="img1" />
        </article>
        <article className="signin-right">
          <p className="cl-logo">Pay Back</p>
          <p className="text">Hello Consumer</p>
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
              <NavLink to="/Consumerdashboard/CDashboard" className="loginbtn">
                Login
              </NavLink>
              <div className="or">Or</div>
              <div className="c-g-btn-wrapper">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={loginSuccess}
                  onFailure={loginFailure}
                  cookiePolicy={"single_host_orgin"}
                  isSignedIn={true}
                  className="c-login-btn"
                  onClick={logIn}
                />
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
