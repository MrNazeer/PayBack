import React, { useState, useEffect } from "react";
import "./style/SellerITstyle.scss";
import { NavLink } from "react-router-dom";
import { GrMail } from "react-icons/gr";
import { BiRupee } from "react-icons/bi";
import axios from "axios";

export function SellerIT() {
  const [sellerId, setSelleId] = useState(localStorage.getItem("Sid"));
  const [sellerMailId, setSellerMailId] = useState(
    localStorage.getItem("gmail")
  );
  const [sellerName, setSelleName] = useState(localStorage.getItem("Shopename"));
  const [consumer, setConsumerId] = useState("");
  const [transaction, setTransaction] = useState([]);

  const IndivdualtransactionGetter = () => {
    try {
      axios
        .get(`/seller/detailsOfSeller/${sellerId}`)
        .then((res) => {
          setTransaction(res.data.Consumers);
          console.log(res.data.Consumers);
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

  const sendMail = (conMailid, conTotal) => {
    console.log("sellerName:", sellerName);
    console.log("sellerMailId:", sellerMailId);
    console.log("consumerMailId:", conMailid);
    console.log("TotalAmount:", conTotal);
    try {
      axios
        .post("/seller/SendMail", {
          conMailId: conMailid,
          sellerMailId: sellerMailId,
          sellerName: sellerName,
          amount: conTotal,
        })
        .then((res) => {
          if (res) {
            alert("Mail Sended Successfully");
          }
        })
        .catch((err) => {
          console.log("from sendMail then catch", err);
        });
    } catch (err) {
      console.log("from sendMail try catch", err);
    }
  };

  return (
    <div className="sellerIT">
      <section className="sellerIT-head-cont">
        <h1>Individual Transction</h1>
      </section>
      <section className="sellerIt-trans-cont">
        {transaction.map((item, index) => (
          <article key={index} className="sellerIt-trans-wrapper">
            <div className="sellerIT-trans-left">
              <div className="sellerIt-Name">{item.ConsumerName}</div>
              <NavLink
                to={`/sellerViewIndividualTrans/${item.ConsumerId}`}
                className="sellerIt-view"
              >
                View Transaction
              </NavLink>
            </div>
            <div className="sellerIT-trans-right">
              <div className="seller-mail">
                <GrMail onClick={() => sendMail(item.mail, item.TotalAmt)} />
              </div>
              <div className="sellerIt-Amt">
                <span>
                  <BiRupee />
                </span>
                {item.TotalAmt}
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
