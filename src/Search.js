import './App.css'
import React, { useEffect, useState } from 'react'

// Fixa denna till slutresultat
function Search () {
  const [searchString, setSearchString] = useState('')

  function changeInput (event) {
    setSearchString(event.target.value)
  }

  return (
    <div className='Screen'>
      <from className='search'>
        <input className='searchBar' type='text' placeholder='Sök drinkar eller ingredienser' onChange={changeInput} />
      </from>
    </div>
  )
}

export default Search
