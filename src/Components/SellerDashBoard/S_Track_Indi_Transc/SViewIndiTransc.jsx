import React from "react";
import "./style/Sviewinditransstyle.scss";

export function SViewIndiTransc() {
  return (
    <div className="selleit-track">
      <section className="sellerot-heading">
        <h1 className="sell-head">Track Your Transaction</h1>
      </section>
      <section className="sellerot-date-container">
        <div className="sellerot-date-wrapper">
          <div className="sell-start-date">
            <label htmlFor="">Start Date</label>
            <input className="sell-track-input1" type="date" />
          </div>
          <div className="sell-end-date">
            <label htmlFor="">End Date</label>
            <input className="sell-track-input2" type="date" />
          </div>
        </div>
      </section>
      <section className="seller-trans-detail-cont">
        <div className="seller-trans-detail-wrapper">
          <div className="sel-con-name">Nazeer</div>
          <div className="sel-con-date">17-04-2023</div>
          <div className="sel-con-purpose">paal</div>
          <div className="sel-con-amt">22</div>
        </div>
        <div className="seller-trans-detail-wrapper">
          <div className="sel-con-name">Ananth</div>
          <div className="sel-con-date">17-04-2023</div>
          <div className="sel-con-purpose">paal</div>
          <div className="sel-con-amt">22</div>
        </div>

        <div className="seller-trans-detail-wrapper">
          <div className="sel-con-name">Balaji</div>
          <div className="sel-con-date">17-04-2023</div>
          <div className="sel-con-purpose">paal</div>
          <div className="sel-con-amt">22</div>
        </div>

        <div className="seller-trans-detail-wrapper">
          <div className="sel-con-name">Balaji</div>
          <div className="sel-con-date">17-04-2023</div>
          <div className="sel-con-purpose">paal</div>
          <div className="sel-con-amt">22</div>
        </div>
        <div className="seller-trans-detail-wrapper">
          <div className="sel-con-name">Balaji</div>
          <div className="sel-con-date">17-04-2023</div>
          <div className="sel-con-purpose">paal</div>
          <div className="sel-con-amt">22</div>
        </div>
        <div className="seller-trans-detail-wrapper">
          <div className="sel-con-name">jai</div>
          <div className="sel-con-date">17-04-2023</div>
          <div className="sel-con-purpose">achi podi</div>
          <div className="sel-con-amt">1000</div>
        </div>
        <div className="seller-trans-detail-wrapper">
          <div className="sel-con-name">jai</div>
          <div className="sel-con-date">17-04-2023</div>
          <div className="sel-con-purpose">achi podi</div>
          <div className="sel-con-amt">1000</div>
        </div>
      </section>
    </div>
  );
}
