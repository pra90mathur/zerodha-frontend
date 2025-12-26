import React from "react";

function Pricing() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-4">Unbeatable Pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="/" style={{ textDecoration: "none" }}>
            See pricing &nbsp; <i class="fa-solid fa-right-long"></i>
          </a>
        </div>

        <div
          className="col-6 p-5"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          <div className="col-2">
            <img
              src="media/Images/zero-fees.svg"
              alt="Zero-fees"
              style={{ width: "150%" }}
            ></img>
            <p className="text-muted text-end" style={{ fontSize: "10px" }}>
              Free Account Opening
            </p>
          </div>
          <div className="col-2">
            <img
              src="media/Images/zero-fees.svg"
              alt="Zero-fees"
              style={{ width: "150%" }}
            ></img>
            <p className="text-muted text-end" style={{ fontSize: "10px" }}>
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="col-2">
            <img
              src="media/Images/intraday-fee.svg"
              alt="Intraday-fees"
              style={{ width: "150%" }}
            ></img>
            <p className="text-muted text-end" style={{ fontSize: "10px" }}>
              Free equity delivery and direct mutual funds
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
