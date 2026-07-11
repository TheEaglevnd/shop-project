import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  createBrowserRouter , RouterProvider } from 'react-router-dom'
import './index.scss'
import App from './App.jsx'
import {Route , Routes} from "react-router-dom"
import HomePage from './Pages/HomePage.jsx'
import Shop from './Pages/Shop/index.jsx'
import LayOut from './Components/LayOut/index.jsx'
import AboutUs from './Pages/about-us/AboutUs.jsx'
import Login from './Pages/login/login.jsx'
import router from './routes/BrowserRouter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
      
    
  </StrictMode>,
)
