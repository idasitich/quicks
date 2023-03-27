import React from "react";
import { Link,Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import '../chat.css'
import axios from 'axios';

export default function ChatPerson(){
    const [privates, setPrivates ]=useState([]);
    const [formData, setFormData]=useState({
      name:" ",
      text: " "
    })

    useEffect(()=>{
    axios.get('https://641bfe561f5d999a446e82cc.mockapi.io/api/private').then(res=>{
    setPrivates(res.data);
    })
    },[]);
    console.log(privates)

    function handleChange(e){
      let data = {...formData};
      data[e.target.name]=[e.target.value];
      setFormData(data);
    }
    
    function handleSubmit(e){
      e.preventDefault();
      let name ="You";
      let date = new Date();
     
      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      let currentDate = `${day}-${month}-${year}`;
      let NewData = { text: formData.text, name: name, date: currentDate  };

      
      
      axios.post('https://641bfe561f5d999a446e82cc.mockapi.io/api/private', NewData).then(()=>{
        privates.push(NewData)
        setPrivates([...privates])
      })
      setFormData({text:" "})
    }
   
    return(
    <>
    <div className="container-box">
      <div class="col-md-12">
      <div class=" box-primary direct-chat direct-chat-primary">
        <div class="box-header with-border">
          <ul className="head-arrow">
            <li>
              <Link to='/Msg'>
              <button type="button" class="btn btn-box-tool" ><i class="fa-solid fa-arrow-left"></i></button>
              </Link>
              <Outlet/>
            </li>
            <li>
            <h3 class="box-title">FastVisa Support</h3>
            </li>
          </ul>
          <div class="box-tools pull-right">
            <Link to='/'>
            <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </Link>
          </div>
        </div>
        <div class="body-chat2">
              {  
              privates.map((user)=>{
                  if(user.name!=="You"){
                      return (
                          <>
                          <div class="direct-chat-msg right">
                          <div class="direct-chat-info clearfix">
                          <span >{user.name}</span> 
                          </div>
                          <div class="direct-chat-text">
                          {user.text}
                          </div>
                          </div> 
                          </>
                      );
                  }else{
                      return(
                          <>
                          <div class="direct-chat-msg">
                          <div class="name-position">
                          <span class="">{user.name}</span>
                          </div>
                          <div class="direct-chat-text">
                              {user.text}
                          </div>
                          </div>
                          </> 
                      );
                  }
              })
              }
            </div>
            <div class="body-send2">
              <form onSubmit={handleSubmit} >
                <div class="input-group">
                  <input type="text" 
                  name="text" 
                  placeholder="Type a new message" 
                  class="form-control"
                  onChange={handleChange}
                  value={formData.text}
                  />
                  <span class="input-group-btn">
                    <button type="submit" class="btn btn-primary btn-flat">Send</button>
                  </span>
                </div>
              </form>
            </div>
      </div>
    </div>
  </div>
  </>
    )
}