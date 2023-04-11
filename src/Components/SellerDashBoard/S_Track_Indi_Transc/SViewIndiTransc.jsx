import React, { useEffect, useState } from "react";
import "./style/Sviewinditransstyle.scss";
import { BiRupee } from "react-icons/bi";
import { useParams } from "react-router-dom";
import axios from "axios";

export function SViewIndiTransc() {
  const { id } = useParams();
  const [sellerid, setSellerId] = useState(localStorage.getItem("Sid"));
  const [consumerid, setConsumerId] = useState(id);
  const [transaction, setTransaction] = useState([""]);

  useEffect(() => {
    try {
      axios
        .get("/transaction/get_IndividualTrans_consumer/", {
          params: {
            consumerId: consumerid,
            sellerId: sellerid,
          },
        })
        .then((res) => {
          if (res) {
            setTransaction(res.data);
          }
        })
        .catch((err) => {
          console.log("From then catch", err);
        });
    } catch (err) {
      console.log("From try catch", err);
    }
  }, [consumerid, sellerid]);

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
        {transaction.map((item, index) => (
          <div key={index} className="sellerTr-trans-detail-wrapper">
            <div className="sellerTr-name-amt">
              <div className="seltr-con-name">
                Recevied From {item.consumerName}
              </div>
              <div className="seltr-con-amt">
                <span className="seltr-con-icon">
                  <BiRupee />
                </span>
                {item.amount}
              </div>
            </div>
            <div className="sellerTr-date-purpose">
              <div className="seltr-con-date">
                {new Date(item.date).toLocaleDateString("en-IN")}
              </div>
              <div className="seltr-con-purpose">{item.purpose}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
