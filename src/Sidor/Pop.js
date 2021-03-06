import React from 'react'
import '../index.css'
import { Link} from 'react-router-dom';
import recipes from '../API/API_drinks'
import Drink from '../Drink'


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
          <a href='/'>
            <button className='back-button'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </button>
          </a>
          <h2 className='headertext'>POPULÄRA DRINKAR</h2>
        </div>
        <div className = 'content'>
            {testPop.map(d => <Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>)}
            {testPop2.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop3.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop4.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop5.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop6.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop7.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop8.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop9.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testPop10.map(d => (<Drink name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
        </div>
    </div>
  )
}


export default PopApp 
