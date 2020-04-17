import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import DeleteBtn from "../components/DeleteBtn";


function Home() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    console.log(formObject)
    API.getBooks(formObject.search )
      .then(res => {
        console.log(res.data);
        setBooks(res.data)
      })
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormObject({...formObject, [name]: value})
    console.log(formObject)
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search.length) {
      loadBooks();
      // API.saveBook({
      //   title: formObject.title,
      //   author: formObject.author,
      //   synopsis: formObject.synopsis
      // })
      //   .then(res => loadBooks())
      //   .catch(err => console.log(err));
    }
  };

    return (
      <Container fluid>
        
        <Row>
          <Col size="md-12">
          <form className="form-inline">
                        <input 
                        className="form-control mr-sm-2" 
                        type="search" 
                        name="search"
                     
                        placeholder="Search" 
                        aria-label="Search" />
                        <button 
                        className="btn btn-outline-success my-2 my-sm-0" 
                        
                        type="submit"
                        onClick={loadBooks()}>Search</button>
                    </form>
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            
            <form>
              {/* <Input
                onChange={handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                onChange={handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                onChange={handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              /> */}
              
              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                Save Book
              </FormBtn>

              <br />

              <FormBtn
                disabled={!(formObject.author && formObject.title)}
                onClick={handleFormSubmit}
              >
                View Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            {books.length ? (
              <List>
                {books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Home;
