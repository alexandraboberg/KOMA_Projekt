import React from 'react'
import styled from 'styled-components'
import './Components/Recipe_Button.css'
import recipes from '../API/API_drinks'


const Button_Link = data => {
  const link = "/Recipe/" + data.id;

  return (
    <p>{data.name}</p>
  )

  const test2 = recipes.recipes
    console.log(test2)
  
  return (
    <Link to = {link} className = "Recipe_Button">
      <div className = "Outline">
        <img className = "drink_pic" src = {data.picture}/>
        {test2.map(d => (<Home name={d.drink_name}/>))}
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

export default Recipe_Button
