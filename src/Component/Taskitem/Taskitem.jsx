import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import "./Taskitem.css";

function Taskitem({ id, task, isDone, setTasksList, tasksList }) {
  // Toggle task completion status
  const toggleTaskDone = () => {
    if (typeof setTasksList === "function") {
      setTasksList(
        tasksList.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
      );
    } else {
      console.error("setTasksList is not a function");
    }
  };

  // Delete a task from the list
  const deleteTask = () => {
    if (typeof setTasksList === "function") {
      setTasksList(tasksList.filter((t) => t.id !== id));
    } else {
      console.error("setTasksList is not a function");
    }
  };

  // Edit a task
  const editTask = () => {
    const updatedTask = prompt("Edit your task:", task);
    if (updatedTask && updatedTask.trim()) {
      setTasksList(
        tasksList.map((t) =>
          t.id === id ? { ...t, task: updatedTask.trim() } : t
        )
      );
    }
  };

  return (
    <div
      className={`task-item ${isDone ? "task-done" : "task-not-done"}`}
      id={`task-item-${id}`}
      aria-live="polite" // Notify screen readers of task status changes
    >
      <h2 className="task-text">{task}</h2>
      <div id="icons-list">
        <FaCheckCircle
          id="done-icon"
          size={20}
          color={isDone ? "#28a745" : "#888"}
          onClick={toggleTaskDone}
          aria-label={isDone ? "Mark task as not done" : "Mark task as done"}
        />
        <IoTrash
          size={20}
          color="#dc3545"
          onClick={deleteTask}
          aria-label="Delete this task"
        />
        <CiEdit
          size={20}
          color="#007bff"
          onClick={editTask}
          aria-label="Edit this task"
        />
      </div>
    </div>
  );
}

export default Taskitem;
