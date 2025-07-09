import React, { useRef, useState } from "react";
import "./home.css";

function Home() {
  const formData = useRef();
  const [inputData, setInputData] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    // const dataToAdd = {
    //   name: formData.current[0].value,
    //   description: formData.current[1].value,
    //   price: formData.current[2].value,
    //   imageUrl: formData.current[3].value,
    //   category: formData.current[4].value,
    // };
    // setInputData(dataToAdd);

    inputData.name = formData.current[0].value;
    inputData.description = formData.current[1].value;
    inputData.price = formData.current[2].value;
    inputData.imageUrl = formData.current[3].value;
    inputData.category = formData.current[4].value;

    // console.log(formData);
    console.log(inputData);

    fetch("http://localhost:8080/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    });

    for (let i = 0; i < formData.current.length; i++) {
      formData.current[i].value = "";
    }
  }

  return (
    <>
      <h1>Add the Products</h1>
      <div className="form">
        <form onSubmit={handleSubmit} className="product-form" ref={formData}>
          <label>
            Name: 
            <input type="text" name="name" />
          </label>

          <label>
            Description:
            <input type="text" name="description" />
          </label>

          <label>
            Price:
            <input type="number" name="price" />
          </label>

          <label>
            Image URL:
            <input type="text" name="imageUrl" />
          </label>

          <label>
            Category:
            <input type="text" name="category" />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Home;