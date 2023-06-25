import React from 'react'
import { Link } from 'react-router-dom';
import drivingTips from '../pictures/drivingTips.jpg';
import './DrivingTips.css';

function DrivingTips() {
  return (
    <div className='drivingTips'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Tipps für Anfänger und Fortgeschrittene</h1>
        <img src={drivingTips} alt="Driving Tips" className='DrivingImage' />
          <p>Fahre defensiv: Sei stets aufmerksam und vorausschauend. Beachte den Verkehr um dich herum und halte ausreichend Sicherheitsabstand zu anderen Fahrzeugen. Rechne mit unvorhergesehenen Situationen und sei bereit zu reagieren.
             <br></br><br></br>Nutze die richtige Fahrtechnik: Lerne und beherrsche die richtige Fahrtechnik. Halte die Augen auf die Straße gerichtet, halte deine Hände und Finger bereit für Brems- und Gasmanöver und nutze deine Beine, um das Gleichgewicht zu halten. Behalte eine gute Körperhaltung auf dem Motorrad bei.
             <br></br><br></br>Passe deine Geschwindigkeit an: Passe deine Geschwindigkeit den Straßenverhältnissen an. Fahre nicht zu schnell und achte auf Tempolimits. Fahre besonders vorsichtig in Kurven und bei schlechten Wetterbedingungen.
             <br></br><br></br>Sei sichtbar: Trage helle Kleidung oder reflektierende Materialien, um deine Sichtbarkeit für andere Verkehrsteilnehmer zu erhöhen. Nutze auch deine Blinker, um deine Absichten anzuzeigen.
             <br></br><br></br>Achte auf deine Müdigkeit: Vermeide lange Fahrten, wenn du müde oder erschöpft bist. Ermüdung kann deine Reaktionszeit beeinträchtigen. Mache regelmäßige Pausen, um dich auszuruhen und zu erfrischen.
             <br></br><br></br>Bleibe immer konzentriert: Lasse dich nicht ablenken, während du fährst. Vermeide das Benutzen von Mobiltelefonen oder anderen Geräten. Deine volle Aufmerksamkeit sollte auf die Straße gerichtet sein.


          </p>
    </div>
  )
}

export default DrivingTips;