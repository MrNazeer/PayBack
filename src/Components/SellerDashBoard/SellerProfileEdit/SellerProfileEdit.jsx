import React, { useEffect, useState } from "react";
import "./style/SellerprofileEditStyle.scss";
import axios from "axios";

export function SellerProfileEdit() {
  const [sellerid, setSellerId] = useState(localStorage.getItem("Sid"));
  const [sellerName, setSellerName] = useState("");
  const [sellerMob, setSellerMob] = useState("");
  const [sellerImage, setsellerImage] = useState("");
  const [sellerPass, setsellerPaass] = useState("");
  const [sellerMail, setsellerMail] = useState("");
  const [shopName, setShopeName] = useState("");

  useEffect(() => {
    try {
      axios
        .get(`/seller/detailsOfSeller/${sellerid}`)
        .then((res) => {
          console.log(res.data);
          setsellerMail(res.data.gmail);
          setShopeName(res.data.shopName);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
  }, [sellerid]);

  const handleName = (e) => {
    setSellerName(e.target.value);
  };
  const handlemob = (e) => {
    setSellerMob(e.target.value);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64String = reader.result
        .replace("data:", "")
        .replace(/^.+,/, "");
      // Do something with the base64String, like send it to the server
      setsellerImage(base64String);
    };
  };

  const handlePass = (e) => {
    setsellerPaass(e.target.value);
  };

  const updateSeller = (e) => {
    e.preventDefault();

    if (
      sellerid !== "" &&
      sellerName !== "" &&
      sellerMob !== "" &&
      sellerImage !== "" &&
      sellerPass !== ""
    ) {
      try {
        axios
          .patch(`/seller/updateSeller/${sellerid}`, {
            Name: sellerName,
            mobNo: sellerMob,
            password: sellerPass,
            image: sellerImage,
          })
          .then((res) => {
            console.log(res.data);
            localStorage.setItem("image", sellerImage);
            alert("Updated Successfully");
          })
          .catch((err) => {
            console.log("From then catch", err);
            alert("try again !");
          });
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Please enter all the fileds");
    }
  };

  return (
    <div className="SellerProfileEdit">
      <div className="sel-pro-container">
        <section className="sel-profile-edit">
          <form className="inputs">
            <div className="title-cont">
              <p className="title">Update your profile..?</p>
            </div>
            <div className="fname">
              <label htmlFor="">Name</label>
              <input className="selUp-name" type="text" onChange={handleName} />
            </div>
            <div className="lname ">
              <label htmlFor="">Shop Name</label>
              <input
                className="selUp-ShopName"
                type="text"
                disabled
                value={shopName}
              />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile No</label>
              <input
                className="selUp-mob"
                max={10}
                type="tel"
                onChange={handlemob}
              />
            </div>
            <div className="shop-name">
              <label htmlFor="">Gmail</label>
              <input
                className="selUp-gmail"
                type="text"
                disabled
                value={sellerMail}
              />
            </div>
            <div className="shop-name">
              <label htmlFor="">Image</label>
              <input
                className="img-input"
                type="file"
                onChange={handleFileUpload}
              />
            </div>
            <div className="shop-name">
              <label htmlFor="">Password</label>
              <input
                className="selUp-ShopName"
                type="password"
                onChange={handlePass}
              />
            </div>
            <div className="btn-cont">
              <div className="btn" onClick={updateSeller}>
                Submit
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
