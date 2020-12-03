import React from 'react'
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

const Help = () => {
  return (
    <div className='screen'>
      <div className='header'>
        <Link to='/'>
          <button className='back-button'>Back</button>
        </Link>
        <h2>FRÅGOR & SVAR</h2>
      </div>
    </div>
  )
}
export default Help