import React from "react";
import styles from "./homePage.module.scss";
import MenuItem from "../Components/index.jsx";
import { categories } from "../constant/mock.jsx";
import { useNavigate } from "react-router-dom";

function HomePage({ title }) {
 
  const navigate = useNavigate();
  
 const handleClick = (category) => navigate(`/Collection/${category}`)
  return (
    <div className={styles.menuContainer}>
      {categories.map((item) => (
        <MenuItem title={item.title} key={item.id} imgurl={item.image} onClick={() => handleClick(item.category)} />
        
      ))}
    </div>
  );
}

export default HomePage;
