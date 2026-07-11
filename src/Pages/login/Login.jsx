import React from 'react'
import styles from "./login.module.scss"
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
       <h1>login Page</h1>
      <Link to="/" onClick={(e) => e.stopPropagation()}>
  go to main page
</Link>
    </div>
  )
}

export default Login
