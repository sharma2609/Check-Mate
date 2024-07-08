import React from 'react';

const TodoItem = ({ todo, index, deleteTodo }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{todo.title}</td>
      <td>{todo.description}</td>
      <td>
        <button className="btn btn-outline-dark btn-sm" onClick={() => deleteTodo(index)}>Delete</button>
      </td>
    </tr>
  );
};

export default TodoItem;
