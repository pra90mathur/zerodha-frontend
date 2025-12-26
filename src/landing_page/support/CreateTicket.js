import React from "react";

function CreateTicket() {
  return (
    <div className="container p-5">
      <h1 className="text-center fs-2 mb-5">
        To create a ticket, select a relevant topic
      </h1>
      <div className="row mb-5">
        <div className="col-4">
          <h3 className="mb-4">
            {" "}
            <i class="fa-solid fa-circle-plus"></i>&nbsp;Account Opening
          </h3>
          <ul>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Resident individual</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Minor</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Non Resident Indian (NRI)</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Company, Partnership, HUF and LLP</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Glossary</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h3 className="text-center mb-4">
            <i class="fa-solid fa-user"></i>&nbsp;Your Zerodha Account
          </h3>
          <ul>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Your Profile</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Account modification</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>
                Client Master Report (CMR) and Depository Participant (DP)
              </li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Nomination</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Transfer and conversion of securities</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h3 className="mb-4">
            <i class="fa-solid fa-chart-column"></i>&nbsp;Kite
          </h3>
          <ul>
            <a href="" style={{ textDecoration: "none" }}>
              <li>IPO</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Trading FAQs</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Margin Trading Facility (MTF) and Margins</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Charts and orders</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Alerts and Nudges</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>General</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <h3 className="mb-4">
            <i class="fa-solid fa-square-poll-horizontal"></i> Funds
          </h3>
          <ul>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Add money</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Withdraw money</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Add bank accounts</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>eMandates</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h3 className="mb-4">
            <i class="fa-solid fa-cent-sign"></i> Console
          </h3>
          <ul>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Portfolio</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Corporate actions</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Funds statement</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Reports</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Profile</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Segments</li>
            </a>
          </ul>
        </div>
        <div className="col-4">
          <h3 className="mb-4">
            <i class="fa-regular fa-circle"></i> Coin
          </h3>
          <ul>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Mutual funds</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>National Pension Scheme (NPS)</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Features on Coin</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>Payments and Orders</li>
            </a>
            <a href="" style={{ textDecoration: "none" }}>
              <li>General</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
