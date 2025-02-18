import React, { useContext } from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton/';
import { TodoCreateTask } from '../TodoCreateTask';
import { useTheme  } from '@mui/material/styles';
import { Box,useMediaQuery } from '@mui/material';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { BorrarLista } from '../BorrarLista';
import '../CreateTodoButton/CreateTodoButton.css';
function AppUI () {
  const {
    loading,
    error,
    filteredTodos,
    eliminaTodo,
    toggleTodoCompletion,
    openModal,
    setOpenModal
  } = useContext(TodoContext);
 
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md')); // `true` for `md` and smaller screens
  return (
      <Box className='mainContainer'>
        <Box className='newTaskContainer'>
          <TodoCreateTask/>
        </Box>
        <Box className='task-list'>
          <TodoCounter/>
          <TodoSearch/>
          {/* EL consumer tiene que recibir una funcion */}
        
              <TodoList>
                {loading && <Box><TodosLoading/><TodosLoading/><TodosLoading/></Box>}
                {error && <TodosError/>}
                {(!loading && filteredTodos.length == 0) &&  <TodosEmpty/>}
                {(!loading && !error) && 
                filteredTodos.map(todo => (
                  <TodoItem 
                    key={todo.id}
                    id={todo.id} 
                    text={todo.text}
                    completed={todo.completed}
                    eliminaTodo={eliminaTodo}
                    //toggleTodoCompletion={toggleTodoCompletion}
                    toggleTodoCompletion={() => toggleTodoCompletion(todo.id)}
                  />
                ))}
              </TodoList>                  
          {isMdDown && <><CreateTodoButton/></>}
          <BorrarLista/>
          {openModal && (
            <Modal>
              <TodoForm/>
            </Modal>
          )}
        </Box>      
      </Box>
  );
}
export {AppUI};