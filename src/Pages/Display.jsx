import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import "./Display.css";

const Display = ({list,setList}) => {
  const {id}=useParams();
  const p=list.find((item)=>item.id===Number(id));
const Navigate=useNavigate();
  if (!p) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <button onClick={() => navigate("/home")}>Back</button>
      </div>
    );
  }
  return (
    <div  className="display-container"
  style={{ backgroundImage: `url(${p.image})` }}>
      <div className='dish'>
        <h4>Name:{p.name}</h4>

      </div>
       <div className='ingr'>
      <h3>
        Ingredients
      </h3>
      {p.ingredients.map((item,index)=>(
        <div key={index}>
 <p key={index}>{item}</p> 
          </div>

      ))
      }</div>

  
    <div className='inst'>
      <h3>
        Instructions
      </h3>
      {p.instructions.map((item,index)=>(
        <div key={index}>
           <p key={index}>{item}</p>
          </div>

      ))
      }</div>
    <button onClick={()=>Navigate("/home")}>back</button>
      </div>
  )
}

export default Display