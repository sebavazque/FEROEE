import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import React from 'react'
import './CSS/Relacionados.css'

const CarruselMulti = ({productos}) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1313, min: 634 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 858, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          },
          celu: {
            breakpoint: { max: 634, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
      };
  return (
<Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","celu"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    
        {productos?.map((producto)=>
            <div className='relacionado-flex'>
                
                    <div className="relacionado-contenedor" >
                        <div className="relacionado-contenido" >
                            <div className="relacionado-colum4"key={producto.id}>
                                <Link to={`/${producto.categoria}/${producto.id}`}><img className='imgR' src={producto.img} alt=''/></Link>
                            </div>
                            <div className="relacionado-colum5">
                                <Link to={`/${producto.categoria}/${producto.id}`}><h2>{producto.titulo}</h2> </Link>

                            </div>
                            <div className="relacionado-colum6">
                                <h4>Total:</h4> 
                                <h3>${producto.precio}</h3>
                            </div>
                            <button className='btnCarru'> <Link to={`/${producto.categoria}/${producto.id}`}>COMPRAR</Link> </button>
                        </div>
                    </div>

               
            </div>
        )}
</Carousel>   
  )
}

export default CarruselMulti