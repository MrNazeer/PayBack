import React, { useState, useEffect } from "react";
import "./style/SellerITstyle.scss";
import { NavLink } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import axios from "axios";

export function SellerIT() {
  const [sellerId, setSelleId] = useState(localStorage.getItem("Sid"));
  const [consumer, setConsumerId] = useState("");
  const [transaction, setTransaction] = useState([]);

  const IndivdualtransactionGetter = () => {
    try {
      axios
        .get(`/transaction/get_overAllTrans_seller/${sellerId}`)
        .then((res) => {
          setTransaction(res.data);
          // console.log(res.data);
        })
        .catch((err) => {
          console.log("from then catch", err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
  };

  useEffect(() => {
    IndivdualtransactionGetter();
  }, [sellerId]);

  

  return (
    <div className="sellerIT">
      <section className="sellerIT-head-cont">
        <h1>Individual Transction</h1>
      </section>
      <section className="sellerIt-trans-cont">
        {transaction.map((item, index) => (
          <article key={index} className="sellerIt-trans-wrapper">
            <div className="sellerIT-trans-left">
              <div className="sellerIt-Name">{item.consumerName}</div>
              <NavLink
                to={`/sellerViewIndividualTrans/${item.consumerId}`}
                className="sellerIt-view"
              >
                View Transaction
              </NavLink>
            </div>
            <div className="sellerIT-trans-right">
              <div className="seller-mail">
                <GrMail />
              </div>
              <div className="sellerIt-Amt">
                <span>
                  <BiRupee />
                </span>
                {item.amount}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
