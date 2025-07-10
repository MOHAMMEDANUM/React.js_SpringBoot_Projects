import React, { useEffect, useState } from 'react'
import "./products.css"
import Filter from '../Filter/Filter'

function Products() {

    const [inputProducts,setInputProducts]=useState([])
    const [flag , setFlag] = useState(true);

    let fetchData = async ()=>{

      let response = await fetch("http://localhost:8080/product")

      let data = await response.json()

    //   console.log(data);
      setInputProducts(data)

    }
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <>
    
        <h1 className='product-header'>Products</h1>


        <Filter setFlag={setFlag}/>  



      {
        flag && (<div className="products">
        {inputProducts.map((prod, i) => {
          return (
            <div className="card" key={i}>
              <div className="image">
                
              <img src={prod.imageUrl} alt={prod.name} />
              </div>
              <h5>Name : {prod.name}</h5>
              <h5>Price : {prod.price}</h5>
              <p>Category : {prod.category}</p>
              <p>Desc: {prod.description}</p>
            </div>
          );
        })}

      </div>)
      }


    
   
    
    
    </>
    
  )
}

export default Products