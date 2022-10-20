import "./App.css";
import { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import DictionaryListing from "./components/dictionary/DictionaryListing";

function App() {
  const [results, setResults] = useState([]);
  const searchResultHandler = (getResult) => {
    setResults(getResult);
  };
  return (
    <Fragment>
      <SearchBar setSearchResults={searchResultHandler} />
      <DictionaryListing result={results} />
    </Fragment>
  );
}

export default App;
