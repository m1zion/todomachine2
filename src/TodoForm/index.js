import { Box, Button, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, {useContext, useState} from "react";
import { TodoContext } from '../TodoContext';
import CloseIcon from '@mui/icons-material/Close';
import './TodoForm.css';
function TodoForm () {
    const {
        setOpenModal,
        addTodo,
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
        setOpenModal(false);
    }
    const handlePopup = (event) => {
        event.preventDefault();
        setOpenModal((prev) => !prev);
    }  
    return(
        <Box className="popup">
            <Box className='popup-inner'>
                <IconButton onClick={handlePopup} className='close-btn'><CloseIcon/></IconButton>
                <Box className="tableHeaderPopup">
                    <Box className='todoFormTitle'>
                        <Typography className="popupTitle" variant='h6'>Nuevo Todo</Typography>
                    </Box>                    
                    <Stack className="formContainer" spacing={2} direction = {{xs:"column", md:"column", lg:"row"}} >
                        <Box
                        className="formContainerForm"
                        component="form"
                        autoComplete="off"
                        noValidate
                        >
                            <Stack alignItems="center" spacing={2}>
                                <TextField className="InputBasic"
                                    required
                                    id="tarea" 
                                    label="Tarea" 
                                    size="small"
                                    name="tarea"
                                    autoComplete='on'
                                    value={task}
                                    onChange={onChange}
                                ></TextField>                    
                            </Stack>
                        </Box> 
                    </Stack>
                    <Box className="popupButton">
                        <Button  onClick={handleSubmit}  variant="contained"  sx={{textTransform: 'none'}} className="botonCrear" >GUARDAR</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export { TodoForm }