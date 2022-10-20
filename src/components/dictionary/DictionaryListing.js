import React, { useEffect, useState } from "react";
import styles from "./DictionaryListing.module.css";
import Container from "react-bootstrap/Container";
import axios from "axios";
import Row from "react-bootstrap/Row";
import WordCard from "./WordCard";

const DictionaryListing = (props) => {
  const [allWords, setAllWords] = useState([]);
  console.log(props.result)
  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://test-dictionary-app.herokuapp.com/api/v1/dictionaries"
    ).then((response) => response.json());

    setAllWords(response || []);
    props.onHide();
  };

  useEffect(() => {
    getApiData();
  }, []);
  let renderedHTML = "";
  if (props.result.data) {
    renderedHTML =
    props.result.data &&
    props.result.data.map((word) => (
      <WordCard dictionaryWord={word}/>
      ));
  } else {
    renderedHTML =
      allWords.data &&
      allWords.data.map((word) => (
        <WordCard dictionaryWord={word}/>
      ));
  }
  // const [dictionary, setdictionary] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://test-dictionary-app.herokuapp.com/api/v1/dictionaries")
  //     .then((response) => response.json())
  //     .then((response) => {
  //       setdictionary(response);
  //     })
  //     .catch((error) => console.error("errorMessage", error));
  //   console.log(dictionary);
  // }, []);
  // React.useEffect(() => {
  //   console.log("working....");
  //   // const requestOptions = {

  //   // };

  // }, []);

  //   useEffect(() => {
  //     const url = "https://test-dictionary-app.herokuapp.com/api/v1/dictionaries";
  // const requestOptions = {
  //   method: "GET",
  //   mode:"no-cors",
  //   headers: {
  //     'Content-Type': "application/json",
  //     "Access-Control-Allow-Headers": "Content-Type",
  //     "Access-Control-Allow-Origin": "*"
  //   }
  //     };
  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(url, requestOptions);
  //         // const data = await response.json();
  //         console.log(response.text());
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };

  //     fetchData();
  // }, []);

  return (
    <Container>
      <Row>{renderedHTML}</Row>
    </Container>
  );
};

export default DictionaryListing;
