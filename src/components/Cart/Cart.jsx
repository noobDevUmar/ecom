import React from 'react'
import DeleteOutline from "@mui/icons-material/DeleteOutlined"
import DeleteOutlined from '@mui/icons-material/DeleteOutlined';

const Cart = () => {
    const data = [
      {
        id: 1,
        img: "https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
        img2: "https://images.unsplash.com/photo-1697370149703-82d435c83226?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
        title: "GIRL ",
        oldPrice: 193,
        price: 134,
        isNew: true,
        description:"JABA JABA JABA JABA JABA lorem "
      },
      {
        id: 2,
        img: "https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
        img2: "https://images.unsplash.com/photo-1697369964069-b4730db68547?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470",
        title: "GIRL ",
        oldPrice: 193,
        price: 134,
        description:"JABA JABA JABA JABA JABA lorem "

      },
    ];

  return (
    <div className='absolute right-5 top-20 z-10000 bg-white p-3 shadow-2xl'>
<h1 className='mb-7 text-gray-600 font-normal text-2xl'> Products in your Cart </h1>
{data?.map((item)=>(
    <div className='item flex items-center gap-5 mb-7' key={item.id}> 
    <img src={item.img}  alt='' className='w-20 h-[100px] object-cover'/>
    <div className="details ">
    <h1 className='text-lg font-medium'>  {item.title}</h1>
    <p className='text-gray-600 mb-3 text-sm'>{item.description.substring(0,100)} </p>
    <div className="price text-blue-700">Rs{item.price}</div>

    </div>
<DeleteOutlined className='text-red-700 text-2xl cursor-pointer'/>
    </div>
))}
<div className="total flex justify-between font-medium text-lg mb-5">
    <span>SUBTOTAL</span>
    <span>Rs.2000</span>
</div>
<button className=' p-2 px-4 text-sm bg-blue-500 text-white items-center gap-5 flex justify-center cursor-pointer'> PROCEED TO CHECKOUT </button>
<span className="reset text-red-600 text-sm cursor-pointer m-5 mt-10">
    Reset Cart
</span>

    </div>
  )
}

export default Cart