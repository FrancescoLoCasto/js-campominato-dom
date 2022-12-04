
/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

const boxElement = document.getElementById('largeBox');
const startElement = document.getElementById('playButton');
const sectionMainElement = document.getElementById('sectionMain');
const value = document.getElementById('value');

startElement.addEventListener('click', function(){
   boxElement.innerHTML = "";
   boxElement.classList.add('largeBox')

   const granadeList = [];
   let result = 0;
   value.innerHTML = result

      for(let i = 1; i <= 100; i++){
         while (bgranadeList.length>15){
            granadeList.splice(Math.floor(getRandomNumber(0,granadeList.length)),1);
        }

         let newSquareBox = createSquare();
         newSquareBox.innerHTML = i

         newSquareBox.addEventListener('click', function(){

         })
      }
})
