import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/HomePage/Home.jsx'
import Desc from './components/DescPage/Desc.jsx'
import Success from './components/SuccessPage/Success.jsx'
import Login from './components/Login/Login.jsx'
import Signin from './components/Signin/Signin.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home />} />
      <Route path='/housingdesc' element = {<Desc />} />
      <Route path='/success' element = {<Success />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/signin' element = {<Signin />} />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
