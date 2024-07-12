import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form"
import { useNuevoVideoContext } from "components/context/NuevoVideo";
 import { parse } from 'url';


const NuevoVideo = () => {
  const { NuevoVideo } = useNuevoVideoContext();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  //funcion que se ejecuta al enviar formulario
  const onSubmit = (data) => {
    console.log("Datos enviados:", data);
    NuevoVideo(data);
    reset();
  };


  const imageUrlRegex = /^(https?:\/\/)?\S+\.(\w{2,})(\?\S*)?$/i;
  const videoUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(\?\S*)?$/i;

  const limpiarFormulario = () => {
    reset();
  };

  return (
    <>
      <Contenido>
        <H3>NUEVO VIDEO</H3>
        <P>Complete el formulario para crear una nueva tarjeta de video</P>

        <Formulario onSubmit={handleSubmit(onSubmit)}>

          <H1>Crear Tarjeta</H1>

          <Row>
            <Campo>
              <Label htmlFor="Titulo" className="form-label">
                Titulo
              </Label>
              <Input
                type="text"
                {...register("Titulo", {
                  required: {
                    value: true,
                    message: "Titulo es requerido ",
                  },
                  minLength: {
                    value: 5,
                    message: "Titulo debe tener al menos 5 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Titulo debe tener al menos 20 caractere",
                  }
                })}

                placeholder="título del video "
                className="form-control" />
              {
                errors.Titulo && <ErroMessage> Titulo es requerido </ErroMessage>
              }
            </Campo>

            <Campo>
              <Label htmlFor="Categoria" className="form-label">
                Categoria
              </Label>

              <Select
                {...register("Categoria", { required: true })}

                placeholder="título del video " className="form-select">
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Innovación y Gestión">Innovación y Gestión</option>
              </Select>


            </Campo>
          </Row>

          <Row>
            <Campo>
            <Label htmlFor="imagen" className="formlabel">
    Imagen
  </Label>
  <Input  type="text"
    {...register("imagen", {
      required: "URL de imagen es requerida",
      validate: (value) => {
        if (!imageUrlRegex.test(value)) {
          return "Ingrese una URL de imagen válida.";
        }
        try {
          const parsedUrl = parse(value);
          if (!parsedUrl.hostname) {
            return "Ingrese una URL de imagen válida.";
          }
        } catch (error) {
          return "La URL de imagen no es válida. Por favor, Verifique la URL.";
        }
        return true; // La URL es válida
      }
    })}
    placeholder="Link de la imagen"
    className="formcontrol"
  />
  {errors.imagen && (
    <ErroMessage>{errors.imagen.message}</ErroMessage>
  )}
            </Campo>
            <Campo>
              <Label htmlFor="Video" className="form-label">
                Video
              </Label>
              <Input type="text"

                {...register("Video", {
                  required: "URL de video es requerida",
                  pattern: {
                    value: videoUrlRegex,
                    message: "Ingrese una URL de video válida"
                  }
                })}
                placeholder="Url del video "
                className="form-control" />
              {
                errors.Video && <ErroMessage>{errors.Video.message}</ErroMessage>
              }
            </Campo>
          </Row>

          <Campo>
            <Label htmlFor="Descripción" className="form-label">
              Descripción
            </Label>
            <Descripcion type="text"

              {...register("Descripción", {
                required: {
                  value: true,
                  message: "Descripción es requerido "
                },
                minLength: {
                  value: 10,
                  message: "Descripción debe tener al menos 5 caracteres"
                },

                maxLength: {
                  value: 30,
                  message: "Descripción  debe tener al menos 20 caractere"
                }
              })}


              placeholder="¿de que se trata este vídeo?"
              className="form-control descripcion-input" />
          </Campo>

          <BotonesContainer>
            <BotonGuardar type="submit">Guardar</BotonGuardar>
            <BotonLimpiar
              type="button"
              onClick={limpiarFormulario}>
              Limpiar</BotonLimpiar>
          </BotonesContainer>

        </Formulario>
      </Contenido>
    </>
  );
};

export default NuevoVideo;

// Estilos con styled-components

const Contenido = styled.div`
  padding: 10px;
  background: #262626;
  box-shadow: 0px 2px 4px rgba(12, 247, 247, 0.8);
  
`;

const H3 = styled.div`
  font-size: 40px;
  color: #ffffff;
  padding: 5px;
  font-weight: bold;
`;

const P = styled.div`
  font-size: 16px;
  color: #ffffff;
  padding: 5px;
`;

const Formulario = styled.form`
  color: #fff;
  margin: 20px;
`;

const H1 = styled.h1`
  font-size: 36px;
  color: #ffffff;
  padding: 10px;
  display: flex;
  align-items: flex-start;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px; /* Espacio entre los elementos en la misma línea */
  margin-bottom: 20px;
`;



const Campo = styled.div`
  display: flex;
  flex-direction: column;
  flex:  1;

`;

const Label = styled.label`
  font-size: 16px;
  color: #ffffff;
  margin-bottom: 5px; 
  display: flex;
  flex-direction: row;
  

`;


const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border: 1px solid ;
  border-radius: 4px;
  color: #fff;
  outline: none;
  background-color: transparent;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.8);
  
`;

const Select = styled.select`
  width: 100%;
  padding: 1px;
  font-size: 16px;
  border: 2px solid ;
  border-radius: 4px;
  color: lightgray;
  outline: none;
  background-color: #262626;
  box-shadow: 0px 2px 4px rgba(0, 0,0, 0.8);
`;

const Descripcion = styled.textarea`
  width: 60%;
  padding: 5px;
  font-size: 16px;
  border: 1px solid ;
  border-radius: 4px;
  color: #fff;
  outline: none;
  background-color: transparent;
  box-shadow: 0px 2px 4px rgba(0,0, 0, 0.8);
  min-height: 50px; /* Ajusta la altura mínima según sea necesario */
`;


const Boton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  font-size: 14px;
  
 
`;

const BotonGuardar = styled(Boton)`
  background-color: #262626;
  color: #fff;
  border: 1px solid blue;
  width: 150px; /* Ejemplo: Cambiar el ancho */
  height: 40px; /* Ejemplo: Cambiar la altura */
  font-size: 16px; /* Ejemplo: Cambiar el tamaño de fuente */
  box-shadow: 0px 2px 4px rgba(12, 247, 247, 0.8);
  margin: 0px 20px;

 
`;

const BotonLimpiar = styled(Boton)`
  background-color: #262626;
  box-shadow: 0px 2px 4px rgba(255, 255, 255, 0.3);
  border: 1px solid #fff;
  width: 150px; /* Ejemplo: Cambiar el ancho */
  height: 40px; /* Ejemplo: Cambiar la altura */
  font-size: 16px; /* Ejemplo: Cambiar el tamaño de fuente */
  margin: 0 20px;
 
  
`;
const BotonesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 20px 0; /* Margen arriba y abajo */

`;

const ErroMessage = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  display: flex;
  align-items: flex-start;

`;