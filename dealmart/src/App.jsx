import React, { useState } from 'react'
import Products from './components/product/products'
import Home from './components/home/Home'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Admin from './components/Admin/Admin'
import SignIn from './components/Login/SignIn'
import SignUp from './components/Login/SignUp'

function App() {

  const [searchDataDb, setSearchDataDb] = useState([]);
  const [searchFlag, setSearchFlag] = useState(false);


  return (

    <>

    <BrowserRouter>

    <NavBar setSearchDataDb={setSearchDataDb} setSearchFlag={setSearchFlag}/>
    <Routes>

    <Route path='/' element={<Home />}/>
    <Route path='/product' element={<Products searchDataDb={searchDataDb} searchFlag={searchFlag}/>}/>
    <Route path='/signin' element={<SignIn />}/>
    <Route path='/signup' element={<SignUp />}/>

    <Route path='/admin' element={<Admin />}/>

    </Routes>

    </BrowserRouter>
    

    
    </>
    
  )
}

export default App