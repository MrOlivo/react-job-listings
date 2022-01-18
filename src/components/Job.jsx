import React from "react";
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

export default function Job({ job, setKeyword }) {
  const keywords = [job.role, job.level, ...job.languages, ...job.tools];

  const image = `${process.env.PUBLIC_URL} ${job.logo}`;

  return (
    <JobContainer featured={job.featured} size={job.featured ? "5" : "0"}>
      <Logo imagePath={image} alt={job.company} />
      <Information>
        <Company>
          <Name>{job.company}</Name>
          {job.new && <Badge>new!</Badge>}
          {job.featured && <Featured>featured</Featured>}
        </Company>
        <Position>{job.position}</Position>
        <Details
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
        />
      </Information>
      <KeywordsContainer
        setKeyword={setKeyword}
        keywords={keywords}
      ></KeywordsContainer>
    </JobContainer>
  );
}
