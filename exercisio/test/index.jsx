import React, { useState } from 'react'
import '../test/style.sass'

export default function index() {

    const [nome,setNome] = useState ('')
    const [nomes,setNomes] = useState ([])

    function criar(){
        const newName = {
            title:nome,
        }
        setNomes([...nomes,newName])
        setNome('')
    }

  return (
    <div>
        <input type="text"
         placeholder='escreva'
         onChange={(e)=>setNome(e.target.value)}
         value={nome}
         />
        <button onClick={criar} >enter</button>

        {nomes.map(nome=>(
            <div>
                <h1>{nome.title}</h1>
            </div>
        ))

        }


    </div>
  )
}
