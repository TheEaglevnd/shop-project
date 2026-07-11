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
      <Link to="/" onClick={(e) => e.stopPropagation()}>
  go to main page
</Link>

    </div>
  )
}

export default LayOut