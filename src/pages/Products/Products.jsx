import React, { useState } from 'react'
import List from "../../components/List/List"
import { useParams } from 'react-router-dom'
const Products = () => {
  const catname = (useParams().name)
 
 const [maxPrice,setMaxPrice] = useState(5000)
 const [sort,setsort] = useState(null)



  return (
    <div className=' flex  py-[30p] px-[50px] flex gap-10'>
      <div className="left sticky">
        <div className="filterItem">
          <h2 className='font-bold text-lg '> Product Categories</h2>
            <div className="inputItem">
              <input type='checkbox' id='1' value={1}/>
            
              <label htmlFor='1'> OverSized Tees </label>
            </div>
            <div className="inputItem">
              <input type='checkbox' id='2' value={1}/>
            
              <label htmlFor='2'> OverSized Hoodies </label>
            </div><div className="inputItem">
              <input type='checkbox' id='3' value={1}/>
            
              <label htmlFor='3'>  Shirts </label>
            </div>
        </div>
        <div className="filterItem">
          <h2 className='font-bold text-lg '> Filter by Price</h2>
          <div className="inputItem">
            <span> 0 </span>
            <input  type='range' min={0} max={10000} value={maxPrice} onChange={(e)=>setMaxPrice(e.target.value)}/>
            <span> {maxPrice} </span>

          </div>
        </div>
        <div className="filterItem">
          <h2 className='font-bold text-lg '>Sort by</h2>
          <div className="inputItem">
            <input type='radio' id="asc" name='price' onChange={()=> setsort("asc")}/>
            <label htmlFor='asc'>Low To High </label>
            <br/>
            <input type='radio' id="dec" name='price' onChange={()=> setsort("dec")}/>
            <label htmlFor='dec'>High to Low </label>


          </div>
        </div>
      </div>
      <div className="right  flex-1">
        <img 
        className='catImg h-[300px] w-[100%] object-cover mb-30 '
        src='https://images.unsplash.com/photo-1682687221006-b7fd60cf9dd0?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470'
        alt=''
        />

        <List catname={catname} maxPrice={maxPrice} sort={sort}/>
      </div>
   


    </div>
  )
}

export default Products