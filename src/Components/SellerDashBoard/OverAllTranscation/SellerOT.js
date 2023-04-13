import React, { useState, useEffect } from "react";
import "./style/SellerOTStyle.scss";
import { BiRupee } from "react-icons/bi";
import axios from "axios";
import moment from "moment";

export function SellerOT() {
  const [sellerId, SetSellerId] = useState(localStorage.getItem("Sid"));
  const [transaction, setTransaction] = useState([""]);
  const [newTransaction, setNewTransaction] = useState([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const transactionGetter = () => {
    try {
      axios
        .get(`/transaction/get_overAllTrans_seller/${sellerId}`)
        .then((res) => {
          setTransaction(res.data);
          setNewTransaction(res.data);
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
    setStartDate(new Date(e.target.value).toLocaleDateString("en-IN"));
  };

  const handleEndDate = (e) => {
    setEndDate(new Date(e.target.value).toLocaleDateString("en-IN"));
  };

  // const dateSetter = () => {
  //   const filteredTransactions = transaction.filter(
  //     (item) =>
  //       new Date(item.date).toLocaleDateString("en-IN") >=
  //         new Date("04/09/2023") &&
  //       new Date(item.date).toLocaleDateString("en-IN") <=
  //         new Date("04/15/2023")
  //   );
  //   // setTransaction(filteredTransactions);
  //   console.log(filteredTransactions);
  // };

  const dateSetter = () => {
    const start = moment(startDate, "DD/MM/YYYY").toDate();
    const end = moment(endDate, "DD/MM/YYYY").toDate();

    const filteredTransactions = newTransaction
      .map((item) => ({
        ...item,
        date: moment(item.date).format("DD/MM/YYYY"),
      }))
      .filter((item) => {
        const itemDate = moment(item.date, "DD/MM/YYYY").toDate();
        return itemDate > start && itemDate < end;
      });
    setTransaction(filteredTransactions);
    console.log("filteredTransactions", transaction);
  };

  const clearTransaction = () => {
    setTransaction(newTransaction);
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
        <div className="s-date-btn-wrap">
          <div className="s-date-btn" onClick={dateSetter}>
            search
          </div>
          <div className="s-date-btn" onClick={clearTransaction}>
            clear
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
              <div className="sel-con-date">
                {new Date(item.date).toLocaleDateString()}
              </div>
              <div className="sel-con-purpose">{item.purpose}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
