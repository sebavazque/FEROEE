import React from 'react'
import './CSS/CardDestacados.css'
import {Link} from 'react-router-dom'

const DestacadosCard = ({productos}) => {
  return (
        <div className='destacado'>
            <h3 id='H3D'>Productos destacados</h3>
            <div className='destacado-flex'>
                {productos?.map((producto)=>
                    <div className="destacado-contenedor" >
                        <div className="destacado-contenido" >
                            <div className="destacado-colum4"key={producto.id}>
                                <Link to={`/${producto.categoria}/${producto.id}`}><img className='imgD' src={producto.img} alt=''/></Link>
                            </div>
                            <div className="destacado-colum5">
                                <Link to={`/${producto.categoria}/${producto.id}`}><h2>{producto.titulo}</h2> </Link>

                            </div>
                            <div className="destacado-colum6">
                                <h4>Total:</h4> 
                                <h3>${producto.precio}</h3>
                            </div>
                            <button className='btnCarru'> <Link to={`/${producto.categoria}/${producto.id}`}>COMPRAR</Link> </button>
                        </div>
                    </div>

                )}
            </div>
        </div>
  )
}

export default DestacadosCard