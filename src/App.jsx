import React,{useState,useEffect} from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Display from './Pages/Display';
import Login from './Pages/Login';
import Search from './Searchbox/Search';
import SearchResult from './Searchbox/SearchResult';
const App = () => {
  const [list,setList]=useState([]);
  const [result ,setResult]=useState([]);
 
  useEffect(()=>{
    fetch("https://dummyjson.com/recipes")
    .then((res)=>res.json())
    .then((data)=>setList(data.recipes))
  },[])
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Login />
    },
    {
      path:"/home",
      element:<div>
        <Search list={list} setResult={setResult}/>
        <Home list={list} setList={setList}/>
      </div>
    },
    {
      path:"/home/:id",
      element:<Display list={list} setList={setList}/>
    },
    {
      path:"/serachResult",
      element:<SearchResult result={result}/>
    }
  ])
  return (
    <div>
    <RouterProvider router={router} />
    </div>
  )
}

export default App