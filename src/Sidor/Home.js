import React, { useEffect, useState, Component } from 'react'
import '../index.css'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'
import recipes from '../API/API_drinks'
import Drink from '../Drink'
import { getElementError } from '@testing-library/react'

const Home = data => {
  const link = '/Recipe/' + data.id

  return (

    <Link to={link}><p>{data.name}</p></Link>
  )
}

// debugger
const test2 = recipes.recipes
console.log(test2)

// SÄSONGENS DRINKAR :)
const sesDrink1 = recipes.recipes.filter((recipes) => recipes.drink_name === 'Hot Apple Pie')
const sesDrink2 = recipes.recipes.filter((recipes) => recipes.drink_name === 'Christmas Spirit')
const sesDrink3 = recipes.recipes.filter((recipes) => recipes.drink_name === 'Polkagris')
const sesDrink4 = recipes.recipes.filter((recipes) => recipes.drink_name === 'Snowball')
const sesDrink5 = recipes.recipes.filter((recipes) => recipes.drink_name === 'Saffron Collins')
const sesDrink6 = recipes.recipes.filter((recipes) => recipes.drink_name === 'Kaffe Karlsson')

function HomeApp () {
  const sort = inputRec => {
    const sortedRec = inputRec
    return sortedRec
  }

  const validRec = sort(recipes.recipes)

  const [filter, setFilter] = useState('')

  const filteredRec = validRec.filter(r =>
    r.drink_name.toLowerCase().indexOf(filter.toLowerCase()) === 0
  )
  const limRec = filteredRec.slice(0, 5)

  const linkToSearch = '/Search/ ' + filter;

  return (
    <div>
      {/* ska egentligen va poster2 */}
      <img className='poster' src='poster.png' alt='poster!' />
      {/* Searchbar */}
      <form id='searchbtn'>
        <input className='searchBar' type='text' placeholder='Sök drinkar' onChange={(e) => setFilter(e.target.value)}  />
        <Link to={linkToSearch}>
          <button id='search'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
          </button>
        </Link>
      </form>
      <div />
      <div id='searchRes'>
        {limRec.map(d => (<Home id={d.id} name={d.drink_name} />))}
      </div>
      <form className='button' action='/filter'>
        <button className='filterButton' type='submit'>FILTRERA DRINKAR</button>
      </form>

      {/* Säsongens drinkar */}
      <div className='popular'>
        <div id='homeline' />
        <h2 className='homedrink'>Säsongens Drinkar:</h2>
      </div>
      <div className='content4'>
        <div className='veckansDrink'>
          {sesDrink1.map(d => <Drink name={d.drink_name} id={d.id} data={d} image={d.picture} />)}
          {sesDrink2.map(d => <Drink name={d.drink_name} id={d.id} data={d} image={d.picture} />)}
          {sesDrink3.map(d => <Drink name={d.drink_name} id={d.id} data={d} image={d.picture} />)}
          {sesDrink4.map(d => <Drink name={d.drink_name} id={d.id} data={d} image={d.picture} />)}
          {sesDrink5.map(d => <Drink name={d.drink_name} id={d.id} data={d} image={d.picture} />)}
          {sesDrink6.map(d => <Drink name={d.drink_name} id={d.id} data={d} image={d.picture} />)}
        </div>
      </div>
    </div>
  )
}

export default HomeApp
