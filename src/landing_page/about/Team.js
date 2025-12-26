import React from "react";

function Team() {
  return (
    <div className="contianer px-5" style={{ marginTop: "-4rem" }}>
      <div className="row ">
        <h1 className="fs-3 text-center">People</h1>
      </div>
      <div
        className="row px-5 mt-2"
        style={{ lineHeight: "1.8", fontSize: "1rem" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/Images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "65%" }}
          ></img>
          <h4 className="text-muted mt-3">Nithin Kamath</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p className="text-muted mb-2 mt-5">
            Nithin Kamath Founder, CEO Nithin bootstrapped and founded Zerodha
            in 2010 to overcome the hurdles he faced during his decade long
            stint as a trader. Today, Zerodha has changed the landscape of the
            Indian broking industry.
          </p>
          <p className="text-muted mb-2">
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p className="text-muted mt-4">
            Playing basketball is his zen. <br></br> Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
