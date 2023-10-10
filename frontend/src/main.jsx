// external import
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import axios from 'axios'

// internal import
import App from './App.jsx'
import Hero from './Pages/Hero.jsx'
import Admin from './Pages/Admin.jsx'
import FinalResult from './Pages/FinalResult.jsx'
import 'react-toastify/dist/ReactToastify.css'; // toastify css file
import 'bootstrap/dist/css/bootstrap.min.css' // bootstrap css file
import './index.scss'

// set axios base url
const baseUrl = '/api'
axios.defaults.baseURL = baseUrl

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Hero />} />
      <Route path='/admin' element={<Admin />} />
      <Route path='/result' element={<FinalResult />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
