import React from 'react'
import "./styling.css"
import Assignment from './Assignment'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        
        <div className="sidebar">
        <header>
            <h3>New Headlines</h3>
            <nav className='nav flex-column'>
                {/* <ul  >
                    <li> <Link to="/UKNews">UKnews</Link> </li>
                    <li> <Link to="/Technews">Technews</Link> </li>
                    <li> <Link to="/Economicnews">Economicnews</Link> </li>
                    <li> <Link to="/Currencynews">Currencynews</Link> </li>
                    <li> <Link to="/Teslanews">Teslanews</Link> </li>
                </ul> */}
                <button>Click here</button>
            </nav>
        </header>
        </div> 
    </div>
  )
}
