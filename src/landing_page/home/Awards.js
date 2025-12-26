import React from "react";

function Awards() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/Images/largestBroker.svg" alt=""></img>
        </div>
        <div className="col-6 mt-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5 text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>
          <div className="row mb-4">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity Derivates</p>
                </li>
                <li>
                  <p>Currency Derivatives</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct Mutual Funds</p>
                </li>
                <li>
                  <p>Bonds and Gvt. Securities</p>
                </li>
              </ul>
            </div>
          </div>

          <img
            src="media/Images/pressLogos.png"
            style={{ width: "99%" }}
            alt="Press Logo"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
