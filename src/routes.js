import React from 'react';
import Cabecera from "../src/components/Cabecera/Cabecera";
import Container from "components/Container";
import Pie from "../src/components/Pie/Pie";
import Inicio from "./pages/Inicio/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NuevoVideo from 'pages/NuevoVideo/NuevoVideo';
import NuevoVideoProvider from 'components/context/NuevoVideo';
import ModalEditar from 'components/Modal/ModalEditar';






function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecera />
      <Container>
      <NuevoVideoProvider>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/NuevoVideo" element={<NuevoVideo/>}></Route>
        </Routes>

        <ModalEditar/>
        </NuevoVideoProvider>
       
       

        
      </Container>
      
      <Pie />
   </BrowserRouter>
  );
}

export default AppRoutes;