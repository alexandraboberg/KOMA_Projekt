import React from 'react'
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import recipes from '../API/API_drinks'


const Save = data => {

  const link = '/Recipe/' + data.id;

  return (
    <Link to = {link} className = "linkToDrink">
      <div className = "outline">
      <img src={data.image} alt={data.name} className = "drinkPic"></img>
      <p className = "drinkFont">{data.name}</p>
      <svg className='saveButton' xmlns='http://www.w3.org/2000/svg' fill=' #FFDF81' viewBox='0 0 22 22'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
      </svg>
      </div>
    </Link>
  )
}

const testSave = recipes.recipes.filter((recipes) => recipes.drink_name === "Kir Royal")
const testSave2 = recipes.recipes.filter((recipes) => recipes.drink_name === "Mexikanskt Iskaffe")  
const testSave3 = recipes.recipes.filter((recipes) => recipes.drink_name === "Nomayo")
const testSave4 = recipes.recipes.filter((recipes) => recipes.drink_name === "House Party Punch No.1")
const testSave5 = recipes.recipes.filter((recipes) => recipes.drink_name === "Rhububble")
const testSave6 = recipes.recipes.filter((recipes) => recipes.drink_name === "Hallon Ballon")


function SaveApp(){
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
        <h2>SPARADE DRINKAR</h2>
      </div>
      <div className = 'content'>
            {testSave.map(d => <Save name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>)}
            {testSave2.map(d => (<Save name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testSave3.map(d => (<Save name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testSave4.map(d => (<Save name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testSave5.map(d => (<Save name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
            {testSave6.map(d => (<Save name={d.drink_name} id={d.id} data = {d} image = {d.picture}/>))}
      </div>
    </div>
  )
}


export default SaveApp

