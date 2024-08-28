import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
const NewsBoard = ({category}) => {
    const key="c351358bf3e646cd9368f7f4924185b2"
     const[article,setArticle]=useState([]);
    useEffect(()=>{
        // console.log(import.meta.env.NEWS_API);
       getData();
    },[category])
    const getData=async()=>{
      //  console.log(key);
        const response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${key}`)
        let result= await response.json();
        console.log(result);
        setArticle(result.articles);
    }
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-dark'>News</span></h2>
      {article.map((elm,index)=>{
       return <NewsItem key={index} title={elm.title} description={elm.description} src={elm.urltoImage} url={elm.url}/>
      })}
    </div>
  )
}

export default NewsBoard
