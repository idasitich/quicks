import React, { useEffect, useState } from "react";
import './task.css'
import Task from "./task";
import axios from "axios";



export default function BoxTask(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    
    function showTask(){
        let show = document.getElementById('show');
        show.classList.toggle('none');
    }
    
    const [task, setTask]=useState([]);
    const [text, setText]=useState({
        name:" ",
        tanggal:" ",
        komen:" "
    });
 
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.log(error));
  };

    function handleChange(e){
        let data = {...text};
        data[e.target.name]=[e.target.value]
        setText(data);
    }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(text.komen)        
    let name = text.name;
    let komen = text.komen;
    let tanggal = text.tanggal;
    console.log(tanggal)
    let NewData = {name: name, username:tanggal, email: komen,  };

    await axios.post("https://jsonplaceholder.typicode.com/users", NewData)
      .then(() => {
       task.push(NewData);
        setTask([...task]);
      })
      .catch((error) => console.log(error));
      setText({komen:" ", name:" "})

  };

//   const onEdit = async (id, name, email) => {
//     await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//       method: "PUT",
//       body: JSON.stringify({
//         name: name,
//         email: email
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8"
//       }
//     })
//       .then((response) => {
//         if (response.status !== 200) {
//           return;
//         } else {
//           return response.json();
//         }
//       })
//       .then((data) => {
//         // setUsers((users) => [...users, data]);
//         const updatedUsers = task.map((task) => {
//           if (task.id === id) {
//             task.name = name;
//             task.email = email;
//           }

//           return task;
//         });

//         setTask((task) => updatedUsers);
//       })
//       .catch((error) => console.log(error));
//   };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (response.status !== 200) {
          return;
        } else {
          setTask(
            task.filter((taskData) => {
              return taskData.id !== id;
            })
          );
        }
      })
      .catch((error) => console.log(error));
  };

    return(
        <>
        <div className="container-box">
            <div className="container-header">
                <select className=" btn btn-secondary dropdown-toggle" name="My Task" id="" placeholder="haha">
                    <option value="">My Task</option>
                    <option value="">Personal Errands</option>
                    <option value="">Urgent To-do</option>
                </select>
               <button onClick={showTask} className=" btn btn-primary">New Task</button>
            </div>
            <div className="section">
                <form  onSubmit={handleSubmit}>
                <div id="show" className="none container-body">
                    <div className="dropdown-task">
                        <div className="dropdown-left">
                            <input className="check-box" type="checkbox" />
                            <input name="name" onChange={handleChange} value={text.name} />
                        </div>
                        <div className="dropdown-right">
                            <span style={{color:"red"}}>2 Days Left</span>
                            <span>{day}/{month}/{year}</span>
                            <span className="arrow-top"><i class="fa-solid fa-chevron-up"></i></span>
                            <span className="arrow-top"><i class="fa-solid fa-chevron-down"></i></span>
                            <span className="dot">...</span>
                        </div>
                    </div>
                    <div className="show-task">
                        <div className="date">
                            <span><i class="fa-regular fa-clock"></i></span>
                            <input type="date" name="tanggal" onChange={handleChange} value={text.tanggal}/>
                        </div>
                        <div className="description">
                            <div className="pencil"><i class="fa fa-pencil" aria-hidden="true"></i></div>
                            <span style={{display:"none"}}>No Description</span>
                            <div>
                            <textarea 
                            name="komen"
                            id="" cols="50" rows="3" 
                            placeholder="No Description"
                            onChange={handleChange}
                            value={text.komen}
                            >
                            </textarea>
                            <div><button className=" btn btn-primary">Save</button></div> 
                            </div>
                        </div>
                    </div>
                </div>
                </form>
                <div>
                
                    <Task  day={day} month={month} year={year}  
                       data={task}
                        // onEdit={onEdit}
                        onDelete={onDelete}/>
              
                </div>
            </div>
        </div>
        </>
    );
};