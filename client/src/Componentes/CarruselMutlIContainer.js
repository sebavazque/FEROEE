import React from 'react'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { dbFirebase } from "./Firebase";
import { getDocs, query, where, collection } from "firebase/firestore";
import Loader from './Loader';
import CarruselMulti from './CarruselMulti';

const CarruselMultiContainer = (props) => {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const {category}= useParams()



    useEffect(()=>{
        
        if(!category){
            getDocs(collection(dbFirebase, "Productos"))
                .then((resp => setProductos(resp.docs.map(doc => doc.data())))) 
                .catch(err => toast.error(err.message))
                .finally(()=>setLoading(false))
        
        }else{

            const q =  query(collection(dbFirebase, "Productos"),where("categoria", "==", category))

            getDocs(q)
            .then((res => setProductos(res.docs.map (doc =>  doc.data())))) 
            .catch(err => toast.error(err.message))
            .finally(()=>setLoading(false))
        }
    },[category])


    return loading ? <Loader/>  : <CarruselMulti productos={productos}/> 

}

export default CarruselMultiContainer