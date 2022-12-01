
/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const startElement = document.getElementById('playButton');
const boxElement = document.getElementById('largeBox');
const sectionMainElement = document.getElementById('sectionMain');

startElement.addEventListener('click', function(){
   sectionMainElement.classList.toggle('resetCube')
   
   function cubeCreation (){
      const divCreateElement = document.createElement('div')
      divCreateElement.classList.add('cube')
      return divCreateElement
   }
   
   for (let i = 1; i <= 100; i++){
      const newCube= cubeCreation ();
      newCube.innerHTML = i;
      boxElement.appendChild(newCube);
   }

   
})