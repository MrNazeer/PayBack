import React, { useState, useEffect } from "react";
import "./style/SellerOTStyle.scss";
import { BiRupee } from "react-icons/bi";
import axios from "axios";

export function SellerOT() {
  const [sellerId, SetSellerId] = useState(localStorage.getItem("Sid"));
  const [transaction, setTransaction] = useState([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const transactionGetter = () => {
    try {
      axios
        .get(`/transaction/get_overAllTrans_seller/${sellerId}`)
        .then((res) => {
          setTransaction(res.data);
        })
        .catch((err) => {
          console.log("from then catch", err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
  };

  useEffect(() => {
    transactionGetter();
  }, [sellerId]);

  const handleStartDate = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="selleot">
      <section className="sellerot-heading">
        <h1 className="sell-head">Over All Transaction</h1>
      </section>
      <section className="sellerot-date-container">
        <div className="sellerot-date-wrapper">
          <div className="sell-start-date">
            <label htmlFor="">Start Date</label>
            <input
              className="sell-ot-input"
              type="date"
              onChange={handleStartDate}
            />
          </div>
          <div className="sell-end-date">
            <label htmlFor="">End Date</label>
            <input
              className="sell-ot-input"
              type="date"
              onChange={handleEndDate}
            />
          </div>
        </div>
      </section>
      <section className="seller-trans-detail-cont">
        {transaction.map((item, index) => (
          <div key={index} className="seller-trans-detail-wrapper">
            <div className="trans-name-rupe">
              <div className="sel-con-name">
                Received from {item.consumerName}
              </div>
              <div className="sel-con-amt">
                <span>
                  <BiRupee />
                </span>
                {item.amount}
              </div>
            </div>
            <div className="trans-date-purpose">
              <div className="sel-con-date">{new Date(item.date).toLocaleDateString("en-IN")}</div>
              <div className="sel-con-purpose">{item.purpose}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
