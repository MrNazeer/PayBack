import React from "react";
import "./style/CprofileStyle.scss";

export function CprofileEdit() {
  return (
    <div className="CprofileEdit">
      <div className="con-pro-container">
        <section className="con-profile-edit">
          <article className="inputs">
            <div className="title-cont">
              <p className="title">Update your profile</p>
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
            <div className="btn-cont">
              <div className="btn">Submit</div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
