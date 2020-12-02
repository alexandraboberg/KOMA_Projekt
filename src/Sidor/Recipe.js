import React from 'react'
import { useParams } from 'react'
import recipes from './../API/API_drinks'
import '../index.css'

const Recipe = (title, instructions) => {
  return (
    <div>
      <img src='' alt='' />
      <h2>{title}</h2>
      <p>{instructions}</p>
    </div>
  )
}

function RecipeDetails(){

  let {id} = useParams();
  //Debug
  console.log(id);

  let getRecipeById = recipes.find(r => r.id === id);
  //Debug
  console.log(getRecipeById);

  const found = id => recipes.find(r => r.id === id);
  //Debug
  console.log(found)

}

export default Recipe
