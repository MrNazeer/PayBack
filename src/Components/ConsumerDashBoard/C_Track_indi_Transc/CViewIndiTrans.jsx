import React from "react";
import "./style/Cviewinditransstyle.scss";

export function CViewIndiTrans() {
  return (
    <div className="conit-track">
      <section className="sellerot-heading">
        <h1 className="sell-head">Track Your Transaction</h1>
      </section>

      <section className="conIT-date-container">
        <div className="sellerot-date-wrapper">
          <div className="conIt-start-date">
            <label htmlFor="">Start Date</label>
            <input className="con-track-input1" type="date" />
          </div>
          <div className="conIt-end-date">
            <label htmlFor="">End Date</label>
            <input className="con-track-input2" type="date" />
          </div>
        </div>
      </section>

      <section className="ContIt-trans-detail-cont">
        <div className="ConIt-trans-detail-wrapper">
          <div className="ConIt-con-name">Nazeer</div>
          <div className="ConIt-con-date">17-04-2023</div>
          <div className="ConIt-con-purpose">paal</div>
          <div className="ConIt-con-amt">22</div>
        </div>
      </section>
    </div>
  );
}
