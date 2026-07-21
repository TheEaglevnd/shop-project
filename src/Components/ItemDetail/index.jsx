import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from "./itemDetail.module.scss"
import { getData } from '../../services/apiClient'
import Loading from '../Loding/Loading'
import PictureGallery from '../PictureGallery/PictureGallery'
function ItemDetail() {
  const params = useParams()
   const [p , setP] = useState({})
   const [loading , setLoading] = useState(true)
   useEffect(() =>{
    getData(`products/${params.ItemDetail}`).then((data) => { console.log(data);
      setP(data)
      
    }).finally(() => {
      setLoading(false)
    })
    
   } , [params.ItemDetail])
  const reviews = () => {
  if (!p.reviews) return null;

  return p.reviews.map((item, index) => (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-md mb-4 hover:bg-gray-50
     transition-all duration-300 ease-in-out"  key={index}>
      <h3>{item.reviewerName}</h3>
      <p className='pb-6'>{item.comment}</p>
    </div>
  ));
};
  return (
    
    <div className={styles.detailContainer}>
      {loading ? <Loading /> : null}
      <div className={styles.productDetail}>
        <div className={styles.imgContainer}> <PictureGallery images={p.images}/></div>
        <div className={styles.pInfo}>
        <h1 className='mt-3'>{p.title}</h1>
        <p className='font-bold'> ⭐ {p.rating}</p>
        <p>{p.price} $</p>
        <p>{p.description}</p>



        <button className='ml-5 bg-black/50 text-white  hover:bg-black hover:font-bold w-20 rounded-2xl mt-6'>Add to Card</button>
        </div>
      </div>
      <div  className={styles.reviewCard}>{reviews()}</div>
    </div>
  )
}

export default ItemDetail
