import React, { useState } from "react";
import styles from "./WordCard.module.css";
import Col from "react-bootstrap/Col";

const WordCard = (props) => {
  const [removeWord, setremoveWord] = useState();

  const removeKeywordDictionary = async (removeWord) => {
    const response = await fetch(
      "https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/remove",
      {
        method: "DELETE",
        headers: {
          "cache-control": "no-cach",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          "word": removeWord,
        }),
      }
    ).then((response) => response.json())
    .then((response) => console.log(response));

    // console.log(response);

    // setSearchResult(response || []);
    // props.setSearchResults(searchResult);
  };

  const removeWordHandler = (event) => {
    setremoveWord(event.currentTarget.dataset.word);
    if (removeWord) {
      removeKeywordDictionary(removeWord);
    }
  };

  return (
    <Col md={2} key={props.dictionaryWord}>
      <div className={styles.singleWord}>
        {props.dictionaryWord}
        <div
          className={styles.removeWord}
          onClick={removeWordHandler}
          data-word={props.dictionaryWord}
        >
          <span>✕</span>
        </div>
      </div>
    </Col>
  );
};

export default WordCard;
