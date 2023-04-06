import React from "react";
import "./style/Cviewinditransstyle.scss";
import { BiRupee } from "react-icons/bi";

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
          <div className="consumerTr-name-amt">
            <div className="contr-con-name">Paid to WallMart</div>
            <div className="contr-con-amt">
              <span className="contr-con-icon">
                <BiRupee />
              </span>
              200
            </div>
          </div>
          <div className="consumerTr-date-purpose">
            <div className="contr-con-date">5-4-2023</div>
            <div className="contr-con-purpose">Milk</div>
          </div>
        </div>
      </section>
    </div>
  );
}
