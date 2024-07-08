import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoTable from './components/TodoTable';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('itemsJson')) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('itemsJson', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, description) => {
    setTodos([...todos, { title, description }]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((todo, i) => i !== index);
    setTodos(newTodos);
  };

  const clearAll = () => {
    if (window.confirm("Do you really want to clear the list?")) {
      setTodos([]);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container my-5">
        <TodoInput addTodo={addTodo} clearAll={clearAll} />
        <TodoTable todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
