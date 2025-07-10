import React, { useRef, useState } from 'react'
import "./filter.css"
function Filter(props) {

    const categoryData=useRef()
    const [displayproducts,setDisplayproducts]=useState([])

    // console.log(props.setFlag(false));
    
    
    async function handle(){
        props.setFlag(false)
        const selectedCategory=categoryData.current.value;

        console.log(selectedCategory);
        
        let res
        if(selectedCategory===""){
            res=await fetch("http://localhost:8080/product")    
        }
        else{
            res=await fetch(`http://localhost:8080/product/${selectedCategory}`)    
        }
        const data = await res.json();

        setDisplayproducts(data)
        console.log(displayproducts);
        
    }
    

  return (
    
    <>

    <div className='sectioncategory'>
        <select className='category' ref={categoryData}>
        <option value="">Select Category</option>
        <option value="mobile">MOBILE</option>
        <option value="laptop">LAPTOP</option>
        <option value="cloth">CLOTH</option>
        <option value="shoe">SHOE</option>
        <option value="watch">WATCH</option>
    </select>
    <button onClick={handle} className='filterBtn'>Filter</button>
    </div>
    {/* </div> */}

    <div className="products">
        {displayproducts.map((prod, i) => {
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

      </div>
    </>
  )
}

export default Filter