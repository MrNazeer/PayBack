import React, { useState, useEffect } from "react";
import "./style/conpaypagestyle.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function ConPayPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [consumerId, setConsumerId] = useState(localStorage.getItem("cId"));
  // const [sellerId, setSellerId] = useState(id);
  const [amount, setAmount] = useState();
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState(Date());
  const [sellerArr, setSellerArr] = useState([]);
  const [limit, setLimit] = useState();
  const [oldTotalAmt, setoldTotalAmt] = useState();

  // Old useEffects
  useEffect(() => {
    console.log("Consumer Id", consumerId);
    console.log("seller Id", id);
    try {
      axios
        .get(`/consumer/getallshops/${consumerId}`)
        .then((res) => {
          if (res) {
            setSellerArr(res.data.sellers);
            const seller = res.data.sellers.find(
              (seller) => seller.sellerId === id
            );
            setLimit(seller.sellerLimit);
            console.log("Seller Limit", seller.sellerLimit);
            setoldTotalAmt(seller.totalAmt);
            console.log("Seller TotalAmt", seller.totalAmt);
          }
        })
        .catch((err) => {
          console.log("use effect from then catch", err);
        });
    } catch (err) {
      console.log("use effect  from try catch", err);
    }
  }, [consumerId]);

  // Old useEffects end here ..................................................

  //New UseEffects

  // useEffect(() => {
  //   const setSellerInfo = () => {
  //     const seller = sellerArr.find((seller) => seller.sellerId === sellerId);
  //     setLimit(seller.sellerLimit);
  //     setoldTotalAmt(seller.totalAmt);
  //   };

  //   try {
  //     axios
  //       .get(`/consumer/getallshops/${consumerId}`)
  //       .then((res) => {
  //         if (res) {
  //           setSellerArr(res.data.sellers);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("from then catch", err);
  //       });
  //   } catch (err) {
  //     console.log("from try catch", err);
  //   }

  //   if (sellerArr.length > 0) {
  //     setSellerInfo();
  //   }
  // }, [consumerId, sellerArr, sellerId]);

  //New UseEffects end here......................................................

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
    let newAmt = Number(amount) + Number(oldTotalAmt);

    console.log(
      "Amount :",
      amount,
      "oldTotalAmt :",
      oldTotalAmt,
      "limit :",
      limit
    );

    if (newAmt <= limit) {
      try {
        axios
          .post("/transaction/add_transaction/", {
            sellerId: id,
            consumerId: consumerId,
            amount: amount,
            date: date,
            purpose: purpose,
          })
          .then((res) => {
            alert("Payment Successfully Done");
            console.log(res);
            navigate("/Consumerdashboard/CDashboard");
          })
          .catch((err) => {
            alert("Please check your shope");
            console.log(err, "from pay");
          });
      } catch (err) {
        console.log("from pay try catch", err);
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
            You are Paying !
          </label>
          <input
            type="text"
            className="pay-input"
            value={amount}
            onChange={handleAmt}
          />
        </div>
        <div className="pay-pupose-wrapper">
          <label className="pay-purpose-lable" htmlFor="">
            Purpose ?
          </label>
          <input
            type="text"
            className="pay-purpose-input"
            value={purpose}
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
