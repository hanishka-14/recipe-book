import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate=useNavigate();
  return (
    <div>
<button onClick={()=>navigate("/home") } style={{  display: "flex", 
  justifyContent: "center", 
  alignItems: "center", 
  marginLeft:"500px",
  marginTop:"300px"}}>GO a Head!</button>
    </div>
  )
}

export default Product