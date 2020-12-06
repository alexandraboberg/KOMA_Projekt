import React, { useEffect, useState, Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, useParams } from 'react-router-dom'
import './index.css'
import recipes from './API/API_drinks'
import Pop from './Sidor/Pop'
import Filter from './Sidor/Filter'
import Home from './Sidor/Home'
import Save from './Sidor/Save'
import Help from './Sidor/Help'
import Recipe from './Sidor/Recipe'
import Result from './Sidor/Result'

function App () {
  return (

    <div className='screen'>

      {/* lägg in statusbilder */}
      <div className='statusBar' />

      {/* Footer icons */}
      <Router>
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/Filter'><Filter /></Route>
          <Route path='/Pop'><Pop /></Route>
          <Route path='/Save'><Save /></Route>
          <Route path='/Help'><Help /></Route>
          <Route path='/Result/:FSelected'><Result/></Route>
          {/* <Route path='/Recipe/:id'></Route> */}
        </Switch>
        <div className='footer'>
          <ul className='icons'>
            <li>
              <NavLink to='/Filter' activeClassName='penis'>
                <svg className='filter' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22' stroke='currentcolor' >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Pop' activeClassName='penis'>
               <svg className='pop' fill='none' stroke='currentcolor' viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg'>
                 <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'></path>
               </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to='/' exact activeClassName='penis'>
                <svg className='home' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22' stroke='currentcolor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Save' activeClassName='penis'>
                <svg  className='save' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22' stroke='currentcolor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Help' activeClassName='penis'>
                <svg  className='help' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22' stroke='currentcolor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  )
}

export default App
