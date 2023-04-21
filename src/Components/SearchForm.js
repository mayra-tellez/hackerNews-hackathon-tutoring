import React from "react";

const SearchForm = (props) => {
  const { handleSubmit, handleSearchTerm, handleSearchType } = props;

  const searchTypes = ["", "Author", "Date", "Title"]
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchByType">Search by:</label>

      <select name="searchByType" id="searchByType" onChange={(e) => handleSearchType(e)}>
        {searchTypes.map((type, i) => {
            return <option key={i} value={type}>
                {type}
            </option>
        })}
      </select>

      <input type="text" onChange={(e) => handleSearchTerm(e)}/>
      <input type="submit" value="Submit" />
    </form>
  )
} 

export default SearchForm;