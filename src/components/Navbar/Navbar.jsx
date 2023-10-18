import React from 'react'
import SearchIcon from "@mui/icons-material/Search"
import PersonOutLine from "@mui/icons-material/PersonOutlineOutlined"
import FavoriteBorderOutlines from "@mui/icons-material/FavoriteBorderOutlined"
import ShoppingCart from "@mui/icons-material/ShoppingCartOutlined"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='navbar h-[80px]'>
      <div className="wrapper flex justify-between py-[10px] px-[25px] items-center">
    <div className="left flex gap-12">

      <div className='item'> <Link to="/category/women"> Women  </Link> </div>
      <div className='item'> <Link to="/category/men"> Men  </Link> </div>
      <div className='item'> <Link to="/category/kids"> Kids  </Link> </div>
      <div className='item'> <Link to="/category/accessories"> Accessories  </Link> </div>



    </div>
    <div className="center text-[30px] tracking-[3px]"> <Link to="/"> UMERSTORE  </Link> </div>
    
    <div className="right flex gap-8">
      <div className="items flex text-gray-600 cursor-pointer ">
        <PersonOutLine/>
        <div className="cartIcon hover:text-black relative">
        <ShoppingCart/> 
        <span className='text-[12px] w-[20px] h-[20px] rounded-full bg-blue-500 text-white absolute -right-[10px] -top-[10px] flex justify-center items-center'>0 </span>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default Navbar