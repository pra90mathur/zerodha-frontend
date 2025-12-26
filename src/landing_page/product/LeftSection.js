import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row p-5">
        <div className="col-8">
          <img src={imageURL} alt="Kite"></img>
        </div>
        <div className="col-4 p-4 mt-5">
          <h1 className="fs-2 mb-2">{productName}</h1>
          <p className="text-muted mt-4">{productDescription}</p>
          <div className="mb-4">
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo&nbsp; <i class="fa-solid fa-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ textDecoration: "none", marginLeft: "20%" }}
            >
              Lean More&nbsp; <i class="fa-solid fa-right-long"></i>
            </a>
          </div>
          <a href={googlePlay}>
            <img src="media/Images/googlePlayBadge.svg"></img>
          </a>
          <a href={appStore} style={{ marginLeft: "5%" }}>
            <img src="media/Images/appstoreBadge.svg"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
