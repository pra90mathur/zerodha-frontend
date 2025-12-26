import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState(5);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu-selected";

  return (
    <nav
      class="navbar fixed-top navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#fff" }}
    >
      <div class="container p-2">
        <div className="col-3">
          <Link class="navbar-brand" to={"/"}>
            <img
              src="media/Images/logo.svg"
              alt="logo"
              style={{ width: "55%" }}
            ></img>
          </Link>
        </div>
        <div className="col-3"></div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul class="navbar-nav me-auto mb-lg-0">
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  aria-current="page"
                  to={"/signup"}
                  onClick={() => handleMenuClick(0)}
                >
                  <p
                    className={selectedMenu == 0 ? activeMenuClass : menuClass}
                  >
                    Signup
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  to={"/about"}
                  onClick={() => handleMenuClick(1)}
                >
                  <p
                    className={selectedMenu == 1 ? activeMenuClass : menuClass}
                  >
                    About
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  to={"/product"}
                  onClick={() => handleMenuClick(2)}
                >
                  <p
                    className={selectedMenu == 2 ? activeMenuClass : menuClass}
                  >
                    Product
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  to={"/pricing"}
                  onClick={() => handleMenuClick(3)}
                >
                  <p
                    className={selectedMenu == 3 ? activeMenuClass : menuClass}
                  >
                    Pricing
                  </p>
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-muted"
                  to={"/support"}
                  onClick={() => handleMenuClick(4)}
                >
                  <p
                    className={selectedMenu == 4 ? activeMenuClass : menuClass}
                  >
                    Support
                  </p>
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
