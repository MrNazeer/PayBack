import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import "./style/sellershowqrstyle.scss";

export function SellerShowQr() {
  const [showQr, SetShowQr] = useState("");

  useEffect(() => {
    SetShowQr(localStorage.getItem("Sid"));
  }, [showQr]);

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
      <h1 className="s-qr-title">Scan Here</h1>
      <div className="s-Qr-wrapper">
        <QRCode
          value={showQr}
          style={{ width: "20rem", height: "20rem", border: "1rem" }}
        />
      </div>
    </div>
  );
}
