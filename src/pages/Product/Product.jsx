import React, { useState } from 'react'
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import BalanceIcon from "@mui/icons-material/Balance"



const Product = () => {
  const [selectedImage,setSelectedImage] = useState(0)
  const [quantity,setquantity] = useState(1)

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
      <div className="right flex-1  flex flex-col gap-8">
        <h1 className='text-3xl '>Title </h1>
      <span className='text-3xl text-blue-500 font-semibold'> 20000 RS</span>
      <p className='text-lg font-light text-justify '> 
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, pariatur? Quibusdam voluptates vero sequi? Id, et consequatur voluptatem necessitatibus ipsam ea illo magni possimus vitae iure, cum consequuntur beatae magnam.
        </p>
        <div className="quantity flex items-center gap-3">
          <button className='p-2 mx-2 border-1 border-x-gray-600  bg-gray-300 w-12 h-12 flex items-center justify-center border-none text-2xl' onClick={()=>setquantity(prev=> prev===1? 1 : prev-1)}>-</button>
          {quantity}
          <button className='p-2 mx-2 border-1 border-x-gray-600 bg-gray-300 w-12 h-12 flex items-center justify-center border-none text-2xl' onClick={()=>setquantity(prev=>prev+1)}>+</button>
        </div>
        <button className='add w-64 p-3 bg-blue-500 text-white items-center gap-5 flex justify-center cursor-pointer'>
            <AddShoppingCartIcon/> Add to Cart
           </button>
        <div className="link flex gap-5 ">
          <div className="item flex items-center gap-2 text-blue-400 text-sm"><FavoriteBorderIcon/> ADD TO WISHLIST </div>
          <div className="item flex items-center gap-2 text-blue-400 text-sm"><BalanceIcon/> ADD TO COMPARE </div>
        </div>
        <div className='info flex flex-col gap-3 text-gray-600 text-sm mt-7 '> 
    <span> Vendor : Polo</span>
    <span> Product Type : T Shirt</span>
    <span> Tag : T-Shirt,Women,Top</span>
        </div>

        <hr/>
        <div className="details info flex flex-col gap-3 text-gray-600 text-sm mt-7 ">
          <span> DESCRIPTION</span>
        <hr className='w-48 text-gray-300'/>
    <span> ADDITIONAL INFORMATION</span>
    <hr className='w-48 text-gray-300'/>
    <span> FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product