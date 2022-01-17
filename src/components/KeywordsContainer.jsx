import React from "react";
import styled from "styled-components";
import { COLOR_SCHEME } from "../colors";

export default function KeywordsContainer({ keywords, setKeyword }) {
  return (
    <Container>
      {keywords.map((word, id) => {
        return (
          <Keyword key={id} onClick={() => setKeyword(word)}>
            {word}
          </Keyword>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    border-top: 1px solid ${COLOR_SCHEME.SECONDARY_DARKER};
    width: 100%;
    padding-top: 1rem;
    justify-content: flex-start;
  }
`;

const Keyword = styled.span`
  background-color: ${COLOR_SCHEME.SECONDARY};
  color: ${COLOR_SCHEME.PRIMARY};
  font-weight: 700;
  padding: 0.5rem;
  margin: 0.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.4s;

  &:not(:nth-last-child()) {
    margin-right: 1rem;
  }
  &:hover {
    color: white;
    background-color: ${COLOR_SCHEME.PRIMARY};
  }
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
