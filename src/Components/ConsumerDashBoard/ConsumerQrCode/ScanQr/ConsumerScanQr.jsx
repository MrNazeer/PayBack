import React from "react";
import "./style/consumerscanqrstyle.scss";
import QrReader from "react-qr-reader";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function ConsumerScanQr() {
  const [concamResult, setconcamResult] = useState();

  const webError = (err) => {
    if (err) {
      console.log(err);
    }
  };
  const webScan = (result) => {
    if (result) {
      setconcamResult(result);
    }
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
      <NavLink to="/ConPayPage" className="sample-btn">
        press
      </NavLink>
      <p>{concamResult}</p>
    </div>
  );
}
