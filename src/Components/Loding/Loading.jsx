import React from 'react'
import { ImSpinner2 } from "react-icons/im";
function Loading() {
  return (
    <div className='w-full h-full bg-white/50 flex justify-center items-center absolute'>
       <ImSpinner2 className='animate-spin' color='black' size={50} />
    </div>
  )
}

export default Loading
