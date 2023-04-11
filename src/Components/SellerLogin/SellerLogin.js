import React from "react";
import "./style/sellerLogin.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Login() {

  const navigate  = useNavigate();

  const [smail, setSmail] = useState("");
  const [spassword, setSpassword] = useState("");
  
  const handleMail = (e)=>{
    setSmail(e.target.value);
  }

  const handlePass = (e)=>{
    setSpassword(e.target.value);
  }

  const sellerLoginValidate = (e) =>{
    e.preventDefault();
    if(smail === ""){
      alert("Please Enter Mail ID");
    }else if (spassword === ""){
      alert("Please Enter password");
    }else{
      axios.post("/seller/login_seller",{
        gmail:smail,
        password:spassword
      }).then((res)=>{
        if(res){          
          localStorage.setItem("Sname", res.data.data.Name);
          localStorage.setItem("Shopename", res.data.data.shopName);
          localStorage.setItem("mobNo", res.data.data.mobNo);
          localStorage.setItem("gmail", res.data.data.gmail);
          localStorage.setItem("password", res.data.data.password);
          localStorage.setItem("Consumers", JSON.stringify(res.data.data.Consumers));
          localStorage.setItem("image", res.data.data.image);
          localStorage.setItem("Sid", res.data.data._id);
          navigate("/Sellerdashboard/Sdashboard");
        }else{
          alert("Inavlid Mail Id and Password");
        }
      }).catch((err)=>{
        console.log(err);
      })
    }

  }



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
                <input type="email" name="email" className="email" onChange={handleMail}/>
              </div>
              <div className="input-2">
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" onChange={handlePass}/>
              </div>
              <a href="">Forget Password ?</a>
            </div>
            <div className="input-btn">
              <div className="loginbtn" onClick={sellerLoginValidate}>
                Login
              </div>
              <NavLink to="/sellersign" className="SignUpbtn">
                Sign Up
              </NavLink>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
