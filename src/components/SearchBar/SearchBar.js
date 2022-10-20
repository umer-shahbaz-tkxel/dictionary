import React, { useState, useRef, useEffect } from "react";
import styles from "./SearchBar.module.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const SearchBar = (props) => {
  const enterKeyword = useRef();
  const [searchResult, setSearchResult] = useState([]);

  const getSearchResult = async (searchKeyword) => {
    const response = await fetch(
      "https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/search?word=" +
        searchKeyword
    ).then((response) => response.json());
    setSearchResult(response || []);
    props.setSearchResults(searchResult);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    let searchKeyword = enterKeyword.current.value;
    if (searchKeyword.trim().length > 0) {
      getSearchResult(searchKeyword);
    }
  };

  return (
    <Container>
      <form onSubmit={formSubmitHandler}>
        <div className={styles.searchBar}>
          <div className={styles.searchBarWrapper}>
            <input
              type="text"
              className={styles.formControl}
              placeholder="Type a word"
              ref={enterKeyword}
            />
          </div>
        </div>
        <Button type="submit">Search</Button>
      </form>
    </Container>
  );
};
export default SearchBar;
