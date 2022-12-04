
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
         while (granadeList.length>15){
            granadeList.splice(Math.floor(getRandomNumber(0,granadeList.length)),1);
        }

            let newSquareBox = createSquare();
            newSquareBox.innerHTML = i

            newSquareBox.addEventListener('click', function(){
               if (value>=(100 - (granadeList.length + 1))){
                  newSquareBox.classList.add('bg-green');
                  alert("Complimenti campione! Hai vintoo!!")

            }else if(granadeList.includes(i)){
               alert("Booom Hai preso una bomba amico!");
               boxElement.innerHTML = "";
               boxElement.classList.remove('largeBox')
               result = 0
            }else if(!newSquareBox.classList.contains('bg-green')){
               newSquareBox.classList.add('bg-green');
               result +=1;
               value.innerHTML = result
            }
         })


         boxElement.appendChild(newSquareBox);
         granadeList.push(i);
         newSquareBox.classList.add(`new-${i}`)

      }
})

//Section Function

   function getRandomNumber(numMin, numMax){
      if(numMin===numMax){
         return numMax
      }
      return Math.floor(Math.random()*(numMax - numMin + 1) + numMin);
   }


   function createSquare (){
      const DivElementCreate = document.createElement('div');
      DivElementCreate.classList.add('cube');
      return DivElementCreate;
  }


