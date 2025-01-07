import { Box, Button } from '@mui/material';
import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
import './BorrarLista.css';
import DeleteIcon from '@mui/icons-material/Delete';
function BorrarLista(){ //Componentes
    const { 
      eliminaTodoAll, 
    } = useContext(TodoContext);
    const handleDelete = (event) => {
      const isConfirmed = window.confirm("Estas seguro de eliminar todas tus tareas?");
      if (isConfirmed) {
          eliminaTodoAll();
      }
    }
    return (
      <Box className="botonBorrarContainer">
        <Button onClick={handleDelete} variant="outlined" className="botonBorrar"><DeleteIcon/>Borrar Lista</Button>
      </Box>
    );
}
export {BorrarLista};