
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react';
import AddForm from './components/AddForm';


function App() {
  const [tasks, setTasks] = useState([{
    "id" : 1,
    "text" : "Doctors Appointment",
    "day": "March 1st at 2:30pm",
    "reminder": true
  },
  {
    "id" : 2,
    "text" : "Meeting At School",
    "day":"March 3rd at 1:30pm",
    "reminder": true
  },
  {
    "id" : 3,
    "text" : "Food Shopping",
    "day": "March 3st at 11:30am",
    "reminder": false
  }]);
  const [display, setDisplay] = useState(false)

  

  const toggleReminder = (id) => {
    setTasks([...tasks].map(task => task.id === id 
      ? {...task, reminder:!task.reminder} 
      : task))
  }
  const deleteTask = (id) => {
    setTasks([...tasks].filter(task => task.id !== id));
  }

  const addTask = (task) => {
    
    const id = Math.floor(Math.random() * 1000000);
    const newTask = {id, ...task};
    setTasks([...tasks,newTask]);
  }

  

  return (
    <div className="container"> 
      <Header title="Task Tracker" onToggle={(e) => setDisplay(!display)} display={display}/>
      {display && <AddForm onAdd={addTask}/>}
      {tasks.length !== 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : <h3>No Tasks To Show</h3>}
    </div>
    
  );
}



export default App;
