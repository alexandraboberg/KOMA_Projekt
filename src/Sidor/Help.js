import React from 'react'
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

var show = false;
const showDiv = (a) => {
  show = ! show;
  var x = document.getElementsByClassName('ans')[a-1];
  if (x)
    x.style.display = show ? 'block' : 'none';
}

const Help = () => {
  return (
    <div className='screen'>
      <div className='headerLine'/>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2 className='headertext'>FRÅGOR & SVAR</h2>
      </div>

      {/* FRÅGA 1 */}
      <div className='questions'>
        <div className='ans' >
          <button className='crossButton' onClick={() => showDiv(1)}> 
            <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="white"/>
              <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
              <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
            </svg>
          </button>
          <h4>Varför finns inte drinken jag söker på?</h4>
          <p className='answertext'>Det kan finnas flera anledningar till att drinken du söker på inte dyker upp. 
                                  Kolla först att stavningen på drinken är rätt eller om drinken har ett annat namn som du kan testa att söka på, 
                                  var också nogrann med att mellanrummen är på rätt plats. dyker drinken trots det inte upp så kan det vara för att drinken inte finns i databaden, 
                                  och då har vi tyvärr inte detta recept. Om du vet vilka ingredienser drinken innehåller kan du testa att filtrera drinkar med dessa ingredienser för att se 
                                  om du hittar någon liknande drink som kan falla dig i smaken, lycka till!</p>
        </div>
        <button className='question' onClick={() => showDiv(1)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Varför finns inte drinken jag söker på? </h3>
        </button>

        {/* FRÅGA 2 */}
        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(2)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Finns det alkoholfria drinkar?</h4>
        <p className='answertext'>För tillfället går det inte att filtrera på alkoholfria drinkar, 
                              däremot går det att göra de flesta drinkar alkoholfria genom att ersätta alkoholen med något passande, 
                              eller att helt enkelt ta bort ingrediensen med alkohol i.</p>
        </div>
        <button className='question' onClick={() => showDiv(2)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Finns det alkoholfria drinkar? </h3>
        </button>

        {/* FRÅGA 3 */}
        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(3)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Går det att filtrera på flera saker samtidigt?</h4>
        <p className='answertext'>Ja! Självklart går det att filtrera på flera ingredienser. Tänk  dock på att alla olika kombinationer av ingredienser inte alltid kommer ge ett resultat, då kan det vara bra att ta bort något du filtrerat på för att se om det finns något som liknar det du är ute efter. </p>
        </div>
        <button className='question' onClick={() => showDiv(3)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Går det att filtrera på flera saker... </h3>
        </button>

        {/* FRÅGA 4 */}
        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(4)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Kan man lägga in egna recept?</h4>
        <p className='answertext'>Nej, tyvärr går detta inte i nuläget. Det är något vi jobbar på, alltså kommer denna funktion finnas inom en snar framtid!</p>
        </div>
        <button className='question' onClick={() => showDiv(4)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Kan man lägga in egna recept? </h3>
        </button>

          {/* FRÅGA 5 */}
        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(5)}>
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Varför kommer det inte upp något när jag filtrerar?</h4>
        <p className='answertext'>Detta är förmodligen för att kombinationen av ingredienser du söker få inte finns, testa att ta bort något av det du filtrerat på och se om något dyker upp, lycka till!</p>
        </div>
        <button className='question' onClick={() => showDiv(5)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3>Varför kommer det inte upp något...</h3>
        </button>

        {/* FRÅGA 6 */}
        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(6)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Går det att söka på ingredienser?</h4>
        <p className='answertext'>Nej, detta går för tillfället inte, det är något vi jobbar på och som förhoppningsvis snart är möljigt.</p>
        </div>
        <button className='question' onClick={() => showDiv(6)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3>Går det att söka på ingredienser?</h3>
        </button>

        {/* FRÅGA 7 */}
        <div className='ans' >
          <button className='crossButton' onClick={() => showDiv(7)}>
            <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="white"/>
              <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
              <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
            </svg>
          </button>
          <h4>Hur sparar jag mina drinkar?</h4>
            <p className='answertext'>Det enda du behöver göra för att spara en drink är att klicka på det gula hjärtat i hörnet av bilden på drinken. Då blir hjärtat ifyllt och hamnar under sparade drinkar i menyn (klicka på hjärtat nere i menyn för att komma till sparade drinkar).</p>
        </div>
        <button className='question' onClick={() => showDiv(7)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3>Hur sparar jag mina drinkar?</h3>
        </button>


 

      </div>
    </div>
  )
}
export default Help