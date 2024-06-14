import ToDoList from './ToDoList'
import './App.css'
import { CiSettings } from "react-icons/ci";
import { RiFocus2Fill } from "react-icons/ri";

function App() {
  return (
    <>
      <div id="sidebar">
        <h3>Clock</h3>
        
        <h1><CiSettings />Settings</h1>
        <nav>
          <ul>
            <li>
              <CiSettings />
              <a href="">Focus sessions</a>
            </li>
            <li>
              <CiSettings />
              <a href={`/timer`}>Timer</a>
            </li>
            <li>
              <CiSettings />
              <a href={`/alarm`}>Alarm</a>
            </li>
            <li>
              <CiSettings />
              <a href={`/stopwatch`}>Stopwatch</a>
            </li>
            <li>
              <CiSettings />
              <a href={`/worldclock`}>World clock</a>
            </li>
          </ul>
        </nav>
      </div>
      <ToDoList />
    </>
  )
}

export default App
