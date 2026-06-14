import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-center mt-5'>
      <div className="flex w-[1400px] h-[50px] justify-between mt-[20px] items-center border-2 ">
        <div className=" flex gap-5 ml-[80px]">
        <a href="/jajal"> Logo</a>
        <ul className='flex gap-12 text-[rgb(40, 41, 42)] '>
            <li><a href="/home" className='fon'>Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/contact">Project</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>  
        </div>
        <button className='mr-[55px] border-2 px-4 py-2 rounded-[50px] text-[14px] font-[600] tracking-wide'>Buy Teamplate</button>        
      </div>
    </nav>
  )
}

export default Navbar
