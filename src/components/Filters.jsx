import React from "react";
import styled from "styled-components";
import { BOX_SHADOW, COLOR_SCHEME } from "../colors";
import removeIcon from "../images/icon-remove.svg";

export default function Filters({ keywords, removeKeyword, removeAll }) {
  return (
    <HeaderContainer>
      <Container>
        <FilterList>
          {keywords.map((word, id) => (
            <Elements key={id}>
              {word}
              <Close onClick={() => removeKeyword(word)}>
                <img src={removeIcon} alt="" />
              </Close>
            </Elements>
          ))}
        </FilterList>
        <ClearAll onClick={() => removeAll()}>Clear</ClearAll>
      </Container>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: calc(2vw + -4rem);
`;

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  background-color: white;
  box-shadow: ${BOX_SHADOW.PRIMARY_COLOR};
  border-radius: 5px;
  margin-bottom: -2rem;
  padding: 1.5rem 2rem;
  width: 70vw;

  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Elements = styled.li`
  list-style: none;
  background-color: ${COLOR_SCHEME.SECONDARY};
  color: ${COLOR_SCHEME.PRIMARY};
  font-weight: 700;
  margin: 0 0.5rem;
  padding: 0 0 0 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.825rem;
    margin-bottom: 0.5rem;
  }
`;

const Close = styled.button`
  background-color: ${COLOR_SCHEME.PRIMARY};
  border: none;
  border-radius: 0 5px 5px 0;
  margin-left: 0.5rem;
  cursor: pointer;
  transition: all 0.4s;

  & > img {
    padding: 0.5rem;
  }

  &:hover {
    background-color: ${COLOR_SCHEME.SECONDARY_DARKEST};
  }
`;

const ClearAll = styled.a`
  color: ${COLOR_SCHEME.SECONDARY_DARKEST};
  text-decoration: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    color: ${COLOR_SCHEME.PRIMARY};
  }
`;
