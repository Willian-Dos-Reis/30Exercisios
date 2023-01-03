import { useState } from 'react';
import  './style.css'

function ListaTarefas(){



return (
    <div>
        <h1>to do list</h1>

        <div>
            <input type="text" placeholder='Escreva sua tarefa' />
            <button type='submit'> incluir </button>
        </div>

        <div className='test'>
            <h3>Teste</h3>
            <button>delete</button>
          
            
        </div>

        
    </div>
)

}

export default ListaTarefas
