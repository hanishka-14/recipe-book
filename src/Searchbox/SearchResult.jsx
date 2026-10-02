import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const SearchResult = ({result}) => {
  const navigate=useNavigate();
  return (

    <div className='container'>
      <button className="back-button" onClick={()=>navigate("/home")  }>Back</button>
         { result.map((item) => (
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

export default SearchResult