import { useEffect } from 'react'
import React from 'react'
import Acordeon from './Acordeon';
import Banner from './Banner';
import Shop from './Shop';
import CarruselContainer from './CarruselContainer';
import { AiOutlineWhatsApp} from "react-icons/ai";
import BannerFrom from './BannerFrom';
import DestacadosContainer from './DestacadosContainer';

const All = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return(
        <div>
            <Banner/>
            <CarruselContainer/>
            <Shop/>
            <BannerFrom/>
            <DestacadosContainer/>
            <Acordeon/>
            
            <a href='https://wa.me/3413667323'><AiOutlineWhatsApp className='whapFoot'/></a>
        </div>
    );
}

export default All