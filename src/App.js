import React, { useState, useEffect } from 'react';
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';



import Todoform from './Components/Todoform';
import Todos from './Components/Todos';


function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos));
    }
  }, []);

  const addTodos = async todo => {
    setTodos([...todos, todo])
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const markComplete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  return (
    <Container fluid>
      <h1>My Todo-App with LocalStorage</h1>
      
      <Todos todos={todos} markComplete={markComplete} />
      <Todoform addTodos={addTodos} />
    </Container>
  );
}

export default App;
