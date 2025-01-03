//import '../App.css';
import React from 'react';
import {AppUI} from '../App/AppUI';
import { TodoProvider } from '../TodoContext';
function App() {
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
    <TodoProvider>
      <AppUI/> {/*Este es el children*/}
    </TodoProvider>
   
  );
}
export default App;