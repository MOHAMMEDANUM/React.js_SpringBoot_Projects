import React, { useRef } from 'react';
import "./search.css";
import { useNavigate } from 'react-router-dom';

function Search(props) {
  const searchData = useRef();
  const navigate = useNavigate();

  async function submitSearch(e) {
    e.preventDefault();

    const inputValue = searchData.current.value.trim();

    if (inputValue === "") {
      props.setSearchFlag(false);
      navigate("/product"); // show all products if input is empty
      return;
    }

    const response = await fetch(`http://localhost:8080/product/name/${inputValue}`);
    const datas = await response.json();

    props.setSearchDataDb(datas);
    props.setSearchFlag(true);
    navigate("/product"); // ✅ switch to product page to display results
  }

  return (
          <div className="search-container">
            <form onSubmit={submitSearch}>
              <input className='search-input' type="text" placeholder='Search the product' ref={searchData}/>
              <button type='submit' className='submitBtn'>Submit</button>
            </form>
          </div>

  );
}

export default Search;
