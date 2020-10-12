import React from "react";
import Header from "./header";
import Intro from "./intro";
import "../../App.css";
import styled from "@emotion/styled";
import img from "../../img/header-bg.jpg";

const WrapperHeader = () => {
  const Wrapper = styled.div`
    background: url(${img}) no-repeat;
    height: 700px;
  `;

  return (
    <Wrapper>
      <Header />
      <Intro />
    </Wrapper>
  );
};

export default WrapperHeader;
