import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import { useState, useRef } from "react";

const AddNewWord = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const addNewKeyword = useRef();

  const AddNewWordAPI = async (enteredWord) => {
    const response = await fetch(
      "https://test-dictionary-app.herokuapp.com/api/v1/dictionaries/add",
      {
        method: "POST",
        headers: {
          "cache-control": "no-cach",
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          word: enteredWord,
        }),
      }
    )
      .then((response) => response.json())
      .then((response) => console.log(response));

    // console.log(response);

    // setSearchResult(response || []);
    // props.setSearchResults(searchResult);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log("entered");
    let enteredWord = addNewKeyword.current.value;
    if (enteredWord.trim().length > 0) {
      AddNewWordAPI(enteredWord);
    }
  };

  return (
    <Container>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add New Word
      </Button>

      <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formSubmitHandler}>
            <input type="text" ref={addNewKeyword}></input>
            <Button type="submit">Add</Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddNewWord;
