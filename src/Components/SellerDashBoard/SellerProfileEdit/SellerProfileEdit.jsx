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
            <div className="shop-name">
              <label htmlFor="">Shop Name </label>
              <input type="text" />
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
