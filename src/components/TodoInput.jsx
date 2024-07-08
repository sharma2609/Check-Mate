import React, { useState } from 'react';

const TodoInput = ({ addTodo, clearAll }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddClick = () => {
    if (title && description) {
      addTodo(title, description);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-describedby="titleHelp"
        />
        <div id="titleHelp" className="form-text">Add an item to the list</div>
      </div>
      <div className="form-floating mb-3">
        <label htmlFor="description">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-outline-dark my-2" onClick={handleAddClick}>Add Todo</button>
      <button className="btn btn-outline-dark my-2" onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default TodoInput;
