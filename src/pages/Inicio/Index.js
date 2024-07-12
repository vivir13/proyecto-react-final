import React, { useState } from "react";
import Banner from "components/Banner/Banner";
import Equipo from "components/Equipo/Equipo";
import NuevoVideo from "pages/NuevoVideo/NuevoVideo";



function Inicio() {

 // Registrar colaborador
 const [colaboradores, actualizarColaboradores] = useState([
  {
    titulo: "Cuándo usar let, var y const?",
   
    imagenUrl: "https://i.ytimg.com/vi/PztCEdIJITY/hqdefault.jpg",
    link: "https://youtu.be/PztCEdIJITY?si=SEHv-SIXSk-IJoyg",
    equipo: "Front End",
  },
  {
    titulo: "¿Qué es JavaScript?",
    imagenUrl: "https://i.ytimg.com/vi/GJfOSoaXk4s/hqdefault.jpg",
    link: "https://youtu.be/GJfOSoaXk4s?si=R9LkdgagzgrWrUDb",
    equipo: "Front End",
  },
  {
    titulo: "Equipo Front End",
    imagenUrl: "https://i.ytimg.com/vi/rpvrLaBQwgg/hqdefault.jpg",
    link: "https://youtu.be/rpvrLaBQwgg?si=k6JgzZGwohNToe17",
    equipo: "Front End",
  },
  {
    titulo: "Spring Framework. ¿Qué es ?",
    imagenUrl: "https://img.youtube.com/vi/t-iqt1b2qqk/maxresdefault.jpg",
    link: "https://youtu.be/t-iqt1b2qqk?si=QorfEvryyg3I5AgJ",
    equipo:"Back End",
  },
  {
    titulo: "¿Qué es SQL y NoSQL?",
    imagenUrl: "https://img.youtube.com/vi/cLLKVd5CNLc/maxresdefault.jpg",
    link: "https://youtu.be/cLLKVd5CNLc?si=RiR8H4rzSVBLNt13",
    equipo:"Back End",
  },
  {
    titulo: "Simplificando tu código en Java: Conoce los enum",
    imagenUrl: "https://img.youtube.com/vi/EoPvlE85XAQ/maxresdefault.jpg",
    link: "https://youtu.be/EoPvlE85XAQ?si=xrKa18pIP2M9J3RN",
    equipo:"Back End",

  },
  {
    titulo: "¿Qué son las Soft Skills?",
    imagenUrl: "https://img.youtube.com/vi/vhwspfvI52k/maxresdefault.jpg",
    link: "https://youtu.be/vhwspfvI52k?si=EyPArRlqGW8YBcTR",
    equipo: "Innovación y Gestión",
  },
  {
    titulo: "7 Soft Skills más deseadas por las empresas ",
    imagenUrl: "https://img.youtube.com/vi/YhR7Zp8NUzE/maxresdefault.jpg",
    link: "https://youtu.be/YhR7Zp8NUzE?si=au1iiDHoc1i0MxYu",
    equipo: "Innovación y Gestión",
  },
  {
    titulo: "¿Qué son las metodologias ágiles?",
    imagenUrl: "https://img.youtube.com/vi/6N3OkLCfK-0/maxresdefault.jpg",
    link: "https://youtu.be/6N3OkLCfK-0?si=DtDimAjIzpvwW_Vy",
    equipo: "Innovación y Gestión",
  }
])


    const registrarColaborador = (colaborador) => {
       console.log("Nuevo colaborador", colaborador);
  // Spread operator
  actualizarColaboradores([...colaboradores, colaborador]);
};



  //lista de equipo
  const equipos = [
    {
    titulo:"Front End",
    colorPrimario:"#6BD1FF",
    colorSecundario:"#000", 
    },
    {
      titulo:"Back End",
      colorPrimario:"#00C86F",
      colorSecundario:"#000", 
      },
      {
        titulo:"Innovación y Gestión",
        colorPrimario:"#FFBA05",
        colorSecundario:"#000",
        }
      ];
  
 // Variable para determinar si se muestra el componente NuevoVideo
 const mostrarNuevoVideo = false;

  return (
    <div className="App">
      <Banner img="/img/player.png" color="rgba(0, 0, 0, 0.5)" />

      {/*{mostrarFormulario nuevo video ? >formulario /> :<></>}*/}  
		
      {mostrarNuevoVideo && (
        <NuevoVideo
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      )}

{equipos.map((equipo) => (
        <Equipo
          key={equipo.titulo}
          datos={{
            titulo: equipo.titulo,
            colorPrimario: equipo.colorPrimario,
            colorSecundario: equipo.colorSecundario,
            colaboradores: colaboradores.filter(
              (colaborador) => colaborador.equipo === equipo.titulo
            ),
          }}
        />
      ))}
    </div>
  );
}

export default Inicio;
