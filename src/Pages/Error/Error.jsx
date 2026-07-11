import React from 'react'
import { Link } from 'react-router-dom'
import styles from './error.module.scss'
import { useRouteError , isRouteErrorResponse } from 'react-router-dom'
const Error = () => {
    const error = useRouteError()
    isRouteErrorResponse(error)
  return (
    <div className= {styles['m-div']}>
      <div className='w-[400px] bg-gray-400/40 h-[250px] flex flex-col justify-center items-center rounded-[30px] gap-8'>
         <h1 className='text-4xl font-bold'> Erorr!! </h1>
         <p className='text-l'>{isRouteErrorResponse(error) ? "The page that you are looking for does Not exist!" : 
         'somthing went wrong' }</p>
         <Link to={"/"} className='w-[120px] flex justify-center items-center text-center p-2 font-bold h-[60px] bg-blue-300/60 rounded-[10px]'> go to main page</Link>
      </div>
    </div>
  
  )
   
}

export default Error
