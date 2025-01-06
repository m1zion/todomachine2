import { Button } from '@mui/material';
import React, { useContext } from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
function CreateTodoButton(){ //Componentes
    const { 
      openModal,
      setOpenModal 
    } = useContext(TodoContext);
    const handlePopup = (event) => {
      event.preventDefault();
      setOpenModal((prev) => !prev);
    }   
    return (
      <Button onClick={handlePopup} variant="contained" className="botonCrear">Crear</Button>
    );
}
export {CreateTodoButton};