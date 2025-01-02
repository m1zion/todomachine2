//import '../App.css';
import React, { useState, useEffect } from 'react';
import {AppUI} from '../App/AppUI';
import { useLocalStorage } from './useLocalStorage';
const defaultTodos = [
  {id: 0, text: 'Cortar cebolla', completed: true},
  {id: 1, text: 'Tomar el curso de react', completed: false},
  {id: 2,text: 'Cenar', completed: false},
  {id: 3,text: 'Hacer ejercicio', completed: true}
];
function App() {
  //Nos traemos las variables de local storage
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error} = useLocalStorage('todos_v1',defaultTodos); // return [item,saveItem];
  const [searchValue,setSearchValue] = useState('');
  //====Estados derivados
  const completedTodos = todos.filter(todo => !!todo.completed).length; //!! Asegurarnos que sean valores falsos o verdaderos
  const totalTodos = todos.length;
  //console.log(todos);
  const filteredTodos = todos.filter(todo => 
    todo.text && todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );
  //====Fin estados derivados
  const eliminaTodo = (id) =>{
    //==========SOLUCION CHATGPT
    //setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    //===========SOLUCION PLATZI
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id == id
    );
    newTodos.splice(todoIndex,1); //SPLICE corta el arreglo a partir de una posicion
    saveTodos(newTodos); //Esto es el saveItem de mi hook, le envia el array completamente nuevo
  }
  function toggleTodoCompletion(id) {
    //===========SOLUCION PLATZI
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.id == id
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    //SOLUCION CHAT
    /*saveTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );*/
  }

  //Ejercicio de UseEffect ===================================================  
  //[] => Esto hace que se ejecute una sola vez
  //[totalTodos] => Esto hace que solo cuando cambie totalTodos
  /*console.log("Log1");
  useEffect(()=>{
    console.log("looog2");
  },[totalTodos]); 
  console.log("log3");*/
  //Fin de ejercicio de UseEffect ===================================================
  //La idea es que APPUI tenga solo los elementos stateLess, la funcionalidad (funciones las hacemos aqui)
  return (
    <AppUI 
    loading={loading}
    error={error}
    completedTodos={completedTodos}
    totalTodos={totalTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    filteredTodos={filteredTodos}
    eliminaTodo={eliminaTodo}
    toggleTodoCompletion={toggleTodoCompletion}
    />
  );
}
export default App;