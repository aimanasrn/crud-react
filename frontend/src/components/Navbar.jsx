import { useState } from 'react'
import { Modal } from "antd";

const Navbar = ({onOpen}) => {
  return (
    <nav className='bg-linear-to-br from-blue-900 to-pink-950 text-white shadow-md p-4 top-0 w-full z-40'>
        <div className='contaiener mx-0 flex justify-between items-center'>
            <a href="#" className='text-2xl font-bold text-white hover:text-blue-100 hover:transition duration-200'>
                HR CRUD
            </a>

            <a onClick={onOpen} className='bg-blue-500 hover:bg-blue-600 hover:text-white py-2 px-4 rounded-md text-gray-100 font-semibold'>
                Add Employees
            </a>
        </div>
    </nav>
  );
}

export default Navbar