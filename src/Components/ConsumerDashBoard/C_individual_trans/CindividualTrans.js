import React, { useState, useEffect } from "react";
import "./style/CindividualTrans.scss";
import { NavLink } from "react-router-dom";
import { BiRupee } from "react-icons/bi";
import axios from "axios";

export function CindividualTrans() {
  const [sellerId, setSelleId] = useState("");
  const [consumer, setConsumerId] = useState(localStorage.getItem("cId"));
  const [transaction, setTransaction] = useState([""]);

  const conIndivdualtransactionGetter = () => {
    try {
      axios
        .get(`/consumer/getallshops/${consumer}`)
        .then((res) => {
          setTransaction(res.data.sellers);
          console.log(res.data.sellers);
        })
        .catch((err) => {
          console.log("from then catch", err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
  };

  useEffect(() => {
    conIndivdualtransactionGetter();
  }, [consumer, setTransaction]);

  return (
    <div className="ConsumerIT">
      <section className="ConIT-head-cont">
        <h1>Individual Transction</h1>
      </section>

      <section className="ConIt-trans-cont">
        {transaction.map((item, index) => (
          <article key={index} className="ConIt-trans-wrapper">
            <div className="ConIT-trans-left">
              <div className="conIt-Name">{item.shopName}</div>
              <NavLink
                to={`/ConsumerViewIndividualTrans/${item.sellerId}`}
                className="ConIt-view"
              >
                View Transaction
              </NavLink>
            </div>
            <div className="conit-limit-wrapper">
              <p className="c-limit">Limit</p>
              <p className="c-amt">
                <span className="c-amt-rup">
                  <BiRupee />
                </span>
                {item.sellerLimit}
              </p>
            </div>
            <div className="ConIt-Amt">
              <span className="c-amt-rup">
                <BiRupee />
              </span>
              {item.totalAmt}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
