import React from 'react'
import styles from "./shop.module.scss"
import { Link } from 'react-router-dom'
import MenuItem from '../../Components'
function Shop({title}) {
  return (

    
    <div className={styles.appContainer}>

     <div className={styles.babyheader}>
     

     </div>

       <Link to="/" onClick={(e) => e.stopPropagation()}>

  go to main page
</Link>
    </div>
  )
}

export default Shop
