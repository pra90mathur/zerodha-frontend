import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5 mt-5">
      <div className="row text-center">
        <img src="media/Images/homeHero.png" alt="Hero" className="mb-5"></img>
        <h1 className="mt-5">Invest in Everythig</h1>
        <p className="mt-2 text-muted">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
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

export default Hero;
