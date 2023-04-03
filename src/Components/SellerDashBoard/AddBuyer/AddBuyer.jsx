import React from "react";
import QrReader from "react-qr-reader";
import { useState } from "react";

export function AddBuyer() {
  const [Buyer, setBuyer] = useState();

  const webError = (err) => {
    if (err) {
      console.log(err);
    }
  };
  const webScan = (result) => {
    if (result) {
      let flag = window.confirm("Would you like to Add as Buyer?");
      if (flag) {
        setBuyer(result);
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
      <p>{Buyer}</p>
    </div>
  );
}
