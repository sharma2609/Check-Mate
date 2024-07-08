import React from 'react';
import TodoItem from './TodoItem';

const TodoTable = ({ todos, deleteTodo }) => {
  return (
    <div id="items" className="my-4">
      <h2>Your ToDos</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">S No.</th>
            <th scope="col">Item Title</th>
            <th scope="col">Item Description</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody id="tablebody">
          {todos.map((todo, index) => (
            <TodoItem key={index} index={index} todo={todo} deleteTodo={deleteTodo} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
