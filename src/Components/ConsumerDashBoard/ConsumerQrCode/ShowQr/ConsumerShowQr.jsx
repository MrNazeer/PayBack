import React, { useEffect, useState } from "react";
import "./style/consumershowqrstyle.scss";
import QRCode from "react-qr-code";

export function ConsumerShowQr() {
  const [consumerId, setconsumerId] = useState(localStorage.getItem("cId"));

  useEffect(() => {}, [consumerId]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1 className="c-qr-title">Scan Here</h1>
      <div className="c-qr-wrapper">
        <QRCode
          value={consumerId}
          style={{ width: "20rem", height: "20rem" }}
        />
      </div>
    </div>
  );
}
