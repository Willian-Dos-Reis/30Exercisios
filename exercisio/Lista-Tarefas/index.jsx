import { useState } from 'react';
import  './style.css'
import {IoMdAdd, IoMdAlert, IoMdClose} from 'react-icons/io'





function ListaTarefas(){

    const [task,setTask] = useState('')

    //para armazenar todas taks criadas no input em um array//
    const [tasks,setTasks] = useState([])

    function HanderCreateTask(){
        if(task === ''){
            //erro
            alert('Digitr alguma taks')
        }else{
            
            //gerando um id aleatorio
            const idRandom = (num)=> Math.floor(Math.random()*num)

            //cada taks vai ter id,texto, e se ta completa
            const newTask = {
            id: idRandom(12300), //const gerador
            title:task, //oq vai ta escrito no input
            isComplete:false} //estado da checkbox

            //ele pega a antiga taks e adiciona embaixa a nova
            setTasks([...tasks, newTask])

            //vai resetar o input
            setTask('')
        }

    }
 
    //mudando a cor
    
    const handleToggleTaskCompletion = (id) => {

		const taskComplete = tasks.map(task => {
			if (task.id === id) {
				return { ...task, isComplete: !task.isComplete }
			}

			return task
		})

		setTasks(taskComplete)
	}

    

    //apagar
    function Delete(id){
        setTasks(tasks.filter(remove => remove.id !== id))
    }

    


return (
    <div className='app' >
    
       
       <div className='todo'>

          <header>
            <input type="text"
            value={task}
            onChange={(ev)=>setTask(ev.target.value)}
            />
            <button onClick={HanderCreateTask} ><IoMdAdd></IoMdAdd></button>
          </header>


        
          {tasks.map (task =>(
             <div key={task.id} className='task-container' >

                <div className={task.isComplete?'checkbox-and-titleComplet'  :'checkbox-and-title'}>
                
                    <label className='checkbox-container' >
                        <input type="checkbox" onClick={()=>handleToggleTaskCompletion(task.id)} />
                        <span className='checkmark'></span>
                    </label>
                    <p>{task.title}</p>
                </div>

                <div>
                    <IoMdClose onClick={() =>Delete(task.id)}  ></IoMdClose>
                </div>

                
            <div>
            
            </div>

            </div>
          ))}

           


       </div>
        
    </div>
)

}

export default ListaTarefas
