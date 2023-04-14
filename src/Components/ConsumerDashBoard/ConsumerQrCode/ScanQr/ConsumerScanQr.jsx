import React, { useState } from "react";
import "./style/consumerscanqrstyle.scss";
import QrReader from "react-qr-reader";
import { useNavigate } from "react-router-dom";

export function ConsumerScanQr() {
  const navigate = useNavigate();
  // const [sellerId, setSellerId] = useState();

  const webError = (err) => {
    if (err) {
      console.log(err);
    }
  };
  const webScan = (result) => {
    if (result) {
      // setSellerId(result);
      navigate(`/ConPayPage/${result}`);
    }

    //Optional code.
    // if (result) {
    //   setSellerId(result);
    //   navigate(`/ConPayPage/${sellerId}`, { state: { sellerId: sellerId } });
    // }
  };

  return (
    <div
      className="Conusmer-qr-scan"
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
