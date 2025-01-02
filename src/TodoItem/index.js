import { Paper, Typography } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import './TodoItem.css';
function TodoItem (props){ //Componentes
  return (    
      <Paper className={`${props.completed ? "paperTasksItemDone" :"paperTasksItem"}`}>
        <DoneIcon className={props.completed ? 'doneIcon': ''} onClick={props.toggleTodoCompletion}/>
        <Typography>{props.text}</Typography>
        <CloseIcon className='closeIcon' onClick={() => {props.eliminaTodo(props.id)}}/>    
      </Paper>
  );
}
export {TodoItem};