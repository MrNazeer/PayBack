import React from 'react'
import "./style/Cdashboard.scss"


export  function CDashboard() {
  return (
    <div className="Cdashboard">
      <section className="Sdb-Wraper">
        <article className="Spayment-btn">
          <div className="Spay-btn">Scan QR</div>
          <div className="Srec-btn">Show QR</div>
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
