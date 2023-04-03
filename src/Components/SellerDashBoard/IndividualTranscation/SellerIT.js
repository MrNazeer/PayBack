import React from "react";
import "./style/SellerITstyle.scss";
import { NavLink } from "react-router-dom";
import { GrMail } from "react-icons/gr";

export function SellerIT() {
  return (
    <div className="sellerIT">
      <section className="sellerIT-head-cont">
        <h1>Individual Transction</h1>
      </section>
      <section className="sellerIt-trans-cont">
        <article className="sellerIt-trans-wrapper">
          <div className="sellerIT-trans-left">
            <div className="sellerIt-Name">Nazeer</div>
            <NavLink to="/sellerViewIndividualTrans" className="sellerIt-view">
              View Transaction
            </NavLink>
          </div>
          <div className="sellerIT-trans-right">
            <div className="seller-mail">
              <GrMail />
            </div>
            <div className="sellerIt-Amt">10000</div>
          </div>
        </article>
      </section>
    </div>
  );
}
