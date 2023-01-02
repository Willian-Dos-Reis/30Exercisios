import { useState } from 'react';
import './style.css'

function ListaTarefas(){



return (
    <div>
        <h1>to do list</h1>

        <form onSubmit={''}>
            <input type="text" placeholder='Escreva sua tarefa' />
            <button type='submit'> incluir </button>
        </form>
    </div>
)

}

export default ListaTarefas
