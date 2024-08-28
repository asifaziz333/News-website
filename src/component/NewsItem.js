import React from 'react'

const NewsItem = ({...props}) => {
    const{title,description,url,src}=props;
    let img='image/download.jpeg'
  return (
    
   <>
   <div className="card bg-dark text-light mb-3 d-inline-block py-3 px-3 my-3 mx-3" style={{maxWidth:"345px"}}>
  <img src={src?src:img} style={{height:"250px",width:"300px"}} className="card-img-top" alt="error" />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,70)}</h5>
    <p className="card-text">{description?description.slice(0,90):""}</p>
    <a href={url} className="btn btn-primary">Read more</a>
  </div>
</div>

   </>
  )
}

export default NewsItem
