import React, { useState,useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./style/Cdashboard.scss";
import axios from "axios";

export function CDashboard() {
  const [consumerId, setconsumerId] = useState(localStorage.getItem("cId"));
  const [sellerArr, setsellerArr] = useState([""]);
  const [consumerAmt, setconsumerAmt] = useState("");

  useEffect(() => {
    axios
      .get(`/consumer/getallshops/${consumerId}`)
      .then((res) => {
        if (res) {

          let arr = res.data.sellers;
          setsellerArr(arr);
          let total = 0;

          for (let i = 0; i < arr.length; i++) {
            total += arr[i].totalAmt;
          }

          setconsumerAmt(total);
        } else {
          console.log("Id Not Found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [consumerId]);

  return (
    <div className="Cdashboard">
      <section className="Sdb-Wraper">
        <article className="Spayment-btn">
          <NavLink to="/ConsumerQrScan" className="Spay-btn">
            Scan QR
          </NavLink>
          <NavLink to="/ConsumerQrShow" className="Srec-btn">
            Show QR
          </NavLink>
        </article>
        <article className="S-CB-details">
          <div className="Scredit-detail-wraper">
            <div className="cr-lable-container">
              <div className="cr-lable">Credit Amount</div>
            </div>
            <div className="cr-amt-container">
              <div className="cr-amt">{consumerAmt}</div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
