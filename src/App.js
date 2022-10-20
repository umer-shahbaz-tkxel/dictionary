import "./App.css";
import { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import DictionaryListing from "./components/dictionary/DictionaryListing";
import AddNewWord from "./components/AddWord/AddNewWord";
import Loader from "./components/UI/Loader";

function App() {
  const [results, setResults] = useState([]);

  const searchResultHandler = (getResult) => {
    setResults(getResult);
  };

  const showloaderHandler = () => {
    
  }
  return (
    <Fragment>
      <Loader showLoader={showloaderHandler}/>
      <SearchBar setSearchResults={searchResultHandler} />
      <AddNewWord />
      <DictionaryListing result={results} />
    </Fragment>
  );
}

export default App;
