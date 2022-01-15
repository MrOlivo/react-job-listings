import React from "react";
import logo from "../images/manage.svg";
import {
  JobContainer,
  Logo,
  Company,
  Name,
  Badge,
  Featured,
  Position,
  Information,
  Details,
  KeywordsContainer,
  Keyword,
} from "./JobStyles";

export default function Job({ data, setKeyword }) {
  // const [icon, setIcon] = useState("");

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
        <Details>
          <span>{data.postedAt}</span>
          <span>&nbsp;&bull;&nbsp;</span>
          <span>{data.contract}</span>
          <span>&nbsp;&bull;&nbsp;</span>
          <span>{data.location}</span>
        </Details>
      </Information>
      <KeywordsContainer>
        {keywords.map((word, id) => {
          return (
            <Keyword key={id} onClick={() => setKeyword(word)}>
              {word}
            </Keyword>
          );
        })}
      </KeywordsContainer>
    </JobContainer>
  );
}
