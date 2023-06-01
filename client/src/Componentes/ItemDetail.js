import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "./CartContext";
import DestacadosContainer from "./DestacadosContainer";
import ItemCounter from "./ItemCounter";
import './CSS/ItemDetail.css'
import BannerShop from './BannerShop';
import { useEffect } from 'react'


const ItemDetail = ({producto}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const [add , setAdd] = useState(false) 
    const [selectedSize, setSelectedSize] = useState()
    const {addToCart} = useAppContext()
    const [image, setImage] = useState(false)
    const [imageMini, setImageMini] = useState(false)


    const onAdd = (numero) => {
        addToCart({item:producto, quantity:numero, selectedSize}) 
        console.log(selectedSize)
        setAdd(numero)
        }



    function handleClick(){
        setImage(image => !image);
    }

    function handleClickImg(){
        setImageMini(imageMini => !imageMini);
    }


    let openImage = image ?  'model open': 'item-colum1'
    let openMiniImage = imageMini ?  'modal abrir': 'mini'

    
    return (
    <div>

        <BannerShop/>


        <div className="detail-container">
            
            <div className="detail-content">
            
                <div className="item-container">
                    <div className="item-colum1">
                        <div className={`${openImage}`} >

                            <img onClick={() => handleClick()} className='imgDetail' src={producto.img} />

                        </div>   
                        <div className={`${openMiniImage}`}>
                                <img onClick={() => handleClickImg() } className='img2' src={producto.img2}/>
                                
                        </div>
                    </div>
                    
                    <div className="item-colum2">
                        <h2 className="h23">{producto.titulo}</h2>
                        <div className="line"></div>
                        <h3 className="h23">${producto.precio}</h3> 
                        
                        <div className="item-talle">
                        <h4>Talle/Stock</h4>
                            <h3>{selectedSize}</h3>
                        </div>
                        {
                        add ?
                            <div className="añadido-container">
                                <div>
                                    Añadido al carrito!
                                    <Link to="/carrito" > <button className='btnCart'> VER CARRITO</button> </Link>
                                </div>
                            </div>
                            
                            :
                            <div className='talles-container'>
                                <div className="sizes-container">
                                    <button onClick={() => setSelectedSize( `(S)  ${producto.S} `)} disabled={`${producto.S} ` <= 1} className={ selectedSize ===`(S)  ${producto.S} ` ? 'button size-button selected' : 'button size-button'}>S</button>
                                    <button onClick={() => setSelectedSize(`(M)  ${producto.M} `)} disabled={`${producto.M} ` <= 1} className={ selectedSize === `(M)  ${producto.M} ` ? 'button size-button selected' : 'button size-button'}>M</button>
                                    <button onClick={() => setSelectedSize(`(L)  ${producto.L} `)} disabled={`${producto.L} ` <= 1} className={ selectedSize === `(L)  ${producto.L} ` ? 'button size-button selected' : 'button size-button'}>L</button>
                                    <button onClick={() => setSelectedSize(`(XL)  ${producto.XL} `)} disabled={`${producto.XL} ` <= 1} className={ selectedSize === `(XL)  ${producto.XL} ` ? 'button size-button selected' : 'button size-button'}>XL</button>
                                </div>

                                <ItemCounter  initial={1} onAdd={onAdd} />

                            </div>
                            
                            
                        }
                        
                    
                    
                    </div>
                    
                </div>
                <div className="descrip-content">
                    <h3 className="h23">Descripción</h3>
                    <p className="p">{producto.descripcion}</p>
                </div>
            </div>
        </div>
        <DestacadosContainer/>
    </div>
    );
}

export default ItemDetail