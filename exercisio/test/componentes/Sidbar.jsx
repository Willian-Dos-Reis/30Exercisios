import React, { Component } from 'react'

export class Sidbar extends Component {
  render() {
    return (
      <aside id='sidebar' >
        <p>imagem</p>
        <p className="title">Desenvolvedor Front-End</p>
        <p>Redes Sociais</p>
        <p>Informações de Contato</p>
        <a href="" className='btn'>Dowload Curriculo</a>
      </aside>
    )
  }
}

export default Sidbar