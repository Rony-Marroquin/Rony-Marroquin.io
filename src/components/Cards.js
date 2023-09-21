import React from "react";
import Card from "./Card";
import "./card.css";
import banner from "../assets/banner.jpg"


const cards = [
  {
    id: 1,
    title: "MODELOS DE IMPLEMENTACION ",
    image: banner,
    text: " * Infraestructura como servicio (IaaS)    *  Plataforma como servicio (PaaS)        *     Software como servicio (SaaS)"  , 
    url:"https://aws.amazon.com/es/types-of-cloud-computing/"
  },
  {
    id: 2,
    title: "MODELOS DE SERVICIOS EN LA NUBE",
    image: banner,
    text: "Cloud     *       Híbrido                  *               Implementación onpremise",
    url:"https://docs.aws.amazon.com/es_es/whitepapers/latest/aws-overview/types-of-cloud-computing.html"
    
  },
  {
    id: 3,
    title: "FUNCIONALIDAD DE CLOUD SERVICE",
    image: banner,
    text: "Los modelos de servicio de cloud computing se basan en el concepto de compartir recursos informáticos, software e información bajo demanda por Internet.  ",
    url:"https://cloud.google.com/learn/what-is-cloud-computing?hl=es"
    
  },

  {
    id: 3,
    title:  "QUIENES OFRESEN CLOUD SERVICES ",
    image: banner,
    text: "Los tres grandes (Google Cloud, Microsoft Azure y Amazon Web Services (AWS)) se consideran los líderes consolidados. No obstante, hay muchos otros  ",
    url:"https://cloud.google.com/learn/what-is-a-cloud-service-provider?hl=es#:~:text=Los%20tres%20grandes%20(Google%20Cloud,Red%20Hat%2C%20DigitalOcean%20y%20Rackspace."
    
  },
];



function Cards() {
  return (



    <div>
      <h1 className='card-title text-light'>COMPUTO EN LA NUBE</h1>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

<div className="container d-flex justify-content-center align-items-center h-100 ">
    <div className="row ">
      
    {cards.map(({ title, image, id, text,url }) => (
          <div className="col-md-3" key={id}>
            <Card imageSource={image} title={title}  text={text} url={url}  />
          </div>
        ))}


      </div>

     
     
      
   
    </div>
 
   </div>
      
  
    
  
    
   
  );
}

export default Cards;
