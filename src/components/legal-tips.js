import React from 'react'
import { Link } from 'react-router-dom';
import legalImage from '../pictures/legalImage.jpg';
import './LegalTips.css';

function LegalTips() {
  return (
    <div className='legalTips'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Was ist legal / illegal</h1>
        <img src={legalImage} alt="Legal Image" className="LegalImage" />
          <p>Führerschein und Zulassung: Stelle sicher, dass du einen gültigen Motorradführerschein besitzt und dein Motorrad ordnungsgemäß zugelassen ist. Überprüfe regelmäßig die Gültigkeit deiner Papiere und erneuere sie rechtzeitig.
            <br></br><br></br>Verkehrsregeln und -zeichen: Halte dich immer an die geltenden Verkehrsregeln und achte auf Verkehrszeichen und -signale. Fahre in angemessener Geschwindigkeit, halte die vorgeschriebenen Abstände ein und respektiere Vorfahrtsregeln.
            <br></br><br></br>Schutzkleidung: In vielen Ländern sind bestimmte Schutzkleidung wie Helme, Schutzjacken und -hosen gesetzlich vorgeschrieben. Trage stets die entsprechende Schutzkleidung, um deine Sicherheit zu gewährleisten und den rechtlichen Anforderungen zu entsprechen.
            <br></br><br></br>Alkohol- und Drogenkonsum: Es ist gesetzlich verboten, unter dem Einfluss von Alkohol oder Drogen zu fahren. Fahre niemals, wenn du alkoholisiert oder beeinträchtigt bist, da dies nicht nur rechtliche Konsequenzen haben kann, sondern auch deine Sicherheit gefährdet.
            <br></br><br></br>Versicherung: Stelle sicher, dass du eine gültige Motorradversicherung abgeschlossen hast. Dies schützt dich im Falle von Unfällen oder Schäden und erfüllt die gesetzlichen Anforderungen vieler Länder.
            <br></br><br></br>Haftpflicht: Als Motorradfahrer bist du für mögliche Schäden oder Verletzungen, die du verursachst, verantwortlich. Beachte die Haftpflichtvorschriften und sorge für ausreichenden Versicherungsschutz.
            <br></br><br></br>Lärmbelästigung: Viele Länder haben Lärmgrenzwerte für Motorräder festgelegt. Achte darauf, dass dein Motorrad den entsprechenden Lärmvorschriften entspricht und minimiere unnötige Lärmbelästigung.
            <br></br><br></br><br></br>Es ist wichtig, diese rechtlichen Hinweise zu beachten, um Konflikte mit dem Gesetz zu vermeiden und die Sicherheit aller Verkehrsteilnehmer zu gewährleisten. Informiere dich über die spezifischen gesetzlichen Bestimmungen in deiner Region und halte dich stets daran, um eine angenehme und sichere Fahrt zu gewährleisten." 
          </p>
    </div>
  )
}

export default LegalTips;