import { useState } from 'react';
import  './style.css'

function ListaTarefas(){

    const [nome,setNome] = useState("")

    function carregar(e){
        setNome(e.target.value)
    }


return (
    <div className='bloco' >
        <h1>to do list</h1>

        <div className='input' >
            <input type="text"placeholder='Escreva sua tarefa'
            value={nome}
           onChange={carregar}
            />
            <button onClick={(e)=>carregar(e)} > incluir </button>
        </div>

        <div className='test'>
            <h3>Teste {nome}</h3>
            <button>delete</button>

            
          
            
        </div>

        
    </div>
)

}

export default ListaTarefas
