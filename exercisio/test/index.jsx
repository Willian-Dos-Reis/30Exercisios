import React, { useState } from 'react'
import '../test/style/main.sass'
import Sidbar from './componentes/Sidbar'
import Main from './componentes/main'
import '../test/style/componetes/app.sass'



export default function index() {


  return (
    <div id="portifolio" >
      <h1>Willian Reis</h1>
      <Sidbar></Sidbar>
      <Main></Main>

      <div className='aninhar'>
        <p>ola mundo</p>
      </div>

     <button className='greem' >verd</button>
     <button className='red' >red</button>

    </div>
  )
}
