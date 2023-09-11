import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="container">
      <div className="row">
        <div>
          <img src="../../\images\cart.png" alt="cart" className="cart" />
        </div>
       
        <div className="col-5">
          <h1 className="typo">28 Inch VIZIO Smart TV</h1>
          <div>
            <img src="../../\images\imageTv.png" alt="" className="tv" />
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-3">
          <h2>
            28 Inch VIZIO Smart TV - Full HD 1080p
          </h2>
         
          <span className="price">price: </span>
          <span className="cost">$200</span><br/>
          <span className="shipping"> + $30 shipping</span>
         
          <span className="stars">
            <img src="../../\images\stars.png" alt="" />
          </span>
          <p><h5>
            With Bluetooth Headphone<br/>
            Capable, AMD FreeSync & Alexa <br/>
            Compatibility, D28fM=K01, 2023<br/>
            Model
            </h5></p>
          <div className="buton">
          <p>  
            
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="button"
              autocomplete="off"
            >
              Add to Cart
            </button>
          </p>
          <p>
          
            <button
              type="button"
              className="btn btn-warning"
              data-bs-toggle="button"
              autocomplete="off"
            >
              Buy Now
            </button>
            
          </p>
          </div>
          <p className="options">
            Payment Options : 
            <img src="../../\images\payment.png" alt="" className="payment" />
                  
          </p>
        </div>
        </div>
      </div>
  );
}

export default Hero;
