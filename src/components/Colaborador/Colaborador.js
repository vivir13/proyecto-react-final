import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from "./Colaborador.module.css";
import ModalEditar from "components/Modal/ModalEditar";
import styled from 'styled-components';
import { BotonesContainer, BotonGuardar, BotonLimpiar } from 'components/Modal/ModalEditar';
import ReactPlayer from 'react-player/youtube';



const Colaborador = (props) => {
  const { equipo, imagenUrl, link, titulo, categoria } = props.datos;
  const [estadoModal, cambiarEstadoModal] = useState(false);
  const [mostrarVideo, setMostrarVideo] = useState(false)

  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Initialize useForm

  const toggleMostrarVideo = () => {
    setMostrarVideo(!mostrarVideo);
  }

  const handleImageClick = (e) => {
    e.preventDefault();
    toggleMostrarVideo();
  };

  const onSubmit = (data) => {
    console.log(data);
    cambiarEstadoModal(true);
  };

  const imageUrlRegex = /^(https?:\/\/)?\S+\.(\w{2,})(\?\S*)?$/i;
  const videoUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(\?\S*)?$/i;

  const limpiarFormulario = () => {
    reset();
  };

  const MensajeError = styled.p`
    color: red;
    margin-top: 5px;
  `;

  return (
    <div className={styles.colaborador}>
      <div className={styles.encabezado}>
        <img src={imagenUrl} alt={titulo} onClick={handleImageClick} />
        {mostrarVideo && (
          <div>
            <ReactPlayer
             url={link}
              width="100%"
              height="100%"
              controls
              src={link.replace('watch?v=', 'embed/')}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboardwrite; encryptedmedia; gyroscope; pictureinpicture"
              allowFullScreen
              style={{ margin: 0, width: '100%', height: '100px' }}
            ></ReactPlayer>
          </div>
        )}


      </div>

      <div className={styles.botones}>
        <button className={styles.botonBorrar} onClick={() => console.log('Borrar')}>
          <img src="/img/eliminar.png" alt="Borrar" className={styles.borrarImage} />
          Borrar
        </button>

        <button onClick={() => cambiarEstadoModal(!estadoModal)}>
          <img src="/img/editar (2).png" alt="Editar" className={styles.editarImage} />
          Editar
        </button>
      </div>

      <ModalEditar
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        titulo={"EDITAR CARD:"}
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={"start"}
        padding={"20px"}
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="titulo">
              <label htmlFor="Titulo" className="form-label">Titulo</label>
              <input
                type="text"
                {...register("Titulo", {
                  required: "Titulo es requerido",
                  minLength: {
                    value: 5,
                    message: "Titulo debe tener al menos 5 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Titulo debe tener menos de 20 caracteres",
                  }
                })}
                className="form-control"
                defaultValue={titulo}
              />
              {errors.Titulo && <MensajeError>{errors.Titulo.message}</MensajeError>}

            </div>

            <div className="categoria" // defaultValue={categoria}
            >
              <label htmlFor="Categoria" className="form-label">Categoria</label>
              <select className="form-select" {...register("Categoria", { required: true })}>
                <option value="Front End">Front End</option>
                <option value="Back End">Back End</option>
                <option value="Innovación y Gestión">Innovación y Gestión</option>
              </select>
            </div>

            <div className="imgUrl">
              <label htmlFor="imagen" className="form-label">Imagen</label>
              <input
                type="text"
                {...register("imagen", {
                  required: " La URL de imagen es requerida",
                  pattern: {
                    value: imageUrlRegex,
                    message: "Ingrese una URL de imagen válida"
                  }
                })}
                className="form-control"
                defaultValue={imagenUrl}
              />
              {errors.imagen && <MensajeError>{errors.imagen.message}</MensajeError>}
            </div>

            <div className="VideoUrl">
              <label htmlFor="Video" className="form-label">Video</label>
              <input
                type="text"
                {...register("Video", {
                  required: "La URL de video es requerida",
                  pattern: {
                    value: videoUrlRegex,
                    message: "Ingrese una URL de video válida"
                  }
                })}
                className="form-control"
                defaultValue={link}
              />
              {errors.Video && <MensajeError>{errors.Video.message}</MensajeError>}
            </div>

            <div className="Descripcion">
              <label htmlFor="Descripción" className="form-label">Descripción</label>
              <input
                type="text"
                {...register("Descripción", {
                  required: "Descripción es requerida",
                  minLength: {
                    value: 10,
                    message: "Descripción debe tener al menos 10 caracteres",
                  },
                  maxLength: {
                    value: 30,
                    message: "Descripción debe tener menos de 30 caracteres",
                  }
                })}
                className="form-control descripcion-input"
              />

            </div>

            <BotonesContainer>
              <BotonGuardar type="submit">Guardar</BotonGuardar>
              <BotonLimpiar type="button" onClick={limpiarFormulario}>Limpiar</BotonLimpiar>
            </BotonesContainer>
          </form>
        </div>
      </ModalEditar>

    </div>
  );
};

export default Colaborador;
