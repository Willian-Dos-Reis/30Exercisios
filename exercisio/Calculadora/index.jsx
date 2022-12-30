import React, {useState} from 'react'
import './style.css'

function Calculadora() {
    const [num, setNum]=useState(0)
    const [numeroAntigo, setnumeroAntigo] =useState(0)
    const [operador, setOperador] =useState(0)
    
    function inputNum(e){
      var input = e.target.value
      if(num==0){ //se num for igual a zero
        setNum(input) //substitua o v atual para a var input
      }else{ //se nao some o antigo com o atual
        setNum(num + input)
      }
    }

    function porcentagem(){
      setNum(num / 100)
    }

    function apagar(e){
      setNum(0)
    }

    function mm(){
      if (num>0){
       setNum(-num) 
      }else{
        setNum(Math.abs(num))
      }
      
    }
    function dados(e){
      var operadorInput = e.target.value
      setOperador(operadorInput);
      setnumeroAntigo(num);
      setNum(0);
    }


    function calcular(){
      if(operador === "/")
      setNum(numeroAntigo / num)

      else if (operador === "+"){
        setNum(parseFloat(numeroAntigo) + parseFloat(num))

      }
      else if (operador === "-"){
        setNum (numeroAntigo - num)
      }
      
      else if (operador === "x"){
        setNum(numeroAntigo * num)

      }
    }
  

  return (
    <div className='bt'>
      <h1>{num}</h1>
      <button onClick={apagar} >C</button>
      <button  onClick={mm}  >+/-</button>
      <button onClick={porcentagem}>%</button>
      <button className='yellon' onClick={dados} value={"/"} >/</button><br />
      <button onClick={inputNum} value={7} >7</button>
      <button onClick={inputNum} value={8} >8</button>
      <button onClick={inputNum} value={9} >9</button>
      <button className='yellon' onClick={dados} value={"x"} >X</button><br />
      <button onClick={inputNum} value={4} >4</button>
      <button onClick={inputNum} value={5} >5</button>
      <button onClick={inputNum} value={6} >6</button>
      <button className='yellon' onClick={dados} value={"-"} > - </button><br />
      <button onClick={inputNum} value={1} >1</button>
      <button onClick={inputNum} value={2} >2</button>
      <button onClick={inputNum} value={3} >3</button>
      <button className='yellon' onClick={dados} value={"+"} >+</button><br />
      <button onClick={inputNum} value={0}  className='zero' >0</button>
      <button onClick={inputNum} value={","}>,</button>
      <button className='yellon' onClick={calcular}>=</button>
    </div>
    
  )
}

export default Calculadora
