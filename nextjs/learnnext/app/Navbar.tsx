import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <a href="/jajal"><img src="" alt="/" /> jajal</a>
        <h2>MJD STORE</h2>
        <div className="search"></div>
        <ul>
            <li><a className='bg-sky-600' href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/contact">contact</a></li>

        </ul>
    </nav>
  )
}

export default Navbar
