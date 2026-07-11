import React from 'react'
import styles from './aboutUs.module.scss'
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <div>
    <Link to="/" onClick={(e) => e.stopPropagation()}>
  go to main page
</Link>
    </div>
  )
}

export default AboutUs
