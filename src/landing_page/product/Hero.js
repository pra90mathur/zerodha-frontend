import React from "react";

function Hero() {
  return (
    <div className="container p-5">
      <div className="row mt-5 p-5 text-center">
        <h1 className="fs-2">Zerodha Products</h1>
        <h3 className="fs-5 text-muted mt-3">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="text-muted mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings &nbsp; <i class="fa-solid fa-right-long"></i>
          </a>
        </p>
      </div>
      <hr></hr>
    </div>
  );
}

export default Hero;
