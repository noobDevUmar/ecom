import React, { useState } from 'react'

const Product = () => {
  const [selectedImage,setSelectedImage] = useState(0)

  const images =[
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1528",
    "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1374"
  ]
  return (
    <div className='product py-[20px] px-[50px] flex gap-[50px]'>
      <div className="left flex-1 flex gap-10">
        <div className="images  ">
          <img src={images[0]} onClick={e=>setSelectedImage(0)} className='w-[100%] h-[150px] object-cover cursor-pointer m-5'/>
          <img src={images[1]} onClick={e=>setSelectedImage(1)} className='w-[100%] h-[150px] object-cover cursor-pointer m-5'/>
        </div>
        <div className="mainImg flex-5">
          <img src={images[selectedImage]}  className='w-full max-h-[700px] oject-cover'/>
        </div>
      </div>
      <div className="right flex-1">
        <h1>Title </h1>
      <span> 20000RS</span>
      </div>
    </div>
  )
}

export default Product