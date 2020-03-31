import React from 'react'
import Jumbotron from '../../Jumbotron'
import SearchBar from '../../SearchBar'
import Results from '../../Results'
import Navbar from '../../Navbar'

function Search() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <SearchBar />
      <Results />
    </>
  )
}

export default Search