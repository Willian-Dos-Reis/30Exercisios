import React from 'react'
import './style.css'

function Calculadora() {


  return (
    <div className='bt'>
      <div className='res' >res</div>
      <button>C</button>
      <button>+/-</button>
      <button>%</button>
      <button className='yellon' >/</button><br />
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='yellon' >X</button><br />
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='yellon'>-</button><br />
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='yellon'>+</button><br />
      <button className='zero' >0</button>
      <button>,</button>
      <button className='yellon'>=</button>
    </div>
    
  )
}

export default Calculadora
