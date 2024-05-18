/* eslint-disable no-unused-vars */
// axios:- used for create n/w request i.e. GET,POST.....
// react-toastify:- used for toast notification 
// react-router-dom:- route purpose

import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/Orders/Orders'
// to add data successfully
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr/>
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route path="/add" element={<Add url={url}/>}/>
            <Route path="/list" element={<List url={url}/>}/>
            <Route path="/orders" element={<Orders url={url}/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default App
