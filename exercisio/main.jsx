import React from 'react'
import ReactDOM from 'react-dom/client'
import Calculadora from './Calculadora/index.jsx'
import App from './app.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Calculadora></Calculadora>
    <App></App>
  </React.StrictMode>,
)
