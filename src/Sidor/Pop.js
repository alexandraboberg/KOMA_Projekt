import React, { useState} from 'react'
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import recipes from '../API/API_drinks'

const Pop =  data => {

  
  const link = '/Recipe/' + data.id;
 
  return (
      <Link to = {link} className = "linkToDrink">
        <div className = "outline">
        <img src={data.image} alt={data.name} className = "drinkPic"></img>
        <p className = "drinkFont">{data.name}</p>
        <svg className='saveButton' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
        </svg>
        </div>
    </Link>
  )
}


const testPop = recipes.recipes.filter((recipes) => recipes.drink_name === "P2")
const testPop2 = recipes.recipes.filter((recipes) => recipes.drink_name === "Rosa Pantern")  
const testPop3 = recipes.recipes.filter((recipes) => recipes.drink_name === "Mojito")
const testPop4 = recipes.recipes.filter((recipes) => recipes.drink_name === "Moscow Mule")
const testPop5 = recipes.recipes.filter((recipes) => recipes.drink_name === "Piña Colada")
const testPop6 = recipes.recipes.filter((recipes) => recipes.drink_name === "Frozen Strawberry Daiquiri")
const testPop7 = recipes.recipes.filter((recipes) => recipes.drink_name === "Aperol Spritz")
const testPop8 = recipes.recipes.filter((recipes) => recipes.drink_name === "Irish Coffee")
const testPop9 = recipes.recipes.filter((recipes) => recipes.drink_name === "Fizzypop")
const testPop10 = recipes.recipes.filter((recipes) => recipes.drink_name === "Southside")



function PopApp() {

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
          <h2>POPULÄRA DRINKAR</h2>
        </div>
        <div className = 'popDrinks'>
            {testPop.map(d => <Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>)}
            {testPop2.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop3.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop4.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop5.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop6.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop7.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop8.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop9.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop10.map(d => (<Pop name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
        </div>
    </div>
  )
}


export default PopApp 
