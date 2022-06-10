import {useState} from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'

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

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
