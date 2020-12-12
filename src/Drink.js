import React, {useState} from 'react'
import './index.css'
import {Link} from 'react-router-dom';
import {saveDrink, getDrinks} from './Saved_Drinks';

//Funktion för att visa upp ett "drink-kort" 
export const Drink = data => {
    //Save funktion
    const initialState = getDrinks().includes(data.id);
    const [saved, setSaved] = useState(initialState);
  
    function handleSave(event){
      event.preventDefault()
      saveDrink(data.id)
      setSaved(getDrinks().includes(data.id));
    }
  
    //Drink
    const link = '/Recipe/' + data.id;
  
    return (
      <Link to = {link} className = "linkToDrink">
        <div className = "outline">
        <img src={data.image} alt={data.name} className = "drinkPic"></img>
        <p className = "drinkFont">{data.name}</p>
        <svg className='saveButton' xmlns='http://www.w3.org/2000/svg' fill={saved ? "#FFDF81" : "none"} viewBox='0 0 22 22' onClick={handleSave}>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
        </svg>
        </div>
      </Link>
    )
    
  }

  export default Drink