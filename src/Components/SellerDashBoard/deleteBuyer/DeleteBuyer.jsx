import React, { useState } from "react";
import QrReader from "react-qr-reader";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function DeleteBuyer() {
  const [consumer, setConsumer] = useState("");
  const [seller, setSeller] = useState(localStorage.getItem("Sid"));

  const webError = (err) => {
    if (err) {
      console.log(err);
    }
  };
  const webScan = (result) => {
    if (result) {
      let flag = window.confirm("Do you want to delete ?");
      if (flag) {
        setConsumer(result);
        try {
          axios
            .delete(`/seller/del_consumer/${seller}}`, {
              ConsumerId: consumer,
            })
            .then((res) => {
              if (res) {
                alert("Consumer deleted successfully");
              }
            })
            .catch((err) => {
              console.log("from then catch", err);
              alert("Not your consumer !")
            });
        } catch (err) {
          console.log("from the try catch", err);
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
      <p>{consumer}</p>
    </div>
  );
}
