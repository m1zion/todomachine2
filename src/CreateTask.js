import { TextField, Typography } from '@mui/material';
import React from 'react';
import { CreateTodoButton } from './CreateTodoButton';
import imagen from './assets/images/95214.png';
function CreateTask(){ //Componentes
    return (
      <>
        <Typography variant='h6' className='counterTitle2'>Escribe un nuevo ToDo.</Typography>
        <TextField  sx={{width:'100%',backgroundColor:'white'}} size="small" id="outlined-basic" variant="outlined" />
        <CreateTodoButton/>
        <img 
        src={imagen}
        alt="Description of the image" 
        style={{ width: '50%', height: 'auto', marginTop: '10px' }} 
        />
      </>
    );
}
export {CreateTask};