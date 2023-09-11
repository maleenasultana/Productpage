import React, { useState } from "react";
import "./Footer.css";
import data from "../Api.json";

function Footer() {
  const [tv, setTv] = useState("");

  return (
    <div className="search">
      
        <p>
          <h5 className="text-decoration-underline">Looking for more Info</h5>
        </p>
      
     <p className="m-3">
      <input className="form-control form-control-sm" type="text" placeholder="type vizio for options..." aria-label=".form-control-lg example" onChange={(e) => {
          setTv(e.target.value);
        }}></input></p>
      {/* <input
        className="input"
        type="text"
        placeholder="type vizio for options..."
        onChange={(e) => {
          setTv(e.target.value);
        }}
      /> */}



   <div className="data">
        {data
          .filter((item) => {
            if (tv === "") {
              return tv;
            } else if (item.title.toUpperCase().includes(tv.toUpperCase())) {
              return item;
            }
          })
          .map((val) => {
            return (
                <div>
              <div className="template" key={val.id}>
                <img src={val.image} alt="image" />
                <h6>{val.title}</h6>
                <p className="price">{val.price}</p>
              </div>
              </div>
            );
          })}
      </div>
    
      </div>
      
  );
}

export default Footer;
