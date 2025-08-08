import React, { useRef } from "react";
import "./admin.css";

function Admin() {
  const formData = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const dataToAdd = {
      name: formData.current[0].value.trim(),
      description: formData.current[1].value.trim(),
      price: parseFloat(formData.current[2].value),
      imageUrl: formData.current[3].value.trim(),
      category: formData.current[4].value.trim().toLowerCase(),
    };

    // Simple validation
    if (!dataToAdd.name || !dataToAdd.price || isNaN(dataToAdd.price)) {
      alert("Please enter valid product name and price.");
      return;
    }

    fetch(`${process.env.REACT_APP_BASE_URL}/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToAdd),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Product added successfully!");
        formData.current.reset();
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  }

  return (
    <>
      <h1 className="welcome">Add New Product</h1>
      <div className="form">
        <form onSubmit={handleSubmit} className="product-form" ref={formData}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>

          <label>
            Description:
            <input type="text" name="description" required />
          </label>

          <label>
            Price:
            <input type="number" name="price" step="0.01" required />
          </label>

          <label>
            Image URL:
            <input type="text" name="imageUrl" required />
          </label>

          <label>
            Category:
            <input type="text" name="category" required />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Admin;
