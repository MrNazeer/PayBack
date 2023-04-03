import React from "react";
import "./Style/ConStyle.scss";
import { FaUserEdit } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

export function Consumer() {
  return (
    <div className="Consumer">
      <div className="consumer-container">
        <section className="C-title">
          <h1>Your Consumers</h1>
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
            <div className="con-icon-cont">
              <div className="con-reset">
                <FaUserEdit  className="edit"/>                
              </div>
              <div className="con-delete">
                <BiRepost className="con-it-reset"/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
