import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim()) {
      // Ensure non-empty input
      addTodo(value.trim());
      setValue(""); // Clear the input field
    } else {
      // Optionally: Display an alert or error message
      alert("Please enter a task."); // Simple alert for demonstration
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="What is the task today?"
        aria-label="Task input"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
};
