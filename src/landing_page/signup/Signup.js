import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitted");
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = `${process.env.REACT_APP_DASHBOARD_URL}/signup`;
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row mt-5 p-5 text-center">
        <h1 className="mt-5 fs-2">
          Open a free demat and trading account online
        </h1>
        <h5 className="mt-3 fs-5 text-muted">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h5>
      </div>
      <div className="row mt-4 p-5">
        <div className="col-6">
          <img src="media/Images/info.svg"></img>
        </div>
        <div className="col-6">
          <h3 className="fs-3">Signup now</h3>
          <p className="text-muted">Or track your existing application</p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="email">Username</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter your username"
                onChange={handleOnChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <br></br>
          <div className="text-center">
            <h5>
              Already have an account? <Link to={"/login"}>Login</Link>
            </h5>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default Signup;
