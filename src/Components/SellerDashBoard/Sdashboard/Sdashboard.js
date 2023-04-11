import React, { useEffect, useState } from "react";
import "./Style/Sdashboard.scss";
import { NavLink } from "react-router-dom";
import axios from "axios";

export function Sdashboard() {
  const [sellerId, setSellerId] = useState(localStorage.getItem("Sid"));
  const [sellerAmt, setSellerAmt] = useState("");
  const [Consumers, setConsumers] = useState([]);

  useEffect(() => {
    // setSellerId(localStorage.getItem("Sid"));
    axios
      .get(`/seller/detailsOfSeller/${sellerId}`)
      .then((res) => {
        if (res) {
          let arr = res.data.Consumers;
          setConsumers(arr);
          let total = 0;

          for (let i = 0; i < arr.length; i++) {
            total += arr[i].TotalAmt;
          }

          setSellerAmt(total);
        } else {
          console.log("Id Not Found");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sellerId]);

  return (
    <div className="sdashboard">
      <section className="Sdb-Wraper">
        <article className="Spayment-btn">
          <NavLink to="/SellerQrShow" className="Srec-btn">
            Show QR
          </NavLink>
        </article>
        <article className="S-CB-details">
          <div className="Scredit-detail-wraper">
            <div className="cr-lable-container">
              <div className="cr-lable">Credit Amount</div>
            </div>
            <div className="cr-amt-container">
              <div className="cr-amt">{sellerAmt}</div>
            </div>
          </div>
        </article>
        <article className="Buyers_add-del">
          <div className="buy-btn-wraper">
            <NavLink to="/AddBuyer" className="add-buyer">
              Add Buyer
            </NavLink>
            <NavLink to="/DeleteBuyer" className="del-buyer">
              Delete Buyer
            </NavLink>
          </div>
        </article>
      </section>
    </div>
  );
}
