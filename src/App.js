import React, { useEffect, useState, Component } from 'react'
import { BrowserRouter as Router, Switch, Route, NavLink, useParamsm, useHistory } from 'react-router-dom'
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
      <div className='statusBar' >
        <div className='statusPic1'>
      <svg  width="56" height="23" viewBox="0 0 56 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9974 20.2563C18.6854 20.2563 20.282 18.1543 20.282 14.5947C20.282 13.2544 20.0257 12.1265 19.535 11.2549C18.8245 9.8999 17.6014 9.16748 16.056 9.16748C13.7562 9.16748 12.1302 10.7129 12.1302 12.8809C12.1302 14.917 13.595 16.3965 15.6092 16.3965C16.847 16.3965 17.8504 15.8179 18.3484 14.8145H18.3704C18.3704 14.8145 18.3997 14.8145 18.407 14.8145C18.4217 14.8145 18.473 14.8145 18.473 14.8145C18.473 17.2314 17.5574 18.6743 16.012 18.6743C15.1038 18.6743 14.4007 18.1763 14.159 17.3779H12.2767C12.5916 19.1138 14.0638 20.2563 15.9974 20.2563ZM16.0633 14.895C14.8475 14.895 13.9832 14.0308 13.9832 12.8223C13.9832 11.6431 14.8914 10.7422 16.0706 10.7422C17.2498 10.7422 18.158 11.6577 18.158 12.8516C18.158 14.0308 17.2718 14.895 16.0633 14.895ZM23.2666 18.8794C23.9624 18.8794 24.4385 18.3813 24.4385 17.7222C24.4385 17.0557 23.9624 16.5649 23.2666 16.5649C22.5781 16.5649 22.0947 17.0557 22.0947 17.7222C22.0947 18.3813 22.5781 18.8794 23.2666 18.8794ZM23.2666 13.3862C23.9624 13.3862 24.4385 12.8955 24.4385 12.2363C24.4385 11.5698 23.9624 11.0791 23.2666 11.0791C22.5781 11.0791 22.0947 11.5698 22.0947 12.2363C22.0947 12.8955 22.5781 13.3862 23.2666 13.3862ZM26.4635 12.522V12.5513H28.236V12.522C28.236 11.4453 28.9831 10.7202 30.089 10.7202C31.129 10.7202 31.8908 11.394 31.8908 12.3242C31.8908 13.0713 31.5319 13.6206 30.089 15.0854L26.5661 18.689V20H33.9049V18.396H29.1588V18.2715L31.3707 16.0522C33.1652 14.2798 33.7438 13.3423 33.7438 12.207C33.7438 10.4419 32.235 9.16748 30.1476 9.16748C27.9796 9.16748 26.4635 10.5444 26.4635 12.522ZM36.1424 20H38.1199L42.639 11.0425V9.43115H35.2855V11.0205H40.7347V11.1377L36.1424 20Z" fill="white"/>
      </svg>
      </div>

      <svg className='statusPic2' width="68" height="16" viewBox="0 0 68 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.35" x="43.5" y="2.83337" width="21" height="10.3333" rx="2.16667" stroke="white"/>
        <path opacity="0.4" d="M66 6V10C66.8079 9.66122 67.3333 8.87313 67.3333 8C67.3333 7.12687 66.8079 6.33878 66 6Z" fill="white"/>
        <rect x="45" y="4.33337" width="18" height="7.33333" rx="1.33333" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M30.3338 4.57394C32.5585 4.57403 34.6982 5.41173 36.3105 6.91388C36.4319 7.02985 36.626 7.02839 36.7456 6.9106L37.9062 5.76277C37.9668 5.70302 38.0005 5.6221 38 5.5379C37.9995 5.4537 37.9648 5.37317 37.9035 5.31413C33.6716 1.33979 26.9953 1.33979 22.7633 5.31413C22.702 5.37313 22.6673 5.45363 22.6667 5.53783C22.6661 5.62203 22.6998 5.70298 22.7603 5.76277L23.9213 6.9106C24.0408 7.02856 24.235 7.03003 24.3563 6.91388C25.9689 5.41163 28.1088 4.57393 30.3338 4.57394ZM30.3322 8.29949C31.5559 8.29942 32.736 8.75602 33.643 9.58058C33.7657 9.6976 33.959 9.69507 34.0786 9.57486L35.2392 8.3977C35.3003 8.33596 35.3342 8.25219 35.3333 8.16515C35.3325 8.07811 35.2969 7.99506 35.2345 7.93457C32.4722 5.3552 28.1945 5.3552 25.4322 7.93457C25.3698 7.99506 25.3342 8.07815 25.3334 8.16522C25.3325 8.25229 25.3666 8.33604 25.4278 8.3977L26.5881 9.57486C26.7077 9.69507 26.9009 9.6976 27.0236 9.58058C27.9301 8.75656 29.1092 8.3 30.3322 8.29949ZM32.6666 11.0231C32.6684 11.1085 32.6341 11.1909 32.5718 11.2508L30.557 13.2419C30.498 13.3004 30.4175 13.3334 30.3334 13.3334C30.2494 13.3334 30.1689 13.3004 30.1098 13.2419L28.0947 11.2508C28.0325 11.1909 27.9982 11.1085 28.0001 11.023C28.0019 10.9376 28.0397 10.8566 28.1045 10.7994C29.3912 9.7336 31.2757 9.7336 32.5624 10.7994C32.6271 10.8567 32.6648 10.9376 32.6666 11.0231Z" fill="white"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M17.6667 3.66663C17.6667 3.11434 17.219 2.66663 16.6667 2.66663H15.6667C15.1144 2.66663 14.6667 3.11434 14.6667 3.66663V12.3333C14.6667 12.8856 15.1144 13.3333 15.6667 13.3333H16.6667C17.219 13.3333 17.6667 12.8856 17.6667 12.3333V3.66663ZM11 4.99996H12C12.5523 4.99996 13 5.44767 13 5.99996V12.3333C13 12.8856 12.5523 13.3333 12 13.3333H11C10.4477 13.3333 10 12.8856 10 12.3333V5.99996C10 5.44767 10.4477 4.99996 11 4.99996ZM7.33335 7.33329H6.33335C5.78107 7.33329 5.33335 7.78101 5.33335 8.33329V12.3333C5.33335 12.8856 5.78107 13.3333 6.33335 13.3333H7.33335C7.88564 13.3333 8.33335 12.8856 8.33335 12.3333V8.33329C8.33335 7.78101 7.88564 7.33329 7.33335 7.33329ZM3.66669 10.3333C3.66669 9.78101 3.21897 9.33329 2.66669 9.33329H1.66669C1.1144 9.33329 0.666687 9.78101 0.666687 10.3333V12.3333C0.666687 12.8856 1.1144 13.3333 1.66669 13.3333H2.66669C3.21897 13.3333 3.66669 12.8856 3.66669 12.3333V10.3333Z" fill="white"/>
      </svg>
      </div>

      {/* Footer icons */}
      <Router history = {useHistory} >
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/Filter'><Filter /></Route>
          <Route path='/Pop'><Pop /></Route>
          <Route path='/Save'><Save /></Route>
          <Route path='/Help'><Help /></Route>
          <Route path='/Result/:FSelected'><Result/></Route>
          <Route path='/Recipe/:id'><Recipe/></Route>
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
                <svg className='save' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22' stroke='currentcolor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' />
                </svg>
              </NavLink>
            </li>
            <li>
              <NavLink to='/Help' activeClassName='penis'>
                <svg className='help' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 22 22' stroke='currentcolor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
              </NavLink>
            </li>
          </ul>
        </div>
      </Router>

      <div id='loadscreen' >
        <div id='dots'>
          <span id='dot1'></span>
          <span id='dot2'></span>
          <span id='dot3'></span>
        </div>
        <img src='loadscreen.png' alt='load screen' />
      </div>

    </div>
  )
}

export default App
