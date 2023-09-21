import React from 'react'
import banner from '../assets/banner.jpg'
import { Button } from 'bootstrap';
import "./card.css";

function Card({ image, title, text,url }) {
  return (
    <div className='card text-center '>
        <h4 className='card-title'>{title}</h4>
       <img src={banner} alt="a wallpaper"  />

      <div  className='card-body opacity-0.2 '>
        
        <p className='card-title'>{text}</p>
      
       
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn btn-primary border-0"
         
        >
         Leer más
        </a>
       

  
       
      </div>
     
    
      
           
          
    </div>
  )
}

export default Card;