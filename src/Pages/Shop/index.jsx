import React from 'react'
import styles from "./shop.module.scss"
import { Link } from 'react-router-dom'
import MenuItem from '../../Components'
import CollectionItem from '../../components/CollectionItem'
function Shop({title}) {
  return (

    
    <div className={styles.appContainer}>

     <div className={styles.babyheader}>
     

     </div>
     <CollectionItem/>
    
    </div>
  )
}

export default Shop
