import React, { useEffect, useState } from 'react';
import "./products.css";
import Filter from '../Filter/Filter';

function Products({ searchDataDb, searchFlag }) {
  const [allProducts, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;


  useEffect(() => {
    fetch(`${baseURL}/product`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  // Used when filter button is clicked
  const handleFilterData = (filteredList) => {
    setDisplayProducts(filteredList);
  };

  const productsToShow = searchFlag ? searchDataDb : displayProducts;

  return (
    <div className="product-page">
      <h1 className="product-header">Explore Our Products</h1>

      <Filter onFilter={handleFilterData} />

      <div className="product-grid">
        {productsToShow && productsToShow.length > 0 ? (
          productsToShow.map((prod, i) => (
            <div className="product-card" key={i}>
              <img src={prod.imageUrl} alt={prod.name} className="product-img" />
              <div className="product-details">
                <h3>{prod.name}</h3>
                <p className="price">₹{prod.price}</p>
                <p className="category">Category: {prod.category}</p>
                <p className="desc">{prod.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">No products found.</div>
        )}
      </div>
    </div>
  );
}

export default Products;
