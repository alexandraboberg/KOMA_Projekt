import React from 'react'
import '../index.css'
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';

const Pop = () => {

  return (
    <div className='screen'>
      <div className='header'>
        <Link to='/'>
          <button>Back</button>
        </Link>
        <h2>POPULÄRA DRINKAR</h2>
      </div>
    </div>
  )
}
export default Pop
