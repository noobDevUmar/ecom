import React from 'react'
import {Link } from "react-router-dom"
import "./Card.scss"
const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}> 
    <div className="card w-[280px] flex flex-col gap-2">
      <div className="image w-[100%] h-[400px] overflow-hidden relative">
        {item.isNew&& <span className='absolute top-[5px] left-[5px] bg-white text-blue-400 font-bold p-2 z-20'> New Season </span>}
      <img src={item.img} alt="" className="mainImg w-[100%] h-[100%] object-cover absolute" />
      <img src={item.img2} alt="" className="secondImg w-[100%] h-[100%] object-cover absolute " />
      </div>
    <h2 className='text-12 font-medium'> {item.title} </h2>
    <div className="prices flex gap-3">
      <h3 className='text-lg font-semibold text-gray-400 line-through'> {item.oldPrice}Rs </h3>
      <h3 className='text-lg font-semibold'>{item.price}Rs </h3>

    </div>
    </div>
    </Link>
  )
}

export default Card