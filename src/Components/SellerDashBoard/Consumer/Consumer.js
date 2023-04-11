import React, { useEffect, useState } from "react";
import "./Style/ConStyle.scss";
import { FaUserEdit } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import axios from "axios";

export function Consumer() {
  const [sellerId, setSellerId] = useState(localStorage.getItem("Sid"));

  const [ConDetails, setConDetailas] = useState([""]);

  const [consumerLimit, setConsumerLimit] = useState("");
  const [consumerId, setConsumerId] = useState(null);

  useEffect(() => {
    try {
      // setSellerId();
      axios.get(`/seller/detailsOfSeller/${sellerId}`).then((res) => {
        if (res) {
          let arr = res.data.Consumers;
          setConDetailas(arr);
          console.log(ConDetails[0]);
        } else {
          console.log("Id Not Found");
        }
      });
    } catch (err) {
      console.log(err);
    }
  }, [sellerId, consumerLimit]);

  //Reset Limit for Cosnumer

  const resetLimit = (consumerID) => {
    // let consumerNewId = consumerID;
    // setConsumerId(consumerNewId);
    let limit = prompt("enter the limit");
    try {
      axios
        .patch(`/seller/UpdateLimit/${sellerId}`, {
          ConsumerId: consumerID,
          limit: limit,
        })
        .then((res) => {
          if (res) {
            alert("Limit updated");
            setConsumerLimit(limit);
          }
        })
        .catch((err) => {
          console.log("limit not updated", err);
        });
    } catch (err) {
      console.log("From try catch", err);
    }
  };

  //RESET TRANSACTION

  const restTransaction = (consumerID) => {
    console.log("consumerID", consumerID);
    console.log("sellerId", sellerId);
    try {
      axios
        .delete("/transaction/del_allTransaction/", {
          params: {
            consumerId: consumerID,
            sellerId: sellerId,
          },
        })
        .then((res) => {
          if (res) {
            alert("Transation Reseted successfully", res);
          }
        })
        .catch((err) => {
          alert("from then catch", err);
        });
    } catch (err) {
      console.log("from restTransaction try catch ", err);
    }
  };

  const search = (e) => {
    // let a = ConDetails.map((array) => {
    //  return ConDetails.filter(() => array.ConsumerName.includes(e.target.value))
    // });
    // console.log(a);
  };

  return (
    <div className="seller-Consumer ">
      <div className="consumer-container">
        <section className="C-title">
          <h1>Your Consumers</h1>
        </section>
        <section className="search-container">
          <article className="search-wrap">
            <input
              type="text"
              className="con-search-input"
              placeholder="search"
              onChange={search}
            />
          </article>
        </section>

        <section className="cname-container">
          <section className="seller-consumer-lable">
            <div>Consumer Name</div>
            <div className="seller-consumer-lable-left">
              <div>Transaction Limit</div>
              <div>Reset Transaction</div>
            </div>
          </section>
          {ConDetails.map((item, index) => (
            <div key={index} className="cname-wrapper">
              <div className="con-name">{item.ConsumerName}</div>
              <div className="con-icon-cont">
                <div className="con-reset">
                  <div className="con-trans-limit">{item.limit}</div>
                  <FaUserEdit
                    className="edit"
                    onClick={() => resetLimit(item.ConsumerId)}
                  />
                </div>
                <div className="con-delete">
                  <BiRepost
                    className="con-it-reset"
                    onClick={() => restTransaction(item.ConsumerId)}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
