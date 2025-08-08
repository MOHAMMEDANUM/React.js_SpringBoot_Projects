import React, { useRef } from 'react';
import './filter.css';

function Filter({ onFilter }) {
  const categoryData = useRef();
  const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;

  async function handle() {
    const selectedCategory = categoryData.current.value;
    
    let res;
    if (selectedCategory === "") {
      res = await fetch(`${baseURL}/product`);
    } else {
      res = await fetch(`${baseURL}/product/${selectedCategory}`);
    }

    const data = await res.json();
    onFilter(data); // send data back to Products.jsx
  }

  return (
    <div className='sectioncategory'>
      <select className='category' ref={categoryData}>
        <option value="">All Categories</option>
        <option value="mobile">MOBILE</option>
        <option value="laptop">LAPTOP</option>
        <option value="cloth">CLOTH</option>
        <option value="shoe">SHOE</option>
        <option value="watch">WATCH</option>
      </select>
      <button onClick={handle} className='filterBtn'>Filter</button>
    </div>
  );
}

export default Filter;
