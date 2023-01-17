import React, { useState } from 'react'
import '../test/style/main.sass'
import Sidbar from './componentes/Sidbar'
import Main from './componentes/main'

export default function index() {


  return (
    <div id="portifolio" >
      <h1>Willian Reis</h1>
      <Sidbar></Sidbar>
      <Main></Main>
    </div>
  )
}
