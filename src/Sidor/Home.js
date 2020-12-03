import React, { useEffect, useState, Component } from 'react'
import '../index.css'
import recipes from '../API/API_drinks'

const Home = data => {
    //const [recipes, setRecipes] = useState([])
    

    return (

        <p>{data.name}</p>

    )

    /*
    useEffect(() => {
        getRecipes()
    }, [])

    const getRecipes = () => {
        //Add code
    }


    const [searchString, setSearchString] = useState('')
    console.log(searchString)

    function changeInput(event) {
        setSearchString(event.target.value)
    }

    const match = (recipe) => {
        const lowerCaseWord = recipe.toLowerCase()
        const lowerCaseSearchString = searchString.toLowerCase()

        const result = lowerCaseWord.indexof(lowerCaseSearchString) === 0
        return result
    }
    */

}

//const allDrinks = recipes.filter(rec => recipes.drink_name)
const test2 = recipes.recipes
    console.log(test2)

function HomeApp () {
    
    return (
        <div>

            <div className='poster'></div>
            
            {/* Searchbar */}
            <form className='search'>
                <input className='searchBar' type='text' placeholder='Sök drinkar eller ingredienser'/>
                <button id='search'><svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
                </button>
            </form>
            <div>
                
            </div>
            <form className='button'>
                <button className='searchButton' type='submit'>FILTRERA DRINKAR</button>
            </form>

            {/* Popular drinks */}
            <div className='popular'>
                <h2>POPULÄRA DRINKAR</h2>

                {test2.map(d => (<Home name={d.drink_name}/>))}
                

            </div>
            <div className='spinner' />

        </div>
    )
}

export default HomeApp