import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import "./style/_conprofile.scss";
import axios from "axios";



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
  //Navigate hooks
  const navigate = useNavigate();

  //Auth
  useEffect(() => {
    function start() {
      gapi.auth2.init({
        client_id: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  // State defined here
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [image, setImage] = useState("");


  // Non Auth user Check 
  const consumerAdding = async (e) => {
    e.preventDefault();
    if(name !== "" && mob !=="" && email !=="" && pass !=="" && image!=="" ){
    await axios
      .post("/consumer/signin_consumer", {
        fName: name,
        mobNo: mob,
        mail: email,
        password: pass,
        image:image,
      })
      .then((res) => {
        alert("sign Up successfully");
        navigate("/conprofile/userLogin");
      }).catch((err)=>{
        alert("Already Signed In");        
      })    
  }
  };


  //Auth user check

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current User: ", res.profileObj);

    axios
      .post("/consumer/signin_consumer", {
        fName: res.profileObj.name,
        mail: res.profileObj.email,
        image: res.profileObj.imageUrl,
        googleId: res.profileObj.googleId,
      })
      .then((res) => {
        alert("sign Up successfully");
        navigate("/conprofile/userLogin");
      }).catch((err)=>{
        alert("Already Sigined Up")
      })
  };

  const onFailure = (res) => {
    console.log("SignIn FAILED! red: ", res);
  };

  const logout = () => {
    console.log("Sign out successfully");
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleMOb = (e) => {
    setMob(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      // Do something with the base64String, like send it to the server
      setImage(base64String)
    };
  };

  

  return (
    <div className="container">
      <div className="con-container">
        <div className="menu">
          <p className="clogo">PayBack</p>
          <Link to="/conprofile/userLogin" className="btn">
            Login
          </Link>
        </div>
        <section className="con-profile">
          <form className="inputs">
            <p className="title">Welcome Consumer !...</p>
            <div className="fname">
              <label htmlFor="">Name</label>
              <input type="text" onChange={handleName} required />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile</label>
              <input type="tel" maxLength={10} onChange={handleMOb} required />
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <input type="email" onChange={handleEmail} required />
            </div>
            <div className="pass">
              <label htmlFor="">Password</label>
              <div className="pas-cont">
                <input
                  type="password"
                  className="password"
                  onChange={handlePass}
                  required
                />
                <span className="pshow" onClick={showPassword}>
                  show
                </span>
              </div>
            </div>
            <div className="lname ">
              <label htmlFor="">Profile Pic</label>
              <input
                className="conp-img-input"
                type="file"
                onChange={handleFileUpload}
              />
            </div>
            <div className="btn-cont">
              <input
                type="submit"
                value="Submit"
                className="btn"
                onClick={consumerAdding}
              />
            </div>
          </form>
          <article className="divide"></article>
          <div className="mob-divide">Or</div>
          <article className="c-oauth">
            <div className="c-gbtn">
              <GoogleLogin
                clientId={clientId}
                buttonText="SignIn"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_orgin"}
                isSignedIn={true}
                className="c-glogin-btn"
                onClick={signIn}
              />
              <GoogleLogout
                clientId={clientId}
                buttonText="SignOut"
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
