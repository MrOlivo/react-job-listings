import styled from "styled-components";

import { COLOR_SCHEME } from "../colors";

export const Logo = styled.img.attrs((props) => ({
  src: props.imagePath,
  alt: props.alt,
}))`
  display: flex;
  align-items: center;
  padding-right: 1.5rem;
  @media (max-width: 768px) {
    position: absolute;
    top: -2rem;
    width: 4rem;
    height: auto;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-grow: 0;
    padding: 1.3rem 0;
  }
`;

export const Company = styled.div`
  font-weight: 700;
`;

export const Name = styled.span`
  color: ${COLOR_SCHEME.PRIMARY};
  margin-right: 0.8rem;
`;

export const Badge = styled.span`
  color: ${COLOR_SCHEME.SECONDARY};
  background-color: ${COLOR_SCHEME.PRIMARY};
  border-radius: 1rem;
  padding: 0.4rem;
  text-transform: uppercase;
  margin-right: 0.8rem;
`;

export const Featured = styled(Badge)`
  background-color: ${COLOR_SCHEME.SECONDARY_DARKEST};
`;

export const Position = styled.div`
  font-weight: 700;
  display: inline-block;
  padding: 0.7rem 0;

  &:hover {
    color: ${COLOR_SCHEME.PRIMARY};
  }
`;
