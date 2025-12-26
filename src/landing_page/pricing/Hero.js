import React from "react";

function Hero() {
  return (
    <div className="conatainer px-5 pt-5">
      <div className="row p-5">
        <h1 className="fs-2 text-center mt-5">Charges</h1>
        <h4 className="fs-4 text-center text-muted">
          List of all charges and taxes
        </h4>
      </div>
      <div className="row p-5">
        <div className="col-4 text-center">
          <img src="media/Images/pricing0.svg" style={{ width: "70%" }}></img>
          <h3>Free equity delivery</h3>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img
            src="media/Images/intradayTrades.svg"
            style={{ width: "70%" }}
          ></img>
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/Images/pricing0.svg" style={{ width: "70%" }}></img>
          <h3>Free direct MF</h3>
          <p className="text-muted mt-4">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
