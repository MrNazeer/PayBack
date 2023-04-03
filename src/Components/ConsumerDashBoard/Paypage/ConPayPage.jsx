import React from "react";
import "./style/conpaypagestyle.scss";

export function ConPayPage() {
  return (
    <div className="pay-cont">
      <div className="pay-input-cont">
        <div className="pay-amt-wrapper">
          <label className="pay-lable" htmlFor="">
            You are Paying !
          </label>
          <input type="text" className="pay-input" />
        </div>
        <div className="pay-pupose-wrapper">
          <label className="pay-purpose-lable" htmlFor="">
            Purpose ?
          </label>
          <input type="text" className="pay-purpose-input" />
        </div>
      </div>
      <div className="pay-btn-cont">
        <div className="pay-btn">Pay</div>
        <div className="pay-btn-clear">Clear</div>
      </div>
    </div>
  );
}
