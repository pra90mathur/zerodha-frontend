import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mt-5">The Zerodha Universe</h1>
      <p className="text-muted text-center mt-3">
        Extend your trading and investment experience even further with our
        partner platforms
      </p>
      <div className="row p-5 text-center">
        <div className="col-4">
          <div className="mb-5">
            <img
              src="media/Images/zerodhaFundhouse.png"
              alt="universe"
              style={{ width: "60%" }}
            ></img>
            <p
              className="text-muted text-center mt-3"
              style={{ fontSize: "12px" }}
            >
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>
          <div className="">
            <img
              src="media/Images/streakLogo.png"
              alt="universe"
              style={{ width: "60%" }}
            ></img>
            <p className="text-muted  mt-3" style={{ fontSize: "12px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col-4">
          <div className="mb-5">
            <img
              src="media/Images/sensibullLogo.svg"
              alt="universe"
              style={{ width: "60%" }}
            ></img>
            <p className="text-muted  mt-3" style={{ fontSize: "12px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="">
            <img
              src="media/Images/smallcaseLogo.png"
              alt="universe"
              style={{ width: "60%" }}
            ></img>
            <p className="text-muted  mt-3" style={{ fontSize: "12px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className=" col-4">
          <div className="mb-5">
            <img
              src="media/Images/tijori.svg"
              alt="universe"
              style={{ width: "60%" }}
            ></img>
            <p className="text-muted  mt-3" style={{ fontSize: "12px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
          <div className="">
            <img
              src="media/Images/dittoLogo.png"
              alt="universe"
              style={{ width: "50%" }}
            ></img>
            <p className="text-muted  mt-3" style={{ fontSize: "12px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
      <div className="row text-center">
        <button
          style={{ width: "20%", margin: "0 auto" }}
          className="p-2 btn btn-primary fs-5 mt-3"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
