import { Box, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { TodoContext } from '../TodoContext';
function TodoSearch(){ //Componentes
    const { 
      searchValue,
      setSearchValue
    }= useContext(TodoContext);
    return (
      <Box sx={{width:'100%',display:'flex', justifyContent:'center'}}>
        <TextField 
        sx={{width:'90%'}} 
        size="small" 
        id="filled-basic" 
        label="Busqueda" 
        variant="filled"
        onChange={(event)=>{setSearchValue(event.target.value)}}
        value={searchValue}
         />
      </Box>
    );
}
export {TodoSearch};