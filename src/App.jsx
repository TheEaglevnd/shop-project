import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import styles from "./app.module.scss";
import MenuItem from "./Components";
import { categories } from "./constant/mock.jsx";
import Header from "./Components/Header/Header.jsx";
import { Route, Routes, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import Shop from "./Pages/Shop/index.jsx";
function App() {
  console.log(styles);
  return (
    <div className={styles.appContainer}>
      <Header />
    </div>
  );
}

export default App;
