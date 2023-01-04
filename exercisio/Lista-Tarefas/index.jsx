import { useState } from 'react';
import  './style.css'
import {IoMdAdd, IoMdAlert, IoMdClose} from 'react-icons/io'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/React-toastify.css'


function ListaTarefas(){

    const [task,setTask] = useState('')

    //para armazenar todas taks criadas no input em um array//
    const [taks,setTasks] = useState([])

    function HanderCreateTask(){
        if(taks === ''){
            //erro
        }else{
            //adiciona
        }

    }
 


return (
    <div className='app' >
        <ToastContainer></ToastContainer>
       
       <div className='todo'>

          <header>
            <input type="text"
            value={task}
            onChange={(ev)=>setTask(ev.target.value)}
            />
            <button onClick={HanderCreateTask} ><IoMdAdd></IoMdAdd></button>
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
                    <IoMdClose></IoMdClose>
                </div>

                
            <div>
            
            </div>

            </div>


       </div>
        
    </div>
)

}

export default ListaTarefas
