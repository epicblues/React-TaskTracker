import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddForm from "./components/AddForm";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [display, setDisplay] = useState(false);

  async function fetchDbAndSetTasks() {
    const response = await fetch("http://localhost:3000/tasks");
    const json = await response.json();
    setTasks(json);
  }
  if (tasks.length === 0) {
    fetchDbAndSetTasks();
  }

  const toggleReminder = (id) => {
    const toggledTask = tasks.find((task) => task.id === id);
    toggledTask.reminder = !toggledTask.reminder;
    fetch("http://localhost:3000/tasks/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toggledTask),
    })
      .then((res) => res.json())
      .then(fetchDbAndSetTasks);
  };
  const deleteTask = (id) => {
    fetch("http://localhost:3000/tasks/" + id, {
      method: "DELETE",
    }).then(fetchDbAndSetTasks);
  };

  const addTask = (task) => {
    console.log(task);
    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(fetchDbAndSetTasks);
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Header
          title="Task Tracker"
          onToggle={(e) => setDisplay(!display)}
          display={display}
        />
        <Route exact path="/">
          {display && <AddForm onAdd={addTask} />}
          {tasks.length !== 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            <h3>No Tasks To Show</h3>
          )}
        </Route>
        <Route exact path="/about">
          <About title="Task Tracker">
            <Link to="/">Go Back!</Link>
          </About>
        </Route>
      </div>

      <Footer>
        <Link to="/about">About</Link>
      </Footer>
    </BrowserRouter>
  );
}

export default App;
