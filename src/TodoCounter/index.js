import { Typography } from '@mui/material';
import React from 'react';
import './TodoCounter.css'; 
function TodoCounter({total,completed}){ //Componentes
    return (
      <Typography variant='h6' className='counterTitle'>Has completado {completed} de {total} tareas.</Typography>
    );
}
export {TodoCounter};