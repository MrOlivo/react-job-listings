import React from "react";
import styled from "styled-components";
import { COLOR_SCHEME } from "../colors";

export default function Details({ postedAt, contract, location }) {
  return (
    <Container>
      <span>{postedAt}</span>
      <span>&nbsp;&bull;&nbsp;</span>
      <span>{contract}</span>
      <span>&nbsp;&bull;&nbsp;</span>
      <span>{location}</span>
    </Container>
  );
}

const Container = styled.div`
  color: ${COLOR_SCHEME.SECONDARY_DARKER};
`;
