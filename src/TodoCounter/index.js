import { Box, Typography } from '@mui/material';
import React, { useContext } from 'react';
import './TodoCounter.css'; 
import { TodoContext } from '../TodoContext';
function TodoCounter(){ //Componentes
    const { 
      completedTodos,
      totalTodos}= useContext(TodoContext);
    return (
      <Box className='counterTitle'>
        <Typography variant='h5' >Has completado</Typography>
        <Typography variant='h5'className='textDark'>{completedTodos}</Typography>
        <Typography variant='h5'>de</Typography>
        <Typography variant='h5'className='textDark'>{totalTodos}</Typography>
        <Typography variant='h5'>toDo's.</Typography>
      </Box>
    );
}
export {TodoCounter};