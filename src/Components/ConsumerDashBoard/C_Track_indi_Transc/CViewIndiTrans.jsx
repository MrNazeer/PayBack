import React, { useEffect, useState } from "react";
import "./style/Cviewinditransstyle.scss";
import { BiRupee } from "react-icons/bi";
import { useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export function CViewIndiTrans() {
  const { id } = useParams();
  const [sellerid, setSellerId] = useState(id);
  const [consumerid, setConsumerId] = useState(localStorage.getItem("cId"));
  const [transaction, setTransaction] = useState([""]);
  const [newTransaction, setNewTransaction] = useState([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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
            setNewTransaction(res.data);
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log("From then catch", err);
        });
    } catch (err) {
      console.log("From try catch", err);
    }
  }, [consumerid, sellerid]);

  const handleStartDate = (e) => {
    setStartDate(new Date(e.target.value).toLocaleDateString("en-IN"));
  };

  const handleEndDate = (e) => {
    setEndDate(new Date(e.target.value).toLocaleDateString("en-IN"));
  };

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
    <div className="conit-track">
      <section className="sellerot-heading">
        <h1 className="sell-head">Track Your Transaction</h1>
      </section>

      <section className="conIT-date-container">
        <div className="sellerot-date-wrapper">
          <div className="conIt-start-date">
            <label htmlFor="">Start Date</label>
            <input
              className="con-track-input1"
              type="date"
              onChange={handleStartDate}
            />
          </div>
          <div className="conIt-end-date">
            <label htmlFor="">End Date</label>
            <input
              className="con-track-input2"
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

      <section className="ContIt-trans-detail-cont">
        {transaction.map((item, index) => (
          <div key={index} className="ConIt-trans-detail-wrapper">
            <div className="consumerTr-name-amt">
              <div className="contr-con-name">
                Paid to {item.sellerShopName}
              </div>
              <div className="contr-con-amt">
                <span className="contr-con-icon">
                  <BiRupee />
                </span>
                {item.amount}
              </div>
            </div>
            <div className="consumerTr-date-purpose">
              <div className="contr-con-date">
                {new Date(item.date).toLocaleDateString("en-IN")}
              </div>
              <div className="contr-con-purpose">{item.purpose}</div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
