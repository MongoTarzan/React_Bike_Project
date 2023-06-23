import React from 'react'
import { Link } from 'react-router-dom';

function GearAndShoewear() {
  return (
    <div className='gearAndShoewear'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Alles über Schutzkleidung & Schuhe</h1>
        <div className='gearContent'> 
            <p>Hello world!</p>
        </div>
    </div>
  )
}

export default GearAndShoewear;