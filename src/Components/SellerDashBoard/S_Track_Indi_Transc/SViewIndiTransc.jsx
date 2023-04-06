import React from "react";
import "./style/Sviewinditransstyle.scss";
import { BiRupee } from "react-icons/bi";

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
        <div className="sellerTr-trans-detail-wrapper">
          <div className="sellerTr-name-amt">
            <div className="seltr-con-name">Recevied From Nazeer</div>
            <div className="seltr-con-amt">
              <span className="seltr-con-icon">
                <BiRupee />
              </span>
              200
            </div>
          </div>
          <div className="sellerTr-date-purpose">
            <div className="seltr-con-date">5-4-2023</div>
            <div className="seltr-con-purpose">Milk</div>
          </div>
        </div>

        <div className="sellerTr-trans-detail-wrapper">
          <div className="sellerTr-name-amt">
            <div className="seltr-con-name">Recevied From Nazeer</div>
            <div className="seltr-con-amt">
              <span className="seltr-con-icon">
                <BiRupee />
              </span>
              200
            </div>
          </div>
          <div className="sellerTr-date-purpose">
            <div className="seltr-con-date">5-4-2023</div>
            <div className="seltr-con-purpose">Milk</div>
          </div>
        </div>

        <div className="sellerTr-trans-detail-wrapper">
          <div className="sellerTr-name-amt">
            <div className="seltr-con-name">Recevied From Nazeer</div>
            <div className="seltr-con-amt">
              <span className="seltr-con-icon">
                <BiRupee />
              </span>
              200
            </div>
          </div>
          <div className="sellerTr-date-purpose">
            <div className="seltr-con-date">5-4-2023</div>
            <div className="seltr-con-purpose">Milk</div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
