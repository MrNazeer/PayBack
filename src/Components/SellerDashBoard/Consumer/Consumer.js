import React from "react";
import "./Style/ConStyle.scss";
import { FaUserEdit } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

export function Consumer() {
  return (
    <div className="seller-Consumer ">
      <div className="consumer-container">
        <section className="C-title">
          <h1>Your Consumers</h1>
        </section>
        <section className="search-container">
          <article className="search-wrap">
            <input
              type="text"
              className="con-search-input"
              placeholder="search"
            />
          </article>
        </section>

        <section className="cname-container">
          <section className="seller-consumer-lable">
            <div>Consumer Name</div>
            <div className="seller-consumer-lable-left">
              <div>Transaction Limit</div>
              <div>Reset Transaction</div>
            </div>
          </section>

          <div className="cname-wrapper">
            <div className="con-name">venkatesh mani</div>
            <div className="con-icon-cont">
              <div className="con-reset">
                <div className="con-trans-limit">5000</div>
                <FaUserEdit className="edit" />
              </div>
              <div className="con-delete">
                <BiRepost className="con-it-reset" />
              </div>
            </div>
          </div>

          <div className="cname-wrapper">
            <div className="con-name">Ravi</div>
            <div className="con-icon-cont">
              <div className="con-reset">
                <div className="con-trans-limit">6000</div>
                <FaUserEdit className="edit" />
              </div>
              <div className="con-delete">
                <BiRepost className="con-it-reset" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
