import React from 'react'
import './../index.css'
import { Link, useParams} from 'react-router-dom';
import recipes from '../API/API_drinks'

const Result = () => {

  //Converts API to an array
  const drinks = recipes.recipes
  //console.log(drinks)

  //Takes the selected filters from url
  let {FSelected} = useParams()
  console.log(FSelected)

  //Converts the string into arrays
  const SelectedCategory = FSelected.split('*')
  const basfilter = SelectedCategory[0].split(',')
  const ingfilter = SelectedCategory[1].split(',')
  const farfilter = SelectedCategory[2].split(',')
  const smafilter = SelectedCategory[3].split(',')

  //See if search matches a drink
  function match(word, s) {
    //console.log(word)
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseSearchString = s.toLowerCase();

    return lowerCaseWord.indexOf(lowerCaseSearchString) === 0;
  }

  //Filter bassprit
  function basfiltering(s){
    const test = spi => {
      //console.log(spi)
      const size = spi.length
      //console.log(size)
      let i = 0
      while(i < size){
        if(match(spi[i], s) === true){
          //console.log("finns")
          return true
        }
        i++;
      }
      return false
    }
    //Filter 
    //let filteredWords = drinks.filter(d => (d.ingridients.map(p => (match(p.ingridient_name)))))
    let filteredWords = drinks.filter(d => (test(d.spirits) === true))
    console.log(filteredWords)
    return filteredWords;
  }
  
  //Filter ingredienser
  function ingfiltering(s){
    const test = ing => {
      const size = ing.length
      let i = 0
      while(i < size){
        if(match(ing[i].ingridient_name, s) === true){
          //console.log("finns")
          return true
        }
        i++;
      }
      return false
    }
    //Filter 
    //let filteredWords = drinks.filter(d => (d.ingridients.map(p => (match(p.ingridient_name)))))
    let filteredWords = drinks.filter(d => (test(d.ingridients) === true))
    console.log(filteredWords)
    return filteredWords;
  }

  //Filter färger
  function farfiltering(s){
    let filteredWords = drinks.filter(d => (match(d.color, s)))
    console.log(filteredWords)
    return filteredWords;
  }

  //Filter smak
  function smafiltering(s){
    let filteredWords = drinks.filter(d => (match(d.taste, s)))
    console.log(filteredWords)
    return filteredWords;
  }
  
  //Sök genom bassprit array
  let i = 0
  let basFiltered = [""]
  if(basfilter[0] !== ""){
    while(i < basfilter.length){
      basFiltered[i] = basfiltering(basfilter[i])
      i++
    }
  }

  //Sök genom ingrediens array
  i = 0
  let ingFiltered = [""]
  if(ingfilter[0] !== ""){
    while(i < ingfilter.length){
      ingFiltered = ingfiltering(ingfilter[i])
      i++
    }
  }
  
  //Sök genom färg array
  i = 0
  let farFiltered = [""]
  if(farfilter[0] !== ""){
    while(i < farfilter.length){
      farFiltered = farfiltering(farfilter[i])
      i++
    }
  }
  
  //Sök genom smak array
  i = 0
  let smaFiltered = [""]
  if(smafilter[0] !== ""){
    while(i < smafilter.length){
      smaFiltered = smafiltering(smafilter[i])
      i++
    }
  }

  //Lägg ihop de filtrerade resultaten
  let doneFiltering = basFiltered.concat(ingFiltered, farFiltered, smaFiltered)
  console.log(doneFiltering)
  ///////////////////////////////////////////////////////////////KOLLA HÄR
  //Leta efter de drinkar som finns i varje doneFiltering[j]
  const size = doneFiltering.length
  let j = 0
  // while(j < size){
  //   doneFiltering[j]
  //   j++;
  // }

  {/*Split i loop med ingridienserna*/}
  return (
    <div className='screen'>
      <div className='headerLine'/>
      <div className='header'>
        <Link to='/Filter'>
          <button className='back-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2>FILTRERADE DRINKAR</h2>
      </div>
      
    </div>
  )
}

export default Result