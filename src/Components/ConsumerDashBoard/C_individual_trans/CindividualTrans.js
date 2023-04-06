import React from "react";
import "./style/CindividualTrans.scss";
import { NavLink } from "react-router-dom";

export function CindividualTrans() {
  return (
    <div className="ConsumerIT">
      <section className="ConIT-head-cont">
        <h1>Individual Transction</h1>
      </section>

      <section className="ConIt-trans-cont">
        <article className="ConIt-trans-wrapper">
          <div className="ConIT-trans-left">
            <div className="conIt-Name">nellai store</div>
            <NavLink to="/ConsumerViewIndividualTrans" className="ConIt-view">
              View Transaction
            </NavLink>
          </div>
          <div className="conit-limit-wrapper">
            <p className="c-limit">Limit</p>
            <p className="c-amt">10000</p>
          </div>
          <div className="ConIt-Amt">5000</div>
        </article>
      </section>
    </div>
  );
}
