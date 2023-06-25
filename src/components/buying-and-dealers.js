import React from 'react'
import { Link } from 'react-router-dom';
import bikeTypes from '../pictures/bikeTypes.jpg';
import './BuyingAndDealers.css';

function BuyingAndDealers() {
  return (
    <div className='buyingAndDealers'>
      <Link to="/" className="BackButton">^</Link>
      <h1>Welches Motorrad passt zu dir? / Händler</h1>
      <img src={bikeTypes} alt="Bike Types" className="BikeImage" />
        <p>Hier sind einige Tips um dir dabei zu helfen, dich für ein Motorrad zu entscheiden: <br></br><br></br>
           Fahrerfahrung: Berücksichtige deine Erfahrung als Motorradfahrer. Wenn du Anfänger bist, sind leichtere Motorräder mit geringerer Leistung empfehlenswert. Erfahrene Fahrer können sich für leistungsstärkere Modelle entscheiden.
           <br></br><br></br>Fahrstil und Einsatzzweck: Überlege, wie du das Motorrad nutzen möchtest. Für den täglichen Stadtverkehr sind wendige und leicht zu manövrierende Motorräder wie Naked Bikes oder leichte Enduros geeignet. Wenn du lange Strecken fahren möchtest, sind Touring-Bikes oder Cruisers eine gute Wahl.
           <br></br><br></br>Körpergröße und Ergonomie: Achte darauf, dass du bequem auf dem Motorrad sitzen kannst. Die richtige Sitzposition und Ergonomie sind wichtig für Komfort und Kontrolle. Verschiedene Motorräder haben unterschiedliche Sitzhöhen und Lenkerpositionen, also finde ein Modell, das zu deiner Körpergröße und Vorlieben passt.
           <br></br><br></br>Probesitzen und Probefahren: Bevor du ein Motorrad kaufst, solltest du es unbedingt probesitzen und idealerweise auch Probefahren, um sicherzustellen, dass es für dich geeignet ist und sich gut anfühlt.
           <br></br><br></br><br></br>Tips um gute Händler zu finden:<br></br><br></br>

           Auswahl: Motorradhändler bieten eine breite Palette an Marken und Modellen, so dass du verschiedene Optionen vergleichen kannst.
           <br></br><br></br>Beratung: Händler können dich bei der Auswahl des richtigen Motorrads basierend auf deinen Bedürfnissen und Vorlieben unterstützen. Sie können auch Informationen zu technischen Spezifikationen, Wartung und Finanzierungsoptionen bieten.
           <br></br><br></br>Service und Wartung: Händler bieten oft auch Serviceleistungen wie Inspektionen, Reparaturen und den Verkauf von Ersatzteilen an. Dies ist besonders nützlich, um sicherzustellen, dass dein Motorrad in einem guten Zustand bleibt.
           <br></br><br></br>Garantie: Neuere Motorräder werden oft mit Garantien geliefert, die vom Händler abgedeckt werden. Dies bietet zusätzliche Sicherheit und Unterstützung bei eventuellen Problemen.
           <br></br><br></br><br></br>Nimm dir Zeit, um verschiedene Händler zu besuchen, Fragen zu stellen und Informationen über ihre Dienstleistungen, Preise und den Kundenservice einzuholen. So kannst du sicherstellen, dass du das richtige Motorrad findest und von einem vertrauenswürdigen Händler unterstützt wirst.


      
        </p>
    </div>
  )
}

export default BuyingAndDealers;