import React, { useState, useEffect } from "react";
import "./style/shops.scss";
import axios from "axios";
export function Shops() {
  const [consumerId, setConsumerId] = useState(localStorage.getItem("cId"));
  const [sellerId, setSellerId] = useState("");
  const [sellerArr, setSellerArr] = useState([""]);
  const [sellerOrgArr, setSellerOrgArr] = useState([""]);

  useEffect(() => {
    try {
      axios
        .get(`/consumer/getallshops/${consumerId}`)
        .then((res) => {
          if (res) {
            setSellerArr(res.data.sellers);
            setSellerOrgArr(res.data.sellers);
          }
        })
        .catch((err) => {
          console.log("from then catch", err);
        });
    } catch (err) {
      console.log("from try catch", err);
    }
  }, [consumerId]);

  const search = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredDetails = sellerArr.filter((detail) =>
      detail.shopName.toLowerCase().includes(searchTerm)
    );
    setSellerArr(filteredDetails);
  };

  const clearSearch = () => {
    setSellerArr(sellerOrgArr); // reset to original list
  };

  return (
    <div className="shops">
      <div className="consumer-container">
        <section className="C-title">
          <h1>Your Shops</h1>
        </section>
        <section className="search-container">
          <article className="search-wrap">
            <input
              type="text"
              className="search-input"
              placeholder="search"
              onChange={search}
            />
            <div className="search-btn" onClick={clearSearch}>
              Clear
            </div>
          </article>
        </section>
        <section className="cname-container">
          {sellerArr.map((item, index) => (
            <div key={index} className="cname-wrapper">
              <div className="con-name">{item.shopName}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
