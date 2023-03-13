import React from "react";
import QRCode from "react-qr-code";

export function QrShow() {
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh"}}>
      <QRCode value="hey"  style={{width:"20rem", height:"20rem"}}/>
    </div>
  );
}
