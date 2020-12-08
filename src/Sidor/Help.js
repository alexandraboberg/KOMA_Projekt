import React from 'react'
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

var selected = ""
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
          </button>
        </Link>
        <h2>FRÅGOR & SVAR</h2>
      </div>


      <div className='questions'>
        <div className='ans' >
          <button className='crossButton' onClick={() => showDiv(1)}> 
            <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="white"/>
              <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
              <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
            </svg>
          </button>
          <h4>Fråga 1</h4>
          <p className='answertext'>Svar på fråga 1</p>
        </div>
        <button className='question' onClick={() => showDiv(1)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Fråga 1 </h3>
        </button>


        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(2)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Fråga 2</h4>
        <p className='answertext'>Svar på fråga 2</p>
        </div>
        <button className='question' onClick={() => showDiv(2)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Fråga 2 </h3>
        </button>


        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(3)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Fråga 3</h4>
        <p className='answertext'>Svar på fråga 3</p>
        </div>
        <button className='question' onClick={() => showDiv(3)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Fråga 3 </h3>
        </button>


        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(4)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Fråga 4</h4>
        <p className='answertext'>Svar på fråga 4</p>
        </div>
        <button className='question' onClick={() => showDiv(4)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Fråga 4 </h3>
        </button>


        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(5)}>
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Fråga 5</h4>
        <p className='answertext'>Svar på fråga 5</p>
        </div>
        <button className='question' onClick={() => showDiv(5)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Fråga 5 </h3>
        </button>


        <div className='ans' >
        <button className='crossButton' onClick={() => showDiv(6)}> 
          <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="white"/>
            <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
            <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
          </svg>
        </button>
        <h4>Fråga 6</h4>
        <p className='answertext'>Svar på fråga 6</p>
        </div>
        <button className='question' onClick={() => showDiv(6)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Fråga 6 </h3>
        </button>


        <div className='ans' >
          <button className='crossButton' onClick={() => showDiv(7)}>
            <svg  width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="white"/>
              <path d="M10.9711 28.9136L28.9132 10.9714" stroke="#F27C70" strokeWidth="4"/>
              <path d="M28.9132 28.9136L10.9711 10.9714" stroke="#F27C70" strokeWidth="4"/>
            </svg>
          </button>
          <h4>Fråga 7</h4>
            <p className='answertext'>Svar på fråga 7</p>
        </div>
        <button className='question' onClick={() => showDiv(7)}>
          <svg className='sideButton' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559426 -0.828881 0.80922 0.587506 17 30)" stroke="black" strokeWidth="2"/>
            <line y1="-1" x2="12.5128" y2="-1" transform="matrix(0.559427 0.82888 0.809221 -0.587505 17 9.25684)" stroke="black" strokeWidth="2"/>
          </svg>
          <h3> Fråga 7 </h3>
        </button>


 

      </div>
    </div>
  )
}
export default Help