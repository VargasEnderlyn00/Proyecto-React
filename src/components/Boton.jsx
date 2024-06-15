import React from 'react'
import "./Boton.css"

function Boton({ onClick, texto })  {
  return (
    <div> 
    <button onClick={onClick}>{texto}</button>
    </div>
  )
}

export default Boton