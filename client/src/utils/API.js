import axios from "axios";

//Front end api routes
export default {
  // Gets all books
  getBooks: function(search) {
    console.log("https://www.googleapis.com/books/v1/volumes?q="+search)
    return axios.get("https://www.googleapis.com/books/v1/volumes?q="+search);
  },
  getSaved: function() {
    return axios.get("/api/books/");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
