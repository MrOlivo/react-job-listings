import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Job from "./Job";

const List = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

export default function JobList({ data, setKeyword, keywords }) {
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    ((allJobs) => {
      if (keywords.length > 0) {
        let filteredJobs = allJobs.filter((job) => {
          return keywords.every((word) => {
            return (
              job.role === word ||
              job.level === word ||
              job.languages.includes(word) ||
              job.tools.includes(word)
            );
          });
        });
        setFilteredJobs(filteredJobs);
      } else {
        setFilteredJobs(allJobs);
      }
    })(data);
  }, [keywords, data]);

  return (
    <List role="main">
      {filteredJobs.map((job) => (
        <Job key={job.id} job={job} setKeyword={setKeyword}></Job>
      ))}
    </List>
  );
}
