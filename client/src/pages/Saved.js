import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import API from "../utils/API";

function Saved() {
    const [books, setBooks] = useState([])
    
  
    useEffect(() => {
      loadSaves()
    }, [])
  
    function loadSaves() {
      API.getSaved()
        .then(res => {
          console.log(res.data);
          setBooks(res.data)
        })
        .catch(err => console.log(err));
    };
  
    function deleteBook(id) {
      API.deleteBook(id)
        .then(res => loadSaves())
        .catch(err => console.log(err));
    }

    return (
        <Container fluid>
            <Row>
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
  
  


export default Saved;
