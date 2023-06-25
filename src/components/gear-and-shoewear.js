import React from 'react'
import { Link } from 'react-router-dom';
import gearImage from '../pictures/gearImage.jpg';

function GearAndShoewear() {
  return (
    <div className='gearAndShoewear'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Alles über Schutzkleidung & Schuhe</h1>
        <div className='gearContent'> 
          <img src={gearImage} alt="Gear Image" />
            <p>Motorradschutzkleidung ist von entscheidender Bedeutung für die Sicherheit und den Schutz eines Motorradfahrers. Sie dient dazu, Verletzungen bei Unfällen oder Stürzen zu minimieren und das Risiko schwerer Verletzungen zu verringern. Hier sind einige wichtige Informationen über Motorradschutzkleidung: 
               <br></br><br></br>Helme: Ein qualitativ hochwertiger Helm ist das wichtigste Stück Schutzkleidung für einen Motorradfahrer. Er schützt den Kopf vor schweren Verletzungen und reduziert das Risiko von Hirnverletzungen bei Unfällen. Stelle sicher, dass der Helm den Sicherheitsstandards entspricht und richtig sitzt.
               <br></br><br></br>Jacken und Hosen: Schutzjacken und -hosen bestehen aus widerstandsfähigem Material wie Leder oder Textilien und bieten Schutz vor Abrieb und Verletzungen. Sie sollten mit eingebauten Protektoren an den Schultern, Ellbogen, Knien und Rücken ausgestattet sein, um diese empfindlichen Bereiche zu schützen.
               <br></br><br></br>Handschuhe: Motorradhandschuhe bieten nicht nur Schutz vor Kälte und Witterungseinflüssen, sondern schützen auch die Hände vor Verletzungen bei einem Sturz. Sie sollten über Verstärkungen und Polsterungen an den Handflächen und Knöcheln verfügen.
               <br></br><br></br>Stiefel: Spezielle Motorradstiefel bieten einen sicheren Halt und Schutz für die Füße und Knöchel. Sie sollten über eine rutschfeste Sohle, Verstärkungen im Zehen- und Fersenbereich sowie Knöchelstützen verfügen.
               <br></br><br></br>Rückenprotektoren: Zusätzlich zu den eingebauten Protektoren in Jacken können separate Rückenprotektoren verwendet werden, um den Rücken und die Wirbelsäule zu schützen. Sie bieten zusätzlichen Schutz bei einem Aufprall oder Sturz.
               <br></br><br></br>Es ist wichtig, dass die Motorradschutzkleidung richtig passt und bequem ist, um maximale Sicherheit und Komfort zu gewährleisten. Bevor du auf dein Motorrad steigst, vergewissere dich immer, dass du angemessen geschützt bist, um mögliche Verletzungsrisiken zu minimieren.

            </p>
        </div>
    </div>
  )
}

export default GearAndShoewear;