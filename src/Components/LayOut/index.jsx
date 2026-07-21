import React from 'react'
import styles from "./layout.module.scss"
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'
function LayOut() {
  return (
      <div className={styles.appContainer}>
      <Header/>
      <Outlet/>
     

    </div>
  )
}

export default LayOut