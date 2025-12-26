import React from "react";

function RightSection({
  ImageURL,
  productName,
  productDescription,
  productLink,
}) {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-4 p-5 mt-5">
          <h1 className="fs-2 mb-4">{productName}</h1>
          <p className="text-muted mb-4">{productDescription}</p>
          <a href="" style={{ textDecoration: "none" }}>
            {productLink} &nbsp; <i class="fa-solid fa-right-long"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <img src={ImageURL} alt="Product"></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
