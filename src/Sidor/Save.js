import React, { useState} from 'react'
import '../index.css'
import {Link} from 'react-router-dom';
import recipes from '../API/API_drinks'
import {saveDrink, getDrinks} from '../Saved_Drinks';
import Drink from '../Drink'


const savedIds = getDrinks()
const testSave = recipes.recipes.filter((recipe) =>  savedIds.includes(recipe.id))
//Sorterar resultatet i bokstavsordning
testSave.sort(function (a, b) {
  return a.drink_name.localeCompare(b.drink_name); //using String.prototype.localCompare()
});

function SaveApp(){
  return (
    <div className='screen'>
      <div className='headerLine'/>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2 className='headertext'>SPARADE DRINKAR</h2>
      </div>
      <div className = 'content'>
            {testSave.map(d => <Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>)}
      </div>
    </div>
  )
}


export default SaveApp