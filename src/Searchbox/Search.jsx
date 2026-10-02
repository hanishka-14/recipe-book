import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Search = ({list,setResult}) => {
  const[name,setName]=useState("");
  const Navigate=useNavigate();
  function handel(){
    const match= list.filter((item) =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );

     if (match) {
      setResult(match); // update parent state
    } else {
      setResult(null); // no match found
    }
    Navigate("/serachResult")
  }
  return (
    <div>
      <input type="text" onChange={(e)=>setName(e.target.value)}/>
      <button onClick={handel}>Search</button>
    </div>
  )
}

export default Search