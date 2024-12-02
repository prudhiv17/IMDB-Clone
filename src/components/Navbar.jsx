import React from 'react'
import Logo from '../assets/movie.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-center pl-3 py-4'>
        <img className='w-[50px]' src= {Logo} alt=''/>

        <Link to='/' className='text-blue-500 text-3xl font-bold'>Movies</Link>

        <Link to='/watchlist' className='text-blue-500 text-3xl font-bold'>Watchlist</Link>
    </div>
  ) 
}

export default Navbar



// https://api.themoviedb.org/3/movie/popular?api_key=ebf3fb4e31e673684ce5585678b670dd&language=en-US&page=2