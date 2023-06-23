import React from 'react'
import { Link } from 'react-router-dom';

function BuyingAndDealers() {
  return (
    <div className='buyingAndDealers'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Welches Motorrad passt zu dir? / Händler</h1>
    </div>
  )
}

export default BuyingAndDealers;