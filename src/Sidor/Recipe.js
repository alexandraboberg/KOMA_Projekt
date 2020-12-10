import React, { useState}  from 'react'
import { Link, useParams } from 'react-router-dom';
import recipes from './../API/API_drinks'
import '../index.css'
import {saveDrink, getDrinks} from '../Saved_Drinks';

function Instructions(data)  {
  return (
      <li>{data.step}</li>
  )
}

function Ingridients(data)  {
  return (
  <li>{data.ingridient_name} {data.quantity} {data.measurement}</li>
  )
}



const Recipe = () => {
  //Get id from url
  let {id} = useParams()
  //get recipe from id
  let foundRecipe = recipes.recipes.find( r => r.id === id)

  //Save funktion
  const initialState = getDrinks().includes(foundRecipe.id);
  const [saved, setSaved] = useState(initialState);

  function handleSave(event){
    event.preventDefault()
    saveDrink(foundRecipe.id)
    setSaved(getDrinks().includes(foundRecipe.id));
    
  }

  return (
    <div className='screen'>
      <div className='headerLine'/>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2>RECEPT</h2>
        
      </div>
      <div className='content2'>

        {/* SAVE BUTTON */}
        <svg className='recipeSaveButton' xmlns='http://www.w3.org/2000/svg' fill={saved ? "#FFDF81" : "none"} viewBox='0 0 22 22' onClick={handleSave}>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
        </svg>

        {/* RECIPE IMAGE */}
        <img className='recipeImg' src={foundRecipe.picture} alt={foundRecipe.drink_name} />
        
        <div className='recipeBody'>
          <h2>{foundRecipe.drink_name}</h2>
          <p>{foundRecipe.description}</p>
          <h3> Ingredienser</h3>
          <ul>{foundRecipe.ingridients.map(d=> Ingridients(d))}</ul>
          <h3>Instruktioner</h3>
          <ol>{foundRecipe.instructions.map(d=> Instructions(d))}</ol>
        </div>
      </div>
    </div>
  )
}

export default Recipe
