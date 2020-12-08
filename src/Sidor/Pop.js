import React, { useState} from 'react'
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import recipes from '../API/API_drinks'
//import { Collapse, Button, CardBody, Card } from 'reactstrap';
//import Recipe_Button from '../Recipe_Button.js';

console.log(recipes.recipes[0].id)



const Pop =  data => {
  //const data = props.data;
  
  const link = '/drinks/' + data.key;
 

  return (
      <Link to = {link} className = "linkToDrink">
        <span>
        <img src={data.image} alt={data.name} className = "drinkPic"></img>
        <p className = "drinkName">{data.name}</p>
      </span>
    </Link>
  )
}


const testPop = recipes.recipes.filter((recipes) => recipes.drink_name == "P2")
const testPop2 = recipes.recipes.filter((recipes) => recipes.drink_name == "Rosa Pantern")  
const testPop3 = recipes.recipes.filter((recipes) => recipes.drink_name == "Mojito")
const testPop4 = recipes.recipes.filter((recipes) => recipes.drink_name == "Moscow Mule")
const testPop5 = recipes.recipes.filter((recipes) => recipes.drink_name == "Piña Colada")
const testPop6 = recipes.recipes.filter((recipes) => recipes.drink_name == "Frozen Strawberry Daiquiri")
const testPop7 = recipes.recipes.filter((recipes) => recipes.drink_name == "Aperol Spritz")
const testPop8 = recipes.recipes.filter((recipes) => recipes.drink_name == "Irish Coffee")
const testPop9 = recipes.recipes.filter((recipes) => recipes.drink_name == "Fizzypop")
const testPop10 = recipes.recipes.filter((recipes) => recipes.drink_name == "Southside")



function PopApp() {

      //const [recipes, setRecipes] = useState([])

  return (
    <div className='screen'>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>Back</button>
        </Link>
        <h2>POPULÄRA DRINKAR</h2>
        {testPop.map(d => <Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>)}
        {testPop2.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop3.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop4.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop5.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop6.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop7.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop8.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop9.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))}
        {testPop10.map(d => (<Pop name={d.drink_name} key={d.id} data = {d} image = {d.picture}/>))} 
        
      </div>
      <div>
      </div>
    </div>
  )
}

function Recipe_Button(){
  let{id} = useParams()
  console.log(id)

}

export default PopApp 
