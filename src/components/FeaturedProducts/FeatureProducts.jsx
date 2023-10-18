import React from 'react'
import Card from "../Card/Card"
const FeatureProducts = ({type}) => {
const data =[
  {id:1,
    img:"https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
    img2:"https://images.unsplash.com/photo-1697370149703-82d435c83226?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
    title:"GIRL ", oldPrice:193,price:134 ,isNew:true }, {id:2,
      img:"https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
     img2:"https://images.unsplash.com/photo-1697369964069-b4730db68547?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470", title:"GIRL ", oldPrice:193,price:134  }, {id:3,
        img:"https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
        title:"GIRL ", oldPrice:193,price:134  }, {id:14,
          img:"https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
          title:"GIRL ", oldPrice:193,price:134  }
]


  return (
    <div className='my-[100px] mx-[200px]'>
          <div className='top '>
            <h1 className='text-3xl font-bold mb-10'> {type} Products</h1> 
            </div>
            <div className="bottom flex justify-center gap-8">
              {data.map((item)=>(
               
                <Card item={item} key={item.id} />
              ))}
            </div>
    </div>
  )
}

export default FeatureProducts