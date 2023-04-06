import React from "react";
import "./style/coverallTrans.scss";
import { BiRupee} from "react-icons/bi";

export function CoverallTrans() {
  return (
    <div className="Consumerot">
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

      <div className="consumer-trans-detail-wrapper">
          <div className="ctrans-name-rupe">
            <div className="con-con-name">Paid to Wallmart</div>
            <div className="con-con-amt">
              <span>
                <BiRupee />
              </span>
              200
            </div>
          </div>
          <div className="ctrans-date-purpose">
            <div className="con-con-date">5-4-2023</div>
            <div className="con-con-purpose">Refind oil</div>
          </div>
        </div>

      </section>
    </div>
  );
}
