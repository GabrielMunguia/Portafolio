import React, { useCallback, useEffect, useState } from 'react'
import { technologies } from '../interfaces/components';
import { getTechnologies } from '../services/porfatolio';
import { TechnologieItem } from './TechnologieItem';
import styled from '../assets/css/components/Skills.module.css'
export const Skills = () => {
    const [skills, setSkills] = useState<technologies[]>([]);

    useEffect(() => {
        const getData= async()=>{
            const resp= await getTechnologies();
          setSkills([...resp.payload.tecnologias])
        }
        getData()
    }, [])
  return (
    <div className={styled.container} >
        <h2 className={styled.title}>TECNOLOGIAS</h2>
        <div >
        <div className={styled.container_items}>
            {
                skills.map((item:any,index:number)=>(
                    <div  className={styled.item} key={index}>
                       <TechnologieItem title={item.titulo} img={item.img}/>
                    </div>
                ))
            }
        </div>
        </div>
       
    </div>
  )
}
