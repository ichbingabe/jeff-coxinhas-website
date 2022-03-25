import React, { useState, useEffect } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to={{ pathname: "https://www.instagram.com/jeffcoxinhas/" }} target="_blank" className='navbar-logo' onClick={closeMobileMenu}>
            Jeff Coxinhas
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                {/* aqui adiciona um link */}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                {/* aqui adiciona um link */}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              </Link>
                {/* aqui adiciona um link */}
            </li>

            <li>
              <Link
                to={{ pathname: "https://www.instagram.com/jeffcoxinhas/" }} target="_blank"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Peça Já
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Peça Já</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar;
