import "/src/scss/Nav.scss";
import React, { useState } from 'react';
import {FiSearch }from "react-icons/fi"

const Search = () => {
    
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };
    return (
        <div className="search-container">
        <FiSearch onClick={toggleInput}/>
        {showInput && <input className="search-input" type="text" placeholder="Search..."/>}
      </div>
    )
}

export default Search;