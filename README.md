# Browser technologies

**Mijn enquête:** [https://jimflament.github.io/browser-technologies-2223/](https://jimflament.github.io/browser-technologies-2223/)

Mijn enquête heeft de volgende PE features:

- Light/dark mode
- Tabbable
- Save state
- Duidelijke interface

Ik ben begonnen met de de hele enquête in HTML op te bouwen zodat ik zeker wist dat de core-functionaliteit zou werken en dat is het invullen en versturen van de enquête. Daarna ben ik me gaan richten op CSS om het er wat mooier uit te laten zien. Ik heb er ook voor gezorgd dat zoveel mogelijk visuele feedback op via CSS werd gedaan en niet Javascript. Javascript is in mijn ogen bedoelt om functionaliteit toe te voegen en geen styling. Als laatst heb ik Javascript gebruikt om de enquête op de delen zodat je door de vragen heen kan navigeren en constant maar 1 vraag op je scherm hebt.

Mijn enquête is op de volgende browsers getest:

- Chromium
- Firefox
- Flow
- Safari IOS
- Chrome Android

![Scherm­afbeelding 2023-04-06 om 00.48.28.png](https://github.com/Jimflament/browser-technologies-2223/blob/main/images/Scherm%C2%ADafbeelding%202023-04-06%20om%2000.48.28.png)

![Scherm­afbeelding 2023-04-06 om 00.49.41.png](https://github.com/Jimflament/browser-technologies-2223/blob/main/images/Scherm%C2%ADafbeelding%202023-04-06%20om%2000.49.41.png)

![Scherm­afbeelding 2023-04-06 om 00.50.24.png](https://github.com/Jimflament/browser-technologies-2223/blob/main/images/Scherm%C2%ADafbeelding%202023-04-06%20om%2000.50.24.png)

![WhatsApp Image 2023-04-06 at 00.55.06.jpeg](https://github.com/Jimflament/browser-technologies-2223/blob/main/images/WhatsApp%20Image%202023-04-06%20at%2000.55.06.jpeg)

![IMG_2790.PNG](https://github.com/Jimflament/browser-technologies-2223/blob/main/images/IMG_2790.PNG)

## Test verslag

Ik heb het zo simpel mogelijk gehouden zodat het op de meest browser kan werken. Ik heb een klein onderzoek gedaan naar :focus en hoe ik dat kan gebruiken om de gebruiker te laten zien waar die zich momenteen bevindt tijdens het tabben.

*niet ondersteund door IE 11 en Opera Mini

Ik heb ook onderzoek gedaan hoe ik light en dark mode implementeer in een website doormiddel van een meta tag die kijkt wel color scheme de gebruiker momenteel hanteert en dan de gepaste stijl van de website te weergeven doormiddel van een media query

*Niet ondersteund door IE 11 en Opera Mini

En ik heb onderzoek gedaan naar het implementeren van google fonts die zich lokaal bevinden en daar een aantal fallback fonts op te plaatsen zodat het altijd wel redelijk dezelfde stijl blijft als er een font wegvalt.

*Niet ondersteund door IE 11

Ik heb mijn enquête getest met en zonder CSS en Javascript. en in beide gevallen werkt de core-functionaliteit nog steeds. Als javascript uit staat word het een lange lijst van alle vragen en met CSS uit staat alles vrij dicht op elkaar maar de Javascript functies werken nog steeds

screenreader test

[https://youtu.be/d5ndPiSTEbw](https://youtu.be/d5ndPiSTEbw)
