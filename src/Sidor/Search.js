import '../App.css'
import React from 'react'
import { Link, useParams } from 'react-router-dom';
import recipes from '../API/API_drinks'
import Drink from '../Drink'

const Search = () => {

  //Converts API to an array
  const drinks = recipes.recipes

  //Takes the selected filters from url
  let {filter} = useParams()

  //Make lowercase
  filter = filter.toLowerCase().trim()

  let result
  let valda

  if(filter === ""){
    result = drinks
    valda = "alla drinkar"
  }
  else{
    //Get drinks that match filter
    result = drinks.filter(d => d.drink_name.toLowerCase().includes(filter))
    valda = filter
  }
  
  
  //Sorterar resultatet i bokstavsordning
  result.sort(function (a, b) {
    return a.drink_name.localeCompare(b.drink_name); //using String.prototype.localCompare()
  });


  return (
    <div className='Screen'>
      <div className='headerLine'/>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2  className='headertext'>SÖKRESULTAT</h2>
      </div>
      <div className='content'>
        <p id= 'showres'>Söker på  {valda}</p>
        {result.map( d => <Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>)}
      </div>
    </div>
  )
}

export default Search
