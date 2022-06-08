import React from "react";
import Wrapper from "../assets/wrappers/ErrorPage";
import { Link } from "react-router-dom";
import errorImg from "../assets/images/not-found.svg";

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImg} alt="not found" />
        <h3>Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
