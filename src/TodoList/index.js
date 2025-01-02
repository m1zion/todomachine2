import { Box } from '@mui/material';
import React from 'react';
import './TodoList.css';
function TodoList(props){ //Componentes
    return (
      <Box className="paperTasks">
        {props.children}
      </Box>
    );
}
export {TodoList};