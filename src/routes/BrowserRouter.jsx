import React from "react"
import styles from "./browserRouter.module.scss"
import Collection from "../Pages/Collection/Collection"
import Shop from "../Pages/Shop"
import AboutUs from "../Pages/about-us/AboutUs"
import Login from "../Pages/login/login"
import { createBrowserRouter } from "react-router-dom"
import LayOut from "../Components/LayOut"
import HomePage from "../Pages/HomePage" 
import Error from "../Pages/Error/Error"
import ItemDetail from "../Components/ItemDetail"


const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement:<Error/> ,
    children: [
      { 
        index : true ,
        element: <HomePage />
      },
      {
        path: "Shop",
        element: <Shop  />
      } ,
      {
        path:"AboutUs",
        element : <AboutUs />
      } ,
      {
        path : "Login",
        element: <Login/>
      } ,
      {
        path : "Collection/:category",
        element: <Collection/>
      } , 
      {path : "Collection/:category/:ItemDetail" , 
      element : <ItemDetail/>
      }

    ]
  }
])
export default router