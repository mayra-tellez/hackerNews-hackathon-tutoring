import React, { useState, useEffect } from "react";
import axios from "axios";

import ListArticles from "./Components/ListArticles";
import SearchForm from "./Components/SearchForm";
import "./App.css"

function App() {

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchType, setSearchType] = useState("");

  useEffect(() => {
    axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then(res => setData(res.data.hits))
  }, [])

  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchType = (e) => {
    setSearchType(e.target.value)
    console.log(searchType)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchType === "") {
      axios.get(`http://hn.algolia.com/api/v1/search?query=${searchTerm}`)
      .then(res => setData(res.data.hits))
    } else if (searchType !== "") {

      // search by author ------------------------------------
      if (searchType === "Author") {
        axios.get(`https://hn.algolia.com/api/v1/search?tags=story,author_${searchTerm}`)
        .then(res => {
          let resultsArr = res.data.hits;
          if (resultsArr.length === 0) {
            window.alert(`There are no stories by the author ${searchTerm}. Please try again.`)
          } else {
            setData(res.data.hits)
          }
        })
      }

    }
  }
  
  
  return (
    <div className="App">
      <h1>heeeey</h1>
      <SearchForm handleSearchTerm={handleSearchTerm} handleSearchType={handleSearchType} handleSubmit={handleSubmit} searchTerm={searchTerm} />
      <ListArticles data={data} />
    </div>
  );
}

export default App;
