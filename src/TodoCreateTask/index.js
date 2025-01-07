import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState, useContext } from 'react';
import { TodoContext } from '../TodoContext/index.js';
import imagen from '../assets/images/95214.png';
function TodoCreateTask(){ //Componentes
    const { 
      addTodo 
    } = useContext(TodoContext);
    const [task,setTask] = useState('');
    const onChange = (event) => {
        setTask(event.target.value);
    }
    const handleSubmit = (event) => {
      if (!task || task.length <= 3 || !/^[a-zA-Z0-9\s]+$/.test(task)) {
        alert("Favor de escribir un toDo valido mayor a 3 caracteres.");
        return;
      }
      addTodo(task);
      setTask('');
    }
    return (
      <>
        <Box className='counterTitle2'>
          <Typography variant='h5' >Escribe un nuevo</Typography><Typography variant='h5' className='textDark'> ToDo.</Typography>
        </Box>       
        <TextField  
          sx={{width:'95%',backgroundColor:'white'}} 
          size="small" 
          id="outlined-basic" 
          variant="outlined"
          value={task}
          onChange={onChange} 
        />
        <Button onClick={handleSubmit}  variant="contained"  sx={{textTransform: 'none'}} className="botonCrear">CREAR</Button>
        <img 
        src={imagen}
        alt="Description of the image" 
        style={{ width: '50%', height: 'auto', marginTop: '10px' }} 
        />
      </>
    );
}
export {TodoCreateTask};