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
              <label htmlFor="">Name</label>
              <input type="text" />
            </div>
            <div className="lname ">
              <label htmlFor="">Gmail</label>
              <input type="text" disabled />
            </div>
            <div className="mob">
              <label htmlFor="">Mobile</label>
              <input type="tel" maxLength={10} />
            </div>
            <div className="lname">
              <label htmlFor="">Image</label>
              <input type="file" />
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
