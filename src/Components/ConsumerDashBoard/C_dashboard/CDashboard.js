import React from 'react'
import { NavLink  } from "react-router-dom";
import "./style/Cdashboard.scss"


export  function CDashboard() {
  return (
    <div className="Cdashboard">
      <section className="Sdb-Wraper">
        <article className="Spayment-btn">
          <NavLink to="/Qrreader" className="Spay-btn">Scan QR</NavLink>
          <NavLink  to="/Qrshow" className="Srec-btn">Show QR</NavLink>
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
      </section>
    </div>
  )
}
