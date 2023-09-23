// external import
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

// internal import
import App from './App.jsx'
import Hero from './Pages/Hero.jsx'
import Admin from './Pages/Admin.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/' element={<Hero />} />
      <Route path='/admin' element={<Admin />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
