import React, { useState, useEffect } from "react";
import "./style/conpaypagestyle.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

export function ConPayPage() {
  const { id } = useParams();
  const [consumerId, setConsumerId] = useState(localStorage.getItem("cId"));
  const [sellerId, setSellerId] = useState(id);
  const [amount, setAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState(Date());
  const [sellerArr, setSellerArr] = useState([""]);
  const [limit, setLimit] = useState("");
  const [oldTotalAmt, setoldTotalAmt] = useState("");

  useEffect(() => {
    try {
      axios
        .get(`/consumer/getallshops/${consumerId}`)
        .then((res) => {
          if (res) {
            setSellerArr(res.data.sellers);
            const seller = sellerArr.find((seller) => sellerId === sellerId);
            setLimit(seller.sellerLimit);
            setoldTotalAmt(seller.totalAmt);
          }
        })
        .catch((err) => {
          console.log("from then catch", err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
  }, [consumerId]);

  const handleAmt = (e) => {
    setAmount(e.target.value);
  };
  const handlePurpose = (e) => {
    setPurpose(e.target.value);
  };

  const clear = () => {
    setAmount("");
    setPurpose("");
  };

  const pay = () => {
    let newAmt = amount + oldTotalAmt;

    if (newAmt > limit) {
      try {
        axios
          .post("/transaction/add_transaction/", {
            sellerId: sellerId,
            consumerId: consumerId,
            amount: amount,
            date: date,
            purpose: purpose,
          })
          .then((res) => {
            alert("Payment Successfully Done");
            console.log(res);
          })
          .catch((err) => {
            alert("Please check your shope");
            console.log(err);
          });
      } catch (err) {
        console.log("from try catch", err);
      }
    } else {
      alert("You have Reached Limit");
    }
  };

  return (
    <div className="pay-cont">
      <div className="pay-input-cont">
        <div className="pay-amt-wrapper">
          <label className="pay-lable" htmlFor="">
            You are Paying ! {sellerId}
          </label>
          <input type="text" className="pay-input" onChange={handleAmt} />
        </div>
        <div className="pay-pupose-wrapper">
          <label className="pay-purpose-lable" htmlFor="">
            Purpose ?
          </label>
          <input
            type="text"
            className="pay-purpose-input"
            onChange={handlePurpose}
          />
        </div>
      </div>
      <div className="pay-btn-cont">
        <div className="pay-btn" onClick={pay}>
          Pay
        </div>
        <div className="pay-btn-clear" onClick={clear}>
          Clear
        </div>
      </div>
    </div>
  );
}
