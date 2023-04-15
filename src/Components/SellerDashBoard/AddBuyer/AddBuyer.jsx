import React, { useEffect, useState } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddBuyer() {
  const navigate = useNavigate();
  // const [consumer, setconsumer] = useState("");
  const [seller, setSeller] = useState(localStorage.getItem("Sid"));
  const [shop, setShop] = useState(localStorage.getItem("Shopename"));
  // const [limit, setLimit] = useState("1000");

  // useEffect(() => {
  //   axios
  //     .patch(`/seller/add_cosnumer/${seller}`, {
  //       ConsumerId: consumer,
  //       limit: limit,
  //       shopName: shop,
  //     })
  //     .then((res) => {
  //       if (res) {
  //         alert("Consumer Added");
  //         navigate("/Sellerdashboard/Sdashboard");
  //       }
  //     })
  //     .catch((errs) => {
  //       alert("Already Your Consumer");
  //     });
  // }, [seller]);

  const webError = (err) => {
    if (err) {
      console.log(err);
    }
  };
  const webScan = (result) => {
    if (result) {
      let limitAmt = prompt("Please provide the limit for customer?");
      // setLimit(limitAmt);
      if (limitAmt) {
        // setconsumer(result);
        try {
          axios
            .patch(`/seller/add_cosnumer/${seller}`, {
              ConsumerId: result,
              limit: limitAmt,
              shopName: shop,
            })
            .then((res) => {
              if (res) {
                alert("Consumer Added");
                navigate("/Sellerdashboard/Sdashboard");
              }
            })
            .catch((errs) => {
              alert("Already Your Consumer");
              console.log("Consumer Added err", errs);
            });
        } catch (err) {
          console.log("from try catch", err);
        }
      }
    }
  };

  return (
    <div
      className="Seller-qr-Scan"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <QrReader
        delay={300}
        style={{ height: 240, width: 320 }}
        facingMode={"environment"}
        onError={webError}
        onScan={webScan}
        legacyMode={false}
      />
    </div>
  );
}
