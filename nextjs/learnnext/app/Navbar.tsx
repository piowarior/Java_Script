import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center mt-5'>
      <div className="flex w-[1500px] h-[50px] justify-around border-1 rounded-[5px] items-center ">
        <a href="/jajal"> Logo</a>
        <h2 className='-ml-50' > MJD STORE</h2>
        <input type="search" placeholder='search' className='border w-[300px] pl-2 rounded-[5px]'/>
        <ul className='flex gap-5 '>
            <li><a href="/about">about</a></li>
            <li><a href="/services">services</a></li>
            <li><a href="/contact">contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
