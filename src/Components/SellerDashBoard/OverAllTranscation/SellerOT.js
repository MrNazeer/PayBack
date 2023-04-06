import React from "react";
import "./style/SellerOTStyle.scss";
import { BiRupee } from "react-icons/bi";

export function SellerOT() {
  return (
    <div className="selleot">
      <section className="sellerot-heading">
        <h1 className="sell-head">Over All Transaction</h1>
      </section>
      <section className="sellerot-date-container">
        <div className="sellerot-date-wrapper">
          <div className="sell-start-date">
            <label htmlFor="">Start Date</label>
            <input className="sell-ot-input" type="date" />
          </div>
          <div className="sell-end-date">
            <label htmlFor="">End Date</label>
            <input className="sell-ot-input" type="date" />
          </div>
        </div>
      </section>
      <section className="seller-trans-detail-cont">
        
        <div className="seller-trans-detail-wrapper">
          <div className="trans-name-rupe">
            <div className="sel-con-name">Received from arul</div>
            <div className="sel-con-amt">
              <span>
                <BiRupee />
              </span>
              200
            </div>
          </div>
          <div className="trans-date-purpose">
            <div className="sel-con-date">5-4-2023</div>
            <div className="sel-con-purpose">Refind oil</div>
          </div>
        </div>

        <div className="seller-trans-detail-wrapper">
          <div className="trans-name-rupe">
            <div className="sel-con-name">Received from SriRam</div>
            <div className="sel-con-amt">
              <span>
                <BiRupee />
              </span>
              400
            </div>
          </div>
          <div className="trans-date-purpose">
            <div className="sel-con-date">5-4-2023</div>
            <div className="sel-con-purpose">kadalai mavu</div>
          </div>
        </div>
      </section>
    </div>
  );
}
