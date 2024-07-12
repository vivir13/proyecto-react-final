import React from "react";
import "./Equipo.css";
import Colaborador from "components/Colaborador/Colaborador";

const Equipo = (props) => {
  const { colorPrimario, colorSecundario, titulo, colaboradores } = props.datos;
  const { eliminarColaboradoe, actualizarColor} =props

  const estiloTitulo = { borderColor: colorPrimario };

  return (
    <section className="equipo" style={{ backgroundColor: colorSecundario }}>
      <button style={{ backgroundColor: colorPrimario, borderColor: colorSecundario }}>
        {titulo}
      </button>


      <div className="colaboradores">
        
        {colaboradores &&
          colaboradores.map((colaborador, index) => (
            <Colaborador
              key={index}
              datos={colaborador}
            
            />
          ))}
      </div>
    </section>
  );
};

export default Equipo;
