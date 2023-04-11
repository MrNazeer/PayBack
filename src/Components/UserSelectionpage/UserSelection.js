import React, { useEffect } from "react";
import "./style/UserSelection.scss";
import { Link } from "react-router-dom";

export default function UserSelection() {
  useEffect(() => {
    localStorage.clear();
  });

  return (
    <div className="usersel-cont">
      <div className="container">
        <div className="login">
          <p className="m-logo">PayBack</p>
        </div>
        <section className="user-selection">
          <article className="left">
            <Link to="/sellersign" className="text1">
              Seller
            </Link>
          </article>
          <article className="right">
            <Link to="/conprofile" className="text2">
              Consumer
            </Link>
          </article>
        </section>
      </div>
    </div>
  );
}
