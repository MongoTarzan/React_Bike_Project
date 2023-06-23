import React from 'react'
import { Link } from 'react-router-dom';

function DrivingTips() {
  return (
    <div className='drivingTips'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Tipps für Anfänger und Fortgeschrittene</h1>
    </div>
  )
}

export default DrivingTips;