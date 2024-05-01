import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Provider } from 'react-redux'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/HomePage/Home.jsx'
import Desc from './components/DescPage/Desc.jsx'
import Success from './components/SuccessPage/Success.jsx'
import Login from './components/Login/Login.jsx'
import Signin from './components/Signin/Signin.jsx'
import Payment from './components/PaymentPage/Payment.jsx'
import store from './app/store.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home />} />
      <Route path='/housingdesc' element = {<Desc />} />
      <Route path='/success' element = {<Success />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/signin' element = {<Signin />} />
      <Route path='/payment' element = {<Payment />} />
    </Route>
    
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
      <RouterProvider router={router}/> 
      </Provider>
    

  </React.StrictMode>,
)
