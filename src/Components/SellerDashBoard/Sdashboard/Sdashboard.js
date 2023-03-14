import React from "react";
import "./Style/Sdashboard.scss";
import { NavLink  } from "react-router-dom";

export function Sdashboard() {
  return (
    <div className="sdashboard">
      <section className="Sdb-Wraper">
        <article className="Spayment-btn">
          <NavLink to="/Qrreader" className="Spay-btn">Scan QR</NavLink>
          <NavLink to="/Qrshow" className="Srec-btn">Show QR</NavLink>
        </article>
        <article className="S-CB-details">
          <div className="Scredit-detail-wraper">
            <div className="cr-lable-container">
              <div className="cr-lable">Credit Amount</div>
            </div>
            <div className="cr-amt-container">
              <div className="cr-amt">1000</div>
            </div>
          </div>
        </article>
        <article className="Buyers_add-del">
          <div className="buy-btn-wraper">
            <NavLink to="/Qrreader" className="add-buyer">Add Buyer</NavLink>
            <NavLink to="/Qrreader" className="del-buyer">Delete Buyer</NavLink>
          </div>
        </article>
      </section>
    </div>
  );
}
