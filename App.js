import { useState, createContext } from 'react';
import './App.css';
import Tasks from './components/Tasks';

export const Context = createContext(null);

function App () {    
  const [tasks, setTasks] = useState([]);
  const [name,setName] = useState('');

  const handleNewTask = () => {
  const items = [...tasks, name];
  setTasks(items);
  console.log(items)
  }

  return (   

    <Context.Provider value={tasks}>
      <div>
        <input type='text' placeholder='Add your name' value={name} onChange={(e) => setName(e.target.value)}></input>
        <button onClick={handleNewTask}>Add name to list</button> 
        <Tasks />   
      </div>
    </Context.Provider>
  )
}

export default App; 

