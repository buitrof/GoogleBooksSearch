import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import Search from './components/Search'
import Results from './components/Results'
import axios from 'axios';
import Book from './utils/Book';
import BookContext from './utils/BookContext';

function App() {

  const [bookState, setBookState] = useState({
    userBooks: [],
    input: '',
    searchBooks: []
  })

  bookState.handleInputChange = event => {
    setBookState({ ...bookState, [event.target.name]: event.target.value })
  }

  bookState.handleSaveBook = (index) => {
    let saveBook = JSON.parse(JSON.stringify(bookState.searchBooks[index]))
    let userBooks = JSON.parse(JSON.stringify(bookState.userBooks))
    Book.create(saveBook)
    .then(({ data }) => {
      console.log(data)
      userBooks.push(data)
      setBookState({ ...bookState, userBooks })
    })
    .catch(e => console.error(e))
  }

  bookState.handleSearchBook = event => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookState.input}&key=AIzaSyBZh-a4x_DWMuMSbODfA2Vh6fsls0dKA7E`)
      .then(({ data: { items } }) => {
        let booksInfo = items.map(elem => elem.volumeInfo)
        setBookState({ ...bookState, input: '', searchBooks: booksInfo })
      })
      .catch(e => console.error(e))
  }

  bookState.handleDeleteBook = (id, index) => {
    let userBooks = JSON.parse(JSON.stringify(bookState.userBooks))
    userBooks.splice(index, 1)
    Book.delete(id)
    .then(() => {
      setBookState({ ...bookState, userBooks })
    })
    .catch(e => console.error(e))
  }

  useEffect(() => {
    // Book.read()
    // .then(({data}) => {
    //   setBookState({ ...bookState, userBooks: data })
    // })
    // .catch(e => console.error(e))
  }, [])

  return (
    <BookContext.Provider value={bookState}>
      <Router>
        <div>
          <h2>Google Books</h2>
          <Switch>
            <Route exact path="/">
              <Jumbotron />
              <Search />
              <Results />
            </Route>
            <Route exact path="/saved">
              <Jumbotron />
            </Route>
          </Switch>
        </div>
      </Router>
    </BookContext.Provider>
  );
}

export default App;
