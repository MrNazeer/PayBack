import React from "react";
import "./style/shops.scss"
export  function Shops() {
  return (
    <div className="shops">
      <div className="consumer-container">
        <section className="C-title">
          <h1>Your Shops</h1>
        </section>
        <section className="search-container">
          <article className="search-wrap">
            <input type="text" className="search-input" placeholder="search" />
            <div className="search-btn">Search</div>
          </article>
        </section>
        <section className="cname-container">
          <div className="cname-wrapper">
            <div className="con-name">Nazeer</div>
          </div>
          <div className="cname-wrapper">
            <div className="con-name">Raja</div>
          </div>
        </section>
      </div>
    </div>
  );
}
