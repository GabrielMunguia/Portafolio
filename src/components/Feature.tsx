import React from 'react'
import style from '../assets/css/components/feature.module.css'	
import { features } from '../interfaces/components'



export const Feature = React.memo(({descripcion,img,titulo}:features) => {

    
  return (
    <div className={style.container}>
        <img className={style.image} src={img} alt={titulo} />
        <div className={style.text}>
            <span className={style.title}>{titulo}</span>
            <p className={style.description}>{descripcion}</p>
            </div>
    </div>
  )
})
