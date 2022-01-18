import React from "react";
import styled from "styled-components";
import { COLOR_SCHEME } from "../colors";

const DesktopImg = `${process.env.PUBLIC_URL}/images/bg-header-desktop.svg`;
const MobileImg = `${process.env.PUBLIC_URL}/images/bg-header-mobile.svg`;

const HeaderEl = styled.header`
  width: 100%;
  height: 10rem;
  background-image: url(${DesktopImg});
  background-color: ${COLOR_SCHEME.PRIMARY};

  @media (max-width: 375px) {
    background-image: url(${MobileImg});
  }
`;

export default function Header() {
  return <HeaderEl></HeaderEl>;
}
