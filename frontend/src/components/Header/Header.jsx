import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Best place to order food of best quality at the cheapest rate!</p>
            <a href="http://localhost:5173/#explore-menu">
              <button>View Menu</button>
            </a>
        </div>
    </div>
  )
}

export default Header