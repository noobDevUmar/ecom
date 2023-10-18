import React, { useState } from 'react'
import EastOutlined from "@mui/icons-material/EastOutlined"
import WestOutlined from "@mui/icons-material/WestOutlined"
import pic from "../../../public/images/pic.avif"
import "./Slider.scss"

const Slider = () => {

const [currentSlide,setcurrentSlide] = useState(0)


    const data = [
        "https://images.unsplash.com/photo-1528478940942-401d9b167878?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1469",
        "https://images.unsplash.com/photo-1517241938558-898c3afe02c8?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1471",
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1470"
    ]


    const peviousSlide =()=>{
setcurrentSlide(currentSlide===0 ? 2 : (prev)=> prev - 1)
    }  
    const nextSlide =()=>{
        setcurrentSlide(currentSlide===2 ? 0 : (prev)=> prev + 1)

    }  
    
    
    return (
    <div className='slider max-w-[100vw] overflow-hidden'> 
<div className="flex w-[300vw] h-[90vh]" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
    <img  className='w-[100vw] object-cover' src={pic} alt=''/>
   

    <img className='w-[100vw] object-cover' src={data[1]} alt=''/>
    <img className='w-[100vw] object-cover' src={data[2]} alt=''/>
</div>
<div className="icons">
    <div className="icon text-white" onClick={peviousSlide}><WestOutlined/> </div>
    <div className="icon text-white border-1 border-gray-2" onClick={nextSlide}><EastOutlined/> </div>

</div>
    </div>
  )
}

export default Slider