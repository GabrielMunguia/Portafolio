import React from 'react'
import style from '../assets/css/components/technologieItem.module.css'
interface TechnologieItemProps {
    title:string;
    img:string;
}
export const TechnologieItem = ({title,img}:TechnologieItemProps) => {
  return (
    <div className={style.container}>
        <p className={style.title}>{title}</p>
        <img  className={style.img} src={img} alt={title}/>
    </div>
  )
}
