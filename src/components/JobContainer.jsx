import React from "react";
import styled from "styled-components";
import { BOX_SHADOW } from "../colors";

export default function JobContainer({ children, isFeatured }) {
  let size = isFeatured ? "5" : "0";

  const Container = styled.div`
    width: 70vw;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    border-radius: 5px;
    border-left: ${size}px solid rgb(90, 164, 164);
    margin: 1.3rem 0;
    position: relative;
    box-shadow: ${BOX_SHADOW.PRIMARY_COLOR};

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      width: 75vw;
      padding-bottom: 1rem;
      margin-bottom: 2rem;
    }
  `;

  return <Container>{children}</Container>;
}
