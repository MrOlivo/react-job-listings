import { useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import JobList from "./components/JobList";
import data from "./data.json";

function App() {
  const [filterKeywords, setFilterKeywords] = useState([]);

  const addFilterKeyword = (word) => {
    if (!filterKeywords.includes(word)) {
      setFilterKeywords([...filterKeywords, word]);
    }
  };

  const removeKeyword = (wordToDelete) => {
    const filteredKeywords = filterKeywords.filter(
      (word) => word !== wordToDelete
    );
    setFilterKeywords(filteredKeywords);
  };

  const removeAllKeywords = () => setFilterKeywords([]);

  return (
    <>
      <Header></Header>
      {filterKeywords.length > 0 && (
        <Filters
          keywords={filterKeywords}
          removeKeyword={removeKeyword}
          removeAll={removeAllKeywords}
        ></Filters>
      )}
      <JobList
        data={data}
        keywords={filterKeywords}
        setKeyword={addFilterKeyword}
      ></JobList>
    </>
  );
}

export default App;
