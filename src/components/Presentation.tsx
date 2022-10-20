import { useEffect, useState } from "react";
import styled from "../assets/css/components/presentation.module.css";
import avatar from "../assets/img/avatar3.png";
import { getPresentation } from "../services/porfatolio";

interface presentation {
  descripcion: string;
  titulo: string[];
}

export const Presentation = () => {
  const [presentacion, setPresentacion] = useState<presentation>({
    titulo: ["Gabriel Alejandro", " Munguia Rivas"],
    descripcion: "Full Stack Developer",
  });
  useEffect(() => {
    const getData = async () => {
      const data = await getPresentation();
      if (data.status) {
        const { titulo, descripcion } = data.payload.presentacion;
        setPresentacion({
          titulo: titulo.split(","),
          descripcion: descripcion,
        });
      }
    };
    getData();
  }, []);

  return (
    <div className={styled.presentation}>
      <div className={styled.stars}></div>

      <h1 className={styled.title}>
        {presentacion.titulo[0]} <br /> {presentacion.titulo[1]} <br />
        <span className={styled.subtitle}>{presentacion.descripcion}</span>
      </h1>
      <div className={styled.avatar_container}>
        <img src={avatar} alt="avatar" className={styled.avatar} />
      </div>
    </div>
  );
};
