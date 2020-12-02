import React from 'react'
import styled from 'styled-components'
import './Components/Recipe_Button'


const Button_Link = props => {
  const data = props.data;
  const link = "/Recipe/" + data.id;
  
  return (
    <Link to = {link} className = "Recipe_Button">
      <div className = "Outline">
        <img className = "drink_pic" src = {data.picture}/>
        <h1> {data.drink_name} </h1>
      </div>
    </Link>
  )
};

function Button () {
  return (
    <div> 
    {Button_Link}
    </div>
  )
}

export default Button
