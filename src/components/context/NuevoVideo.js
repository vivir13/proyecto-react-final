
import React, { createContext, useContext, useState } from "react";
export const NuevoVideoContext= createContext();
NuevoVideoContext.displayName= "NuevoVideo";

export default function  NuevoVideoProvider ({children}) {
    const[ NuevoVideo, setNuevoVideo] =useState([]);

   

    function agregarNuevoVideo(nuevoNuevoVideo) {

        const NuevoVideoRepetido= NuevoVideo.some(
            (item) =>item.id === nuevoNuevoVideo.id
       );

       let nuevaLista = [...NuevoVideo];
       if(!NuevoVideoRepetido) {
        nuevaLista.push(nuevoNuevoVideo);
        setNuevoVideo(nuevaLista);
       } else{
       nuevaLista= NuevoVideo.filter((item) => item.id !== nuevoNuevoVideo.id );
      setNuevoVideo(nuevaLista)
    }
    }

    return (
        <NuevoVideoContext.Provider value={{ NuevoVideo, agregarNuevoVideo }}>
          {children}
        </NuevoVideoContext.Provider>
      );

}

    export function useNuevoVideoContext() {
    return useContext(NuevoVideoContext);
    }

