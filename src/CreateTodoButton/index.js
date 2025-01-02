import { Button } from '@mui/material';
import React from 'react';
import './CreateTodoButton.css';
function CreateTodoButton(){ //Componentes
    return (
      <Button variant="contained" className="botonCrear" onClick={(event) => {console.log(event)}}>Crear</Button>
    );
}
export {CreateTodoButton};