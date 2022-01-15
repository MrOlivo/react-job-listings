import React from "react";
import styled from "styled-components";
import { COLOR_SCHEME } from "../colors";
import HeaderImg from "../images/bg-header-desktop.svg";

const HeaderEl = styled.header`
  width: 100%;
  height: 10rem;
  background-image: url(${HeaderImg});
  background-color: ${COLOR_SCHEME.PRIMARY};
`;

export default function Header() {
  return <HeaderEl></HeaderEl>;
}
