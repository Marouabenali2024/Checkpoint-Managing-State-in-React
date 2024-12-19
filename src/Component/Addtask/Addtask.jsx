import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Addtask.css";

function Addtask({ tasksList, setTasksList }) {
  const inputRef = useRef(null); // Ref to input field
  const [taskValue, setTaskValue] = useState(""); // State for managing the task input

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (!taskValue.trim()) {
      alert("Please add a task");
      return;
    }

    // Add the new task to the task list
    setTasksList([
      ...tasksList,
      { task: taskValue, id: uuidv4(), isDone: false },
    ]);

    setTaskValue(""); // Clear input after adding the task
  };

  useEffect(() => {
    inputRef.current.focus(); // Focus on the input field on mount
  }, []);

  return (
    <form
      id="add-task-block"
      style={{ width: "370px" }}
      onSubmit={handleSubmit} // Handle form submission
    >
      <input
        id="task-input"
        ref={inputRef}
        type="text"
        placeholder="Add New Task"
        value={taskValue} // Controlled component for task input
        onChange={(e) => setTaskValue(e.target.value)} // Update state on change
        aria-label="Task input field" // Improves accessibility
      />
      <button type="submit" aria-label="Add task">
        Add
      </button>
    </form>
  );
}

export default Addtask;
