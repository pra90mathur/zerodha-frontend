import React from "react";

function Hero() {
  return (
    <section className="container-fluid p-5" id="supportHero">
      <div className="pt-5 mt-4" id="supportWrapper">
        <h3>Support Portal</h3>
        <a href="" style={{ color: "white" }}>
          Track ticket
        </a>
      </div>
      <div className="row p-5 ms-5">
        <div className="col ms-5">
          <h1 className="fs-3">
            Search for an answer or browser help topics to create a ticket
          </h1>
          <input
            className="mt-4 mb-3"
            placeholder="Eg: how do i activate F&O, why is my order getting rejected."
            style={{
              width: "90%",
              padding: "15px",
              borderRadius: "10px",
              borderWidth: "1px",
            }}
          />
          <br></br>
          <a href="" style={{ color: "white" }}>
            Track account opening
          </a>{" "}
          &nbsp;&nbsp;&nbsp;
          <a href="" style={{ color: "white" }}>
            Track segement activation
          </a>{" "}
          &nbsp;&nbsp;&nbsp;
          <a href="" style={{ color: "white" }}>
            Intraday margins
          </a>
          <br></br>
          <a href="" style={{ color: "white" }}>
            Kite user manual
          </a>
        </div>
        <div className="col ms-4">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{ color: "white" }}>
                Current takeovers and delisting
              </a>
            </li>
            <li>
              <a href="" style={{ color: "white" }}>
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
