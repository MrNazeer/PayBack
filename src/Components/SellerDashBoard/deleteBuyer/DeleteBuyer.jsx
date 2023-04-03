import React from "react";
import QrReader from "react-qr-reader";
import { useState } from "react";

export function DeleteBuyer() {
  const [delBuyer, setdelBuyer] = useState();

  const webError = (err) => {
    if (err) {
      console.log(err);
    }
  };
  const webScan = (result) => {
    if (result) {
      // let flag = confirm("Do you want to delete ?")
      let flag = prompt("Do you want to delete ?");

      if (flag) {
        setdelBuyer(result);
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
      <p>{delBuyer}</p>
    </div>
  );
}
