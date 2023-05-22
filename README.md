# Browser technologies | Enquete over de minor Web Development

[Equete website](https://jimflament.github.io/browser-technologies-2223/)

## Introductie

Voor het vak browser technologies moeten we een demo maken op basis van een user story. Ik heb voor de volgende user story gekozen:

> Ik wil een enquête kunnen invullen over de minor Web Development, met verschillende antwoordmogelijkheden. Ik wil duidelijk zien waar ik ben en hoeveel ik nog te doen heb. Ik wil eerder ingevulde vragen kunnen herzien. Als ik de enquête niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.
> 

De gebruiker moet een enquete kunnen invullen over de minor Web Development. De enquete moet ook aan de volgende eisen voldoen:

- Studentgegevens (naam + nummer) verplicht
- Per vak
    - naam
    - docent(en)
    - weken waarin je het vak deed
    - beoordeling op schaal 1-10 van
    - lesstof (hoe moeilijk is het)
    - uitleg (hoe duidelijk is het uitgelegd)
    - eigen inzicht (hoe goed snap je het)
    - Zorg ervoor dat de gebruiker niet teveel formuliervelden in 1 keer ziet.
- Validatie: Zorg ervoor dat het formulier compleet wordt ingevuld. Geef duidelijke foutmeldingen. Bedenk zelf wanneer en hoe de validatie zal plaatsvinden.
- Als ik de enquete niet afkrijg, wil ik later weer verder gaan met waar ik ben gebleven.
- Duidelijke interface waarmee gebruiker terug kan naar vorige vragen. (En misschien ook om een vraag over te slaan?)
- Duidelijke interface die aangeeft waar je bent in het formulier
- Je mag geen zichtbare radio buttons gebruiken
- Het formulier moet een light mode en dark mode hebben.

Op basis van deze user story en aanvullende informatie ben ik begonnen met het maken van de enquete.

---

## **Progressive Enhancement**

Progressive Enhancement is een ontwerp- en ontwikkelingsbenadering voor het web die zich richt op het creëren van een robuuste en toegankelijke gebruikerservaring op verschillende apparaten, browsers en netwerkcondities. Het kernprincipe van progressive enhancement is het bouwen van een basisversie van een website of webtoepassing die toegankelijk en functioneel is, zelfs in de meest elementaire omgevingen, en deze vervolgens progressief uitbreiden met extra functies en verbeteringen voor meer capabele apparaten en browsers.

![Schermafbeelding 2023-05-22 173156.png](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/Schermafbeelding_2023-05-22_173156.png)

![Schermafbeelding 2023-05-22 173449.png](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/Schermafbeelding_2023-05-22_173449.png)

![Schermafbeelding 2023-05-22 173506.png](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/Schermafbeelding_2023-05-22_173506.png)

![Schermafbeelding 2023-05-22 173656.png](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/Schermafbeelding_2023-05-22_173656.png)

---

## Feature Detection

Feature detection is een techniek die wordt gebruikt om te controleren of een bepaalde functionaliteit (feature) wordt ondersteund door de browser of het apparaat van een gebruiker voordat deze wordt gebruikt. In plaats van te vertrouwen op de detectie van een specifieke browser of versie, wordt er gecontroleerd of een bepaalde functionaliteit beschikbaar is.

Door feature detection toe te passen, kunnen ontwikkelaars ervoor zorgen dat hun websites en webtoepassingen soepel werken, zelfs op browsers die mogelijk niet de nieuwste functies ondersteunen. Het stelt ontwikkelaars ook in staat om progressieve enhancement toe te passen, waarbij extra functies worden toegevoegd aan browsers die bepaalde functionaliteiten ondersteunen, terwijl een fallback-optie beschikbaar is voor browsers die dat niet doen. Op deze manier kan een breder publiek toegang krijgen tot de inhoud en functionaliteit van een website.

---

## Werkwijze

Ik ben begonnen met de hele enquête in HTML op te bouwen zodat ik zeker wist dat de core-functionaliteit zou werken en dat is het invullen en versturen van de enquête. Daarna ben ik me gaan richten op CSS om het er wat mooier uit te laten zien. Ik heb er ook voor gezorgd dat zoveel mogelijk visuele feedback via CSS werd gedaan en niet Javascript. Javascript is in mijn ogen bedoelt om functionaliteit toe te voegen en geen styling. Als laatst heb ik Javascript gebruikt om de enquête op te delen zodat je door de vragen heen kan navigeren en constant maar 1 vraag op je scherm hebt.

Na wat feedback ben ik opnieuw gaan kijken naar de eisen waar de enquete aan moet voldoen en heb ik de keuze gemaakt om de volgende eisen weg te laten:

**Studentgegevens (naam + nummer) verplicht**

Ik heb er voor gekozen om dit optioneel te maken zodat de student kan kiezen om de enquete anoniem in te vullen.

**Per vak - docent(en), weken waarin je het vak deed**

Ik vond het niet nodig om de student zelf de docenten en weken per vak in te laten vullen. De docenten zijn vast per vak en hoeven dus niet individueel ingevuld te worden. Als je deze enquete krijgt toegestuurd heb je net de vakken gehad en is de datum dus niet relevant om nog ingevuld te worden of zelf getoont te worden.

Ik heb ook een opmerking gedeelte toegevoegd per vak zodat de studenten eventueel nog wat aanvullende feedback kan invullen.

---

## Features

Mijn enquête heeft de volgende PE features:

- Light/dark mode
- Tabbable
- Save state
- Duidelijke interface

## Test verslag

Mijn enquête is op de volgende browsers getest:

- Chromium
- Firefox
- Flow
- Safari IOS
- Chrome Android

![Scherm­afbeelding 2023-04-06 om 00.48.28.png](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/Schermafbeelding_2023-04-06_om_00.48.28.png)

![Scherm­afbeelding 2023-04-06 om 00.49.41.png](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/Schermafbeelding_2023-04-06_om_00.49.41.png)

![Scherm­afbeelding 2023-04-06 om 00.50.24.png](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/Schermafbeelding_2023-04-06_om_00.50.24.png)

![WhatsApp Image 2023-04-06 at 00.55.06.jpeg](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/WhatsApp_Image_2023-04-06_at_00.55.06.jpeg)

![IMG_2790.PNG](Browser%20technologies%20Enquete%20over%20de%20minor%20Web%20Dev%20d4c9a35d026d4eb38a27f781ccd01d2a/IMG_2790.png)

Ik heb het zo simpel mogelijk gehouden zodat het op de meest browser kan werken. Ik heb een klein onderzoek gedaan naar :focus en hoe ik dat kan gebruiken om de gebruiker te laten zien waar die zich momenteen bevindt tijdens het tabben.

*niet ondersteund door IE 11 en Opera Mini

Ik heb ook onderzoek gedaan hoe ik light en dark mode implementeer in een website doormiddel van een meta tag die kijkt wel color scheme de gebruiker momenteel hanteert en dan de gepaste stijl van de website te weergeven doormiddel van een media query

*Niet ondersteund door IE 11 en Opera Mini

En ik heb onderzoek gedaan naar het implementeren van google fonts die zich lokaal bevinden en daar een aantal fallback fonts op te plaatsen zodat het altijd wel redelijk dezelfde stijl blijft als er een font wegvalt.

*Niet ondersteund door IE 11

Ik heb mijn enquête getest met en zonder CSS en Javascript. en in beide gevallen werkt de core-functionaliteit nog steeds. Als javascript uit staat word het een lange lijst van alle vragen en met CSS uit staat alles vrij dicht op elkaar maar de Javascript functies werken nog steeds

screenreader test

[https://youtu.be/13L9zfdaUTc](https://youtu.be/13L9zfdaUTc)