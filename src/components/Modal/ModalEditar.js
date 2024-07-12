import React from 'react';
import styled from 'styled-components';


const ModalEditar = ({
  children,
  estado,
  cambiarEstado,
  titulo,
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  return (
    <>
      {estado && (
        <Overlay mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
          <ContenedorModal padding={padding}>
            {mostrarHeader && (
              <EncabezadoModal>
                <TituloEditar>{titulo}</TituloEditar>
              </EncabezadoModal>
            )}

            <BotonCerrar onClick={() => cambiarEstado(false)}> x
              
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-circle"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"
                />
                <path
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </BotonCerrar>
            
            {children}
            
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
};

export default ModalEditar;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) =>props.mostrarOverlay ? 'rgba(3, 18, 47, 0.5)' : 'rgba(0, 0, 0, 0)'};
  padding: 30px;
  display: flex;
  align-items: ${(props) => (props.posicionModal ? props.posicionModal : 'center')};
  justify-content: center;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 400px;
  background: #03122f;
  position: relative;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(12, 247, 247, 0.8);
  padding: ${(props) => (props.padding ? props.padding : '10px')};
  color: #fff;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
  }

  input[type='text'] {
    width: calc(100% - 50px);
    padding: 5px;
    font-size: 16px;
    border: 1px solid #6bd1ff;
    border-radius: 4px;
    color: #fff;
    margin-bottom: 20px;
    outline: none;
    background-color: transparent;
    box-shadow: 0px 2px 4px rgba(12, 247, 247, 0.8);
  }

  select {
    width: calc(100% - 50px);
    padding: 1px;
    font-size: 16px;
    border: 2px solid #6bd1ff;
    border-radius: 4px;
    color: lightgray;
    margin-bottom: 20px;
    outline: none;
    background-color: #03122f;
    box-shadow: 0px 2px 4px rgba(12, 247, 247, 0.8);
  }

  label.form-label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type='text'].descripcion-input {
    height: 30px;
  }
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 15px;
`;

const TituloEditar = styled.div`
  font-size: 40px;
  font-weight: bold;
 color: #2271D1;
 display: flex;
  align-items: flex-start;
`;

const BotonCerrar = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  svg {
    width: 100%;
    height: 100%;
    fill: #000;
  }
`;
export const BotonesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: px;
`;

export const BotonBase = styled.button`
  padding: 8px 10px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  
`;

export const BotonGuardar = styled(BotonBase)`
  background-color: #03122f;
  color: #000000;
  margin-right: 10px;
  box-shadow: 0 4px 8px rgba(0, 123, 255, 0.4);
`;

export const BotonLimpiar = styled(BotonBase)`
  background-color: #03122F;
  color: #ffffff;
  margin-right: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;
