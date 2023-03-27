import React from "react";

export default function Task({onDelete, data, day, month, year}){
    // const [isEdit, setIsEdit] = useState(false);

    // const handleEdit = () => {
    //   setIsEdit(!isEdit);
    // };
  
    // const handleOnEditSubmit = (evt) => {
    //   evt.preventDefault();
    //   onEdit(id, evt.target.name.value, evt.target.email.value);
    //   setIsEdit(!isEdit);
    // };
    // function showTask2(){
    //     let show2 = document.getElementById('show2');
    //     show2.classList.remove('none');
    // }
    return(
            <>
            {     
            data.map((task)=>(
            <div id="show" className="container-body">
            <div className="dropdown-task">
            <div className="dropdown-left">
                <input className="check-box" type="checkbox" />
                <span>{task.name}</span>
            </div>
            <div className="dropdown-right">
                <span style={{color:"red"}}>2 Days Left</span>
                <span>{day}/{month}/{year}</span>
                {/* <span className="arrow-top"><i class="fa-solid fa-chevron-up"></i></span> */}
                <span  className="arrow-down"><i class="fa-solid fa-chevron-down"></i></span>
                <span className="dot">...</span>
            </div>
        </div>
        <div id="show2" className=" show-task">
            <div className="date">
                <span><i class="fa-regular fa-clock"></i></span>
                <span>{task.username}</span>
                <button onClick={()=>{onDelete(task.id)}} className="delete btn btn-danger">delete</button>
            </div>
            <div className="description">
                <div className="pencil"><i class="fa fa-pencil" aria-hidden="true"></i></div>
                <span style={{display:"none"}}>No Description</span>
                <div>
                <p>
                {task.email}
                </p>
                </div>
            </div>
        </div>
        </div>
            ))
            }
        </>
    )
}