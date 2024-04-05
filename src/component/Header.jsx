import React from 'react'
// import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import '../styles/Header.scss'

const Header = () => {
  return (
    <nav>
        <h1>Tech Star</h1>
        <main>
            <HashLink to={'/#home'}>Home</HashLink>
            <HashLink to={'/contact'}>Contact</HashLink>
            <HashLink to={'/#about'}>About</HashLink>
            <HashLink to={'/#brands'}>Brands</HashLink>
            <HashLink to={'/services'}>Services</HashLink>
          
        </main>
    </nav>
  )
}

export default Header
