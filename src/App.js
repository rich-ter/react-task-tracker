import {useState} from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import Task from './components/Task'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Appointment 1',
        day: 'Tomorrow',
        reminder: true,
    },
    {
        id: 2,
        text: 'Appointment 2',
        day: 'Day after tomorrow',
        reminder: true,        
    },
    {
        id: 3,
        text: 'Appointment 3',
        day: 'Today',
        reminder: false,
    }
])


// Add task
  const addTask = (task) => {
    console.log(task)
  }

// Delete task
  const deleteTask = (id) =>{
    setTasks(tasks.filter((task)=>task.id !== id))    
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header/>
      <AddTask onAdd = {addTask}/>
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> ) : ( 'No tasks' )}
    </div>
  );
}

export default App;
