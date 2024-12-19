import React from "react";
import { FaArrowCircleUp } from "react-icons/fa"; // Upward arrow icon
import { IoIosInformationCircle, IoMdCloseCircle } from "react-icons/io"; // Information and Close icon
import "./Tasklist.css";
import Taskitem from "../Taskitem/Taskitem";

function Tasklist({ tasksList = [], setTasksList }) {
  // Function to handle setting a task as undone
  const handleSetTaskUndone = (id) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, isDone: false } : task
      )
    );
  };

  return (
    <div id="tasks-list">
      {tasksList.length > 0 ? (
        tasksList.map((task, index) => (
          <Taskitem
            key={task.id || index}
            tasksList={tasksList}
            setTasksList={setTasksList}
            {...task}
          />
        ))
      ) : (
        <div id="no-tasks-message">
          <h1 className="no-tasks-heading">
            {/* Display appropriate icon based on task status */}
            {tasksList.some((task) => task.isDone) ? (
              <IoMdCloseCircle
                onClick={() =>
                  tasksList.length > 0 && handleSetTaskUndone(tasksList[0].id)
                } // Example task ID to reset
                size={40}
                id="undone-icon"
                style={{ cursor: "pointer" }} // Correct inline style for cursor
              />
            ) : (
              <IoIosInformationCircle
                onClick={() =>
                  tasksList.length > 0 && handleSetTaskUndone(tasksList[0].id)
                } // Example task ID to reset
                size={40}
                id="undone-icon"
                style={{ cursor: "pointer" }} // Correct inline style for cursor
              />
            )}
            There are no tasks.
            <p>Start adding tasks!</p>
          </h1>
          <div
            className="no-tasks-icon"
            style={{ position: "absolute", top: "340px", right: "390px" }}
          >
            <FaArrowCircleUp size={50} color="green" aria-hidden="true" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasklist;
