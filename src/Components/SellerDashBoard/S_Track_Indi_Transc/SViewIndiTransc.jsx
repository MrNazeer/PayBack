import React, { useEffect, useState } from "react";
import "./style/Sviewinditransstyle.scss";
import { BiRupee } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import moment from "moment";

export function SViewIndiTransc() {
  const { id } = useParams();
  const [sellerid, setSellerId] = useState(localStorage.getItem("Sid"));
  const [consumerid, setConsumerId] = useState(id);
  const [transaction, setTransaction] = useState([""]);
  const [newTransaction, setNewTransaction] = useState([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [response, setResponse] = useState("");

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
            setResponse("");
          }
        })
        .catch((err) => {
          console.log("From then catch", err);
        });
    } catch (err) {
      console.log("From try catch", err);
    }
  }, [consumerid, response]);

  const delATransaction = (transaId, amt) => {
    console.log("TransaId", transaId);
    try {
      axios
        .delete("/transaction/del_transaction/", {
          params: {
            consumerId: consumerid,
            sellerId: sellerid,
            id: transaId,
            amt: amt,
          },
        })
        .then((res) => {
          console.log(res.data);
          alert("Transaction deleted successfully");
          setResponse("true");
        })
        .catch((err) => {
          console.log("from then catch", err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
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

  const handleStartDate = (e) => {
    setStartDate(new Date(e.target.value).toLocaleDateString("en-IN"));
  };

  const handleEndDate = (e) => {
    setEndDate(new Date(e.target.value).toLocaleDateString("en-IN"));
  };

  return (
    <div className="selleit-track">
      <section className="sellerot-heading">
        <h1 className="sell-head">Track Your Transaction</h1>
      </section>
      <section className="sellerot-date-container">
        <div className="sellerot-date-wrapper">
          <div className="sell-start-date">
            <label htmlFor="">Start Date</label>
            <input
              className="sell-track-input1"
              type="date"
              onChange={handleStartDate}
            />
          </div>
          <div className="sell-end-date">
            <label htmlFor="">End Date</label>
            <input
              className="sell-track-input2"
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
              <div className="seltr-con-del">
                <AiFillDelete
                  onClick={() => delATransaction(item._id, item.amount)}
                />
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
