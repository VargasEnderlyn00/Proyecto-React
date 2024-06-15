import React from 'react'
import "./imput.css"

function Imput(props) {
  
  return (
    <div> 
    <label htmlFor={props.name}>{props.label}</label>   
    <input 
      type="text" 
      id={props.name} 
      name={props.name} 
      value={props.value} 
      onChange={props.onChange} 
    /> 
</div>
)

}


export default Imput