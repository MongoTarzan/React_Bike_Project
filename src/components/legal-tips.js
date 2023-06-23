import React from 'react'
import { Link } from 'react-router-dom';

function LegalTips() {
  return (
    <div className='legalTips'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Was ist legal / illegal</h1>
    </div>
  )
}

export default LegalTips;