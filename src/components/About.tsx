import React, { useEffect, useState } from 'react'
import styled from '../assets/css/components/about.module.css'
import { features } from '../interfaces/components'
import { getCharacteristics } from '../services/porfatolio'
import { Feature } from './Feature'
export const About = () => {
 
  const [featuresList, setFeaturesList] = useState<features[]>([])
useEffect(() => {
 const getData=async()=>{
    const resp= await getCharacteristics();

    setFeaturesList([...resp.payload.caracteristicas])	

 }
    getData()
}, [])
   
  return (
    <div className={styled.container}>
      <h2 className={styled.title}>SOBRE MI  </h2>
     {
        featuresList.map((item:any,index:number)=>(
         <div className={styled.item} key={index}>
           <Feature  descripcion={item.descripcion} img={item.img} titulo={item.titulo} />
         </div>
        ))
     }
    </div>
  )
}
