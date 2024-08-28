import NewsBoard from './component/NewsBoard';
import  Navbar from './component/Navbar'
import './App.css';
import { useState } from 'react';

function App() {
 // console.log(`app=${import.meta.env.NEWS_API}`);
  const[category,setCategory]=useState("general");
  return (
    <>
     <Navbar setCategory={setCategory}/>
     <NewsBoard category={category}/>
    </>
  );
}

export default App;
