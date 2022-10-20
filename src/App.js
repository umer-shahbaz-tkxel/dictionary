import "./App.css";
import { Fragment, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import DictionaryListing from "./components/dictionary/DictionaryListing";
import AddNewWord from "./components/AddWord/AddNewWord";
import Loader from "./components/UI/Loader";

function App() {
  const [results, setResults] = useState([]);
  const [isLoader, setIsLoader] = useState(true);

  const searchResultHandler = (getResult) => {
    setResults(getResult);
  };

  const hideLoaderHandler = () => {
    setIsLoader(false);
  };
  const showLoaderHandler = () => {
    setIsLoader(true);
  };
  return (
    <Fragment>
      <Loader showLoader={isLoader} />
      <SearchBar
        setSearchResults={searchResultHandler}
        onHide={hideLoaderHandler}
        onShow={showLoaderHandler}
      />
      <AddNewWord onHide={hideLoaderHandler} onShow={showLoaderHandler} />
      <DictionaryListing
        result={results}
        onHide={hideLoaderHandler}
        onShow={showLoaderHandler}
      />
    </Fragment>
  );
}

export default App;
