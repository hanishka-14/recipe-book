import React ,{useState}from 'react'
import "./App.css"
import { Link } from 'react-router-dom'
const Home = ({list,setlist}) => {
 
 

  return (
    <div className='container'>
         { list.map((item) => (
      <div key={item.id}>
       
        <h2>{item.name}</h2>
        <img src={item.image} />
        <br />
        <Link to={`/home/${item.id}`}><button >view</button></Link>


      </div>
     ))}
    </div>
  )
}

export default Home