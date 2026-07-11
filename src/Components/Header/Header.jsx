import React from "react";
import styles from "./header.module.scss" ;
import { NavLink } from "react-router-dom";

function Header() {
  return (
   <div className= {styles.headerContainer}> 
    <h1 className="font-bold text-2xl"> my Shop </h1>
    <ul className="flex  justify-end ml-6 items-center text-left gap-4">
      <li className="cursor-pointer"><NavLink className={({isActive}) => (isActive ? "font-bold" : "")} to="/"> home </NavLink></li>
      <li className="cursor-pointer"><NavLink className={({isActive}) => (isActive ? "font-bold" : "")} to="/Shop"> Shop </NavLink></li>
      <li className="cursor-pointer" ><NavLink className={({isActive}) => (isActive ? "font-bold" : "")} to="./AboutUs"> about us </NavLink> </li>
      <li className="cursor-pointer" ><NavLink className={({isActive}) => (isActive ? "font-bold" : "")} to="./Login"> login </NavLink></li>
    </ul>
    </div>
  )
}

export default Header;
