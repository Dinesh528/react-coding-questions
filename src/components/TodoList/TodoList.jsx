import React, { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;

    setTodos([...todos, value]);
    setValue("");
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button type="button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
