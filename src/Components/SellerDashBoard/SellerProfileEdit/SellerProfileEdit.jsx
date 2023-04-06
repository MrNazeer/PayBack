import React from "react";
import "./style/SellerprofileEditStyle.scss";

export function SellerProfileEdit() {
  return (
    <div className="SellerProfileEdit">
      <div className="sel-pro-container">
        <section className="sel-profile-edit">
          <article className="inputs">
            <div className="title-cont">
              <p className="title">Update your profile..?</p>
            </div>
            <div className="fname">
              <label htmlFor="">Name</label>
              <input className="selUp-name" type="text" />
            </div>
            <div className="lname ">
              <label htmlFor="">Shop Name</label>
              <input className="selUp-ShopName" type="text" disabled />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile No</label>
              <input className="selUp-mob" max={10} type="tel" />
            </div>
            <div className="shop-name">
              <label htmlFor="">Gmail</label>
              <input className="selUp-gmail" type="text" disabled />
            </div>
            <div className="shop-name">
              <label htmlFor="">Image</label>
              <input className="img-input" type="file" />
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
