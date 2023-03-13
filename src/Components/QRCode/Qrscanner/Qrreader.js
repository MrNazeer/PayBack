import React from "react";
import QrReader from "react-qr-reader";
import { useState } from "react";
import "./style/style.scss";


export  function Qrreader() {
  const [camResult, setcamResult] = useState();

  const webError = (err) => {
    if (err) {
      console.log(err);
    }
  };
  const webScan = (result) => {
    if (result) {
      setcamResult(result);
    }
  };

  return (
    <div
      className="qr"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
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
      <p>{camResult}</p>
    </div>
  );
}
