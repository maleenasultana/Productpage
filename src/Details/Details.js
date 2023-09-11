import React from "react";
import "./Details.css";

function Details() {
  return (
    <>
      <div className="container">
        <p className="query">
            <h3 className="specs">Specification:</h3>
          <h6>
            Screen Size: <span className="out">28 Inches</span>
          </h6>
        </p>
        <p className="query">
          <h6>
            Supported Internet services:{" "}
            <span className="out">
              Netflix, Alexa, Amazon Video, Hotstar, Youtube
            </span>
          </h6>
        </p>
        <p className="query">
          <h6>
            Display: <span className="out">LED</span>
          </h6>
        </p>
        <p className="query">
          <h6>
            Product Dimensions:{" "}
            <span className="out">8.3D x 71.6W x 42.4H centimeters</span>
          </h6>
        </p>
        <p className="query">
          <h6>
            Resolution: <span className="out">720p</span>
          </h6>
        </p>
        <p className="query">
          <h6>
            Refresh Rate: <span className="out">60Hz</span>
          </h6>
        </p>
        <p className="query">
          <h6>
            Special Feature: <span className="out">Flat</span>
          </h6>
        </p>
        <p className="query">
          <h6>
            Components:{" "}
            <span className="out">Control, 4 screws, 2 x AAA Batteries</span>
          </h6>
        </p>
      </div>
      <div className="About">
        <h6 className="about1">About This Item</h6>
        <p className="para">
          {" "}
          °Resolution: HD Ready (1366x768) | Refresh Rate: 60 hertz | 178 wide<br/>
          viewing angle<br/>
           °Connectivity: Dual Band Wi-Fi (2.4 GHz/ 5 GHz) | 2 HDMI<br/>
          ports to connect set top box, gaming consoles, DVD or Blu-ray Players<br/>
          | 2 USB ports to connect hard drives and other USB devices | ARC |<br/>
          Bluetooth 5.0 | Ethernet | 3.5mm earphone °Jack Sound: 20 Watts Output<br/>
          °| Dolby Audio | DTS Virtual: X | °DTS-HD Display: Metal bezel-less<br/>
          Screen | Vivid Picture Engine ° Recommendation: We recommend using 1.5V<br/>
          Alkaline AAA Batteries in your Alexa Voice Remote for a steady<br/>
          performance.° Smart TV Features : Fire TV Built-In |° Supported Apps:<br/>
          Prime Video | Netflix | Disney+ Hotstar | YouTube | 12000+ apps from<br/>
          App Store | Voice Remote with Alexa | DTH Set-Top Box Integration to<br/>
          switch between DTH TV Channels and OTT apps from home screen | Display<br/>
          Mirroring - Airplay & Miracast | Quad core ARM Cortex-A35 CPU @ 2.0GHz<br/>
          | 1GB RAM + 8GB Internal Storage
        </p>
      </div>
    </>
  );
}

export default Details;
