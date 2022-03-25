import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>

      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>
            <i class='fab fa-instagram' />
              Instagram
            </Link>
            <Link to='/'>
            <i class='fab fa-facebook' />
              Facebook
            </Link>
            <Link to='/'>
            <i class='fab fa-youtube' />
              Youtube
            </Link>
            <Link to='/'>
            <i class='fab fa-twitter' />
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
