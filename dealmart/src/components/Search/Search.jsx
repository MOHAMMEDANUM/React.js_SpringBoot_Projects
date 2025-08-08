// import React, { useRef } from 'react';
// import "./search.css";
// import { useNavigate } from 'react-router-dom';

// function Search(props) {
//   const searchData = useRef();
//   const navigate = useNavigate();

//   async function submitSearch(e) {
//     e.preventDefault();

//     const inputValue = searchData.current.value.trim();

//     // console.log("Search input value:", inputValue);

//     if (inputValue === "") {
//       props.setSearchFlag(false);
//       navigate("/product"); // show all products if input is empty
//       return;
//     }

//     const response = await fetch(`http://localhost:8080/product/name/${inputValue}`);
//     const datas = await response.json();

//     props.setSearchDataDb(datas);
//     props.setSearchFlag(true);
//     navigate("/product"); // ✅ switch to product page to display results
//   }

//   return (
//           <div className="search-container">
//             <form onSubmit={submitSearch}>
//               <input className='search-input' type="text" placeholder='Search the product' ref={searchData}/>
//               <button type='submit' className='submitBtn'>Submit</button>
//             </form>
//           </div>

//   );
// }

// export default Search;



import React, { useRef, useState } from 'react';
import "./search.css";
import { useNavigate } from 'react-router-dom';

function Search(props) {
  const searchData = useRef();
  const navigate = useNavigate();
  const [suggestions, setSuggestions] = useState([]);

  async function fetchSuggestions(query) {
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }

    const res = await fetch(`${process.env.REACT_APP_BASE_URL}/product/name/${query}`);
    const data = await res.json();
    setSuggestions(data);
  }

  async function submitSearch(e) {
    e.preventDefault();
    const inputValue = searchData.current.value.trim();

    if (inputValue === "") {
      props.setSearchFlag(false);
      navigate("/product");
      return;
    }

    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/product/name/${inputValue}`);
    const datas = await response.json();

    props.setSearchDataDb(datas);
    props.setSearchFlag(true);
    navigate("/product");
    searchData.current.value = ""; // Clear input after search
  }

  function handleChange(e) {
    fetchSuggestions(e.target.value);
  }

  function selectSuggestion(name) {
    searchData.current.value = name;
    setSuggestions([]);
  }

  return (
    <div className="search-container">
      <div className="inner-container">
        <form onSubmit={submitSearch}>
        <input
          className='search-input'
          type="text"
          placeholder='Search the product'
          ref={searchData}
          onChange={handleChange}
        />
        <button type='submit' className='submitBtn'>Submit</button>
      </form>
      </div>

      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => selectSuggestion(item.name)}>
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
