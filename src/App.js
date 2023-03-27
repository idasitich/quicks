import './App.css';
import React from 'react';
import tog from './assets/toggle.png'
import { Link, Routes, Route } from 'react-router-dom';
import Msg from './messages/box-msg'
import BoxTask from './task/box-task'
import Home from './home'
import TaskIcon from './assets/task';
import Inbox from './assets/inbox';
import ChatGroup from './messages/content/group/chat';
import ChatPerson from './messages/content/person/chat';
import Task from './task/task';




function App() {

  function Toggle(){
    const toggle = document.getElementById('toggle');
    toggle.classList.toggle('active')
    let task = document.getElementById('task');
    task.classList.remove('task');
    let task2 = document.getElementById('task2');
    task2.classList.remove('task2');
    let inbox = document.getElementById('inbox');
    inbox.classList.remove('inbox');
    let inbox2 = document.getElementById('inbox2');
    inbox2.classList.remove('inbox2');
  }
  function displayInbox(){
    let task = document.getElementById('task');
    task.classList.remove('task');
    let task2 = document.getElementById('task2');
    task2.classList.remove('task2');

    let inbox = document.getElementById('inbox');
    inbox.classList.add('inbox');
    let inbox2 = document.getElementById('inbox2');
    inbox2.classList.add('inbox2');

  }
  function displayTask(){
    let inbox = document.getElementById('inbox');
    inbox.classList.remove('inbox');
    let inbox2 = document.getElementById('inbox2');
    inbox2.classList.remove('inbox2');

    let task = document.getElementById('task');
    task.classList.add('task');
    let task2 = document.getElementById('task2');
    task2.classList.add('task2');
  }
 
  
    
    
  
  return (
  <>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Msg' element={<Msg />}>
              <Route path="Chat-Group" element={<ChatGroup  />}/>
              <Route path="Chat-Person" element={<ChatPerson  />}/>
            </Route>
          <Route path='Box-Task' element={<BoxTask />}>
            {/* <Route path='Task' element={<Task day={day} date={date}/>}/> */}
          </Route>
      </Routes>
    <div id='toggle' className='active'>
      <ul className='rata-ul'>
          <li  className='position-task' onClick={displayTask}>
            <p>Task</p>
            <Link to="Box-Task">
              <span id='li-task'>
              <TaskIcon task ={'task'} task2={'task2'}/>
              </span>
            </Link>
          </li>
          <li className='position-inbox' onClick={displayInbox}>
            <p>Inbox</p>
            <Link to="Msg">
              <span id='li-msg'>
              <Inbox inbox ={'inbox'} inbox2={'inbox2'}/>
              </span>
            </Link>
          </li>
      </ul>
    </div>
    <Link to="/"><img className='position-toggle' id='icon-toggle' onClick={Toggle} src={tog} alt="" /></Link>
  </>
  );
}

export default App;

