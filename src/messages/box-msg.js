import React from 'react';
import './box-msg.css';
import groupO from '../assets/2org.png'
import org2 from '../assets/org2.png'
import { Link,Outlet } from 'react-router-dom';



export default function Msg(){

    return(
        <>
        <div className='container-box'>
                    <div class="headind_srch">
                        <div class="srch_bar">
                        <div class="stylish-input-group">
                            <input type="text" class="search-bar"  placeholder="Search"/>
                            <span class="input-group-addon">
                            <button type="button"><i class="fa fa-search"></i> </button>
                            </span> </div>
                        </div>
                    </div>
                    <div class="inbox_chat">
                        <Link to="Chat-Group">
                          <div class="chat_list" >
                                <div class="chat_people">
                                <div class="chat_img"> <img src ={org2} alt="sunil"/> </div>
                                <div class="chat_ib">
                                    <h5 style={{display:"inline-block"}}>109220-Naturalization<span class="chat_date"></span></h5>
                                    <p className="name" >Cameron Philips</p>
                                    <p className="text">Please check this out!</p>
                                </div>
                                </div>
                                </div>
                          </Link>
                         
                          <Link to="Chat-Person">
                          <div class="chat_list" >
                                <div class="chat_people">
                                <div class="chat_img"> <img src ={org2} alt="sunil"/> </div>
                                <div class="chat_ib">
                                    <h5 style={{display:"inline-block"}}>FastVisa Support<span class="chat_date"></span></h5>
                                    <p className="text">Hey there welcome to your inbox!</p>
                                </div>
                                </div>
                                </div>
                          </Link>
                </div>
        </div>
        <Outlet />
        </>
    );
};