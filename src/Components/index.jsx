import React from 'react'
import styles from './menuItem.module.scss'
import Shop from '../Pages/Shop'
function MenuItem({ title, subTitle, imgurl, onClick }) {
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.m}>
        <img src={imgurl} className='w-75 h-auto mt-8 cursor-pointer'  />
        <h3 onClick={onClick} className='cursor-pointer'>{title}</h3>
        <span className='justify-baseline mb-10'>{subTitle}</span>
      </div>
      
    </div>
  )
}

export default MenuItem
