import React from 'react'
import Products from './components/product/products'
import Home from './components/home/Home'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Admin from './components/Admin/Admin'

function App() {
  return (

    <>

    <BrowserRouter>

    <NavBar />
    <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/product' element={<Products />}/>
    <Route path='/admin' element={<Admin />}/>

    </Routes>

    </BrowserRouter>
    

    
    
      
    
    
    
    </>
    
  )
}

export default App