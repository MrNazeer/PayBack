import React, { useState } from "react";
import "./_style/_signin.scss";
import { NavLink,json,useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import axios from "axios";

const clientId =
  "346729302127-lt9a58fdsgd7c78sa7ccc6g2dgub119o.apps.googleusercontent.com";



export default function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [pass, setPass] = useState(""); 
  const [id, setId] = useState("");

  useEffect(() => {
    function start() {
      gapi.auth2.init({
        client_id: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });


  // Oauth login programs starts
  const loginSuccess = (res) => {

    setId(res.profileObj.googleId)
    try{

      axios.
    post("/consumer/Gauth_consumer",{
      googleId:id
    }).then((res) =>{
      if(res){
        localStorage.setItem("name", res.data.data.fName);
        localStorage.setItem("mob",res.data.data.mobNo);
        localStorage.setItem("mail",res.data.data.mail);
        localStorage.setItem("image",res.data.data.image);
        localStorage.setItem("sellers", JSON.stringify(res.data.data.sellers));
        localStorage.setItem("cId", res.data.data._id);
        navigate("/Consumerdashboard/CDashboard");
      }
      else{
        alert("Invalid Mail or Password")
      }
    })
    .catch((err) =>{
      console.log("from then catch",err);
    })

    }
    catch (err){
      console.log("From try catch",err);
    }

    
  
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

// Oauth login programs ends





  //LOGIN VALIDATION STATES
  

  const loginUser = () =>{
    axios.
    post("/consumer/login_consumer",{
      mail:user,
      password :pass
    }).then((res) =>{
      if(res){
        localStorage.setItem("name", res.data.data.fName);
        localStorage.setItem("mob",res.data.data.mobNo);
        localStorage.setItem("mail",res.data.data.mail);
        localStorage.setItem("image",res.data.data.image);
        localStorage.setItem("sellers", JSON.stringify(res.data.data.sellers));
        navigate("/Consumerdashboard/CDashboard");
      }
      else{
        alert("Invalid Mail or Password")
      }
    })
    .catch((err) =>{
      alert("Please enter Mail id and Password");
    })

  }

//google login function

  // const gAuth = ()=>{
  //   // axios.
  //   // post("/consumer/Gauth_consumer",{
  //   //   googleId:id
  //   // }).then((res) =>{
  //   //   if(res){
  //   //     localStorage.setItem("name", res.data.data.fName);
  //   //     localStorage.setItem("mob",res.data.data.mobNo);
  //   //     localStorage.setItem("mail",res.data.data.mail);
  //   //     localStorage.setItem("image",res.data.data.image);
  //   //     localStorage.setItem("sellers", JSON.stringify(res.data.data.sellers));
  //   //     navigate("/Consumerdashboard/CDashboard");
  //   //   }
  //   //   else{
  //   //     alert("Invalid Mail or Password")
  //   //   }
  //   // })
  //   // .catch((err) =>{
  //   //   alert("Please enter Mail id and Password");
  //   // })
  // }

  const handleEmail = (e) =>{
    setUser(e.target.value)
  }

  const handlePass = (e) =>{
    setPass (e.target.value)
  }

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
                <input type="email" name="email" className="email" onChange={handleEmail}/>
              </div>
              <div className="input-2">
                <label htmlFor="pass">Password</label>
                <input type="password" name="pass" onChange={handlePass} />
              </div>
              <a href="">Forget Password ?</a>
            </div>
            <div className="input-btn">
              <div className="loginbtn" onClick={loginUser}>
                Login
              </div >
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


