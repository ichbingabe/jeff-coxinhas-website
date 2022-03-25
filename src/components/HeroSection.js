import React from 'react'
import '../App.css'
import { Button } from './Button'
import './HeroSection.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>A MELHOR COXINHA DA CIDADE CHEGOU!</h1>
      <p>Delivery pelo IFood ou retirada</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PEÇA JÁ
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
