import React from "react";
import logo from "../images/manage.svg";
import Details from "./Details";
import KeywordsContainer from "./KeywordsContainer";
import {
  JobContainer,
  Logo,
  Company,
  Name,
  Badge,
  Featured,
  Position,
  Information,
} from "./JobStyles";

export default function Job({ data, setKeyword }) {
  const keywords = [data.role, data.level, ...data.languages, ...data.tools];

  return (
    <JobContainer featured={data.featured} size={data.featured ? "5" : "0"}>
      <Logo>
        <img src={logo} alt={data.company + " logo"}></img>
      </Logo>
      <Information>
        <Company>
          <Name>{data.company}</Name>
          {data.new && <Badge>new!</Badge>}
          {data.featured && <Featured>featured</Featured>}
        </Company>
        <Position>{data.position}</Position>
        <Details
          postedAt={data.postedAt}
          contract={data.contract}
          location={data.location}
        />
      </Information>
      <KeywordsContainer
        setKeyword={setKeyword}
        keywords={keywords}
      ></KeywordsContainer>
    </JobContainer>
  );
}
