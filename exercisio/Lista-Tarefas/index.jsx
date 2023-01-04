import { useState } from 'react';
import  './style.css'
import {IoMdAdd, IoMdAlert} from 'react-icons/io'


function ListaTarefas(){
return (
    <div className='app' >
       
       <div className='todo'>

          <header>
            <input type="text"/>
            <button><IoMdAdd></IoMdAdd></button>
          </header>

            <div className='task-container' >

                <div className='checkbox-and-title'>

                    <label className='checkbox-container' >
                        <input type="checkbox"/>
                        <span className='checkmark'></span>
                    </label>
                    <p>criar videos</p>
                </div>

                <div>
                    <IoMdAlert></IoMdAlert>
                </div>

                
            <div>
            
            </div>

            </div>


       </div>
        
    </div>
)

}

export default ListaTarefas
