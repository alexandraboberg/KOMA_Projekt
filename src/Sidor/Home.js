import React, { useEffect, useState, Component } from 'react'
import '../index.css'
import recipes from '../API/API_drinks'

const Home = data => {
  return (

    <p>{data.name}</p>
  )
}

// debugger
const test2 = recipes.recipes
console.log(test2)

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

  return (
    <div>
      {/* ska egentligen va poster2 */}
      <img className='poster' src='poster.png' alt='poster!' />

      {/* Searchbar */}
      <form className='search'>
        <input className='searchBar' type='text' placeholder='Sök drinkar' onChange={(e) => setFilter(e.target.value)} />
        <button id='search'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
          </svg>
        </button>
      </form>
      <div />
      <form className='button' action='/filter'>
        <button className='filterButton' type='submit'>FILTRERA DRINKAR</button>
      </form>

      {/* Popular drinks */}
      <div className='popular'>
        <h2>POPULÄRA DRINKAR</h2>

        {limRec.map(d => (<Home key={test2.id} name={d.drink_name} />))}

      </div>
      <div className='spinner' />

    </div>
  )
}

export default HomeApp
