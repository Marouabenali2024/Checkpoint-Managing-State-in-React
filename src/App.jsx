import { useState } from "react";
import "./App.css";
import Addtask from "./Component/Addtask/Addtask";
import Tasklist from "./Component/Tasklist/Tasklist";

function App() {
  // State to manage the list of tasks
  const [tasksList, setTasksList] = useState([
    { id: 1, task: "Task 1", isDone: false },
    { id: 2, task: "Task 2", isDone: false },
  ]);

  console.log("tasksList", tasksList);

  return (
    <div id="App">
      <h1>To Do App</h1>
      {/* Pass tasksList and setTasksList as props to Addtask */}
      <Addtask tasksList={tasksList} setTasksList={setTasksList} />
      {/* Pass tasksList and setTasksList to Tasklist */}
      <Tasklist tasksList={tasksList} setTasksList={setTasksList} />
    </div>
  );
}

export default App;
