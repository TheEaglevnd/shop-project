import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

function Collection() {
    const location = useLocation() 
    const params = useParams()
    console.log(params);
    console.log(location);
  return (
    <div className="flex flex-row justify-center items-center bg-white w-[200vh] h-[10vh] mt-6 text-2xl font-bold mx-auto rounded-3xl ">
      {params.category}
    </div>
  )
}

export default Collection
