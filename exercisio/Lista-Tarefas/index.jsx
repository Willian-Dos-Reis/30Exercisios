import { useState } from 'react';
import  './style.css'

function ListaTarefas(){
 
    function console(){
        cosnt [text,setText] = useState('')
        setText(e.target.value)
         
    }


return (
    <div className='bloco' >
        <h1>to do list</h1>

        <div className='input' >
            <input type="text" placeholder='Escreva sua tarefa'
            value={text}
            onChange={(e)=>console(e)}
            />
            <button variant='text'> incluir </button>
        </div>

        <div className='test'>
            <h3>Teste</h3>
            <button>delete</button>
            {text}
          
            
        </div>

        
    </div>
)

}

export default ListaTarefas
