import { Typography } from '@mui/material';
import React, { useContext } from 'react';
import './TodoCounter.css'; 
import { TodoContext } from '../TodoContext';
function TodoCounter(){ //Componentes
    const { 
      completedTodos,
      totalTodos}= useContext(TodoContext);
    return (
      <Typography variant='h6' className='counterTitle'>Has completado {completedTodos} de {totalTodos} tareas.</Typography>
    );
}
export {TodoCounter};