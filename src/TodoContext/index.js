import React, { createContext, useState } from "react";
const TodoContext = createContext();
import { useLocalStorage}  from './useLocalStorage';
/*El context tendra todas las variables y funciones
Se importara como TodoProvider y recibira un children, el cual consumira todas estas variables y funciones
Cuando lo importamos en nuestros componente lo llamaremos mediante el provider.consumer*/
function TodoProvider({ children }) { //Provider
    const defaultTodos = [
        {id: 0, text: 'Cortar cebolla', completed: true},
        {id: 1, text: 'Tomar el curso de react', completed: false},
        {id: 2,text: 'Cenar', completed: false},
        {id: 3,text: 'Hacer ejercicio', completed: true}
      ];
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error} = useLocalStorage('todos_v1',defaultTodos); // return [item,saveItem];
    const [searchValue,setSearchValue] = useState('');
    const completedTodos = todos.filter(todo => !!todo.completed).length; //!! Asegurarnos que sean valores falsos o verdaderos
    const totalTodos = todos.length;
    const [openModal,setOpenModal] = useState(true);
    const filteredTodos = todos.filter(todo => 
        todo.text && todo.text.toLowerCase().includes(searchValue.toLowerCase())
    );
    //====Fin estados derivados
    const eliminaTodo = (id) =>{
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.id == id
        );
        newTodos.splice(todoIndex,1); //SPLICE corta el arreglo a partir de una posicion
        saveTodos(newTodos); //Esto es el saveItem de mi hook, le envia el array completamente nuevo
      }
    function toggleTodoCompletion(id) {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id == id
        );
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    }
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            eliminaTodo,
            toggleTodoCompletion,
            openModal,
            setOpenModal,
        }}> { /*Cualquier elemento que le enviemos tentra las propiedades del provider*/}
            {children} 
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider };