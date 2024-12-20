

//individuare l'elemento corrispondente al pulsante di inizio gioco
const play = document.getElementById('play')

//individuare il pulsante reset
const reset = document.getElementById('reset');

//individuare l'area in cui le tiles vengono trascinate le tessere
const boardBox = document.getElementById('puzzle-board');

//individuare l'area che ospita le tessere da trascinare
const boardGame = document.getElementById('tiles-box');

//all'avvio del gioco rimescola le tessere in ordine casuale
const shuffleFlower = shuffleArray(imgFlower)

const shuffleCat = shuffleArray(imgCat)

//
const selected = document.querySelector('.selected')

//istruzioni del gioco
const guide = document.getElementById('guide')

//blocco che contiene l'area di gioco
const box = document.getElementById('container-puzzle')

//testo che illustra i livelli di difficoltà
const choice = document.getElementById('choice')

//pulsante per la modalità facile
const easy = document.getElementById('easy')

//pulsante per la modalità media
const medium = document.getElementById('medium')

//pulsante per la modalità difficile
const hard = document.getElementById('hard')

const imageChoice = document.getElementById('wrap-image')

//immagine fiore
const flower = document.getElementById('flower')

const cat = document.getElementById('cat')

const textImg = document.getElementById('text-img')

flower.style.display = 'none';

cat.style.display = 'none';

//al click del pulsante inizia il gioco
play.addEventListener('click', () =>{

    //nasconde il titolo
    selected.style.display = 'none';

    //nasconde il tasto start
    play.style.display = 'none';

    //mostra i tre livelli di difficoltà
    easy.style.display = 'inline-block';

    medium.style.display = 'inline-block';

    hard.style.display = 'inline-block';

    //mostra il testo sopra i tre livelli di difficoltà
    choice.style.display = 'block'

    //attiva la modalità facile
    easy.addEventListener('click', () => {

        choice.style.display = 'none'

        easy.style.display = 'none';
        medium.style.display = 'none';
        hard.style.display = 'none';

        flower.style.display = 'flex'

        cat.style.display = 'flex'

        textImg.style.display = 'block'

        flower.addEventListener('click', () =>{

            flower.style.display = 'none'

            cat.style.display = 'none'

            textImg.style.display = 'none'

            //iterare le tessere per inserirle nell'area per poter essere trascinate
            for (let i = 0; i < shuffleFlower.length; i++) {

                const tile = document.createElement('div'); // creare un elemento blocco
                tile.classList.add('tiles'); //aggiungere la classe tiles nell'elemento blocco

                const imgElement = document.createElement('img'); //inserire l'elemento img
                imgElement.src = shuffleFlower[i]; //inserire l'elemento src delle singole immagini
                imgElement.draggable = true; //inserire nel markup l'attributo draggable
                imgElement.id = `tile-${parseInt(shuffleFlower[i].match(/\d+/)[0])}`; //inserire l'id della singola tessera
                imgElement.addEventListener('dragstart', drag); //impostare la capacità di trascinare le tessere grazie alla funzione

                tile.appendChild(imgElement); // integrare tutti gli elementi all'elemento blocco
                boardGame.appendChild(tile); //integrare l'elemento blocco all'area di gioco dove si pescano le tessere
            }

            //iterare le tessere nell'area principale di gioco
            for (let i = 0; i < imgFlower.length; i++) {

                const dropZone = document.createElement('div');
                dropZone.classList.add('tiles-drag'); // creare la classe tiles-drag
                dropZone.addEventListener('dragover', allowDrop); //abilitare la capacità di effettuare il drop delle tessere
                dropZone.addEventListener('drop', drop); //fare in modo che le tessere siano inserite nella griglia di gioco una volta trascinate

                boardBox.appendChild(dropZone); // inserire tutti gli elementi nell'area di gioco
            }

            //mostra la scritta in alto
            guide.style.display = 'block';

        })

        cat.addEventListener('click', () => {

            flower.style.display = 'none'

            cat.style.display = 'none'

            textImg.style.display = 'none'

            //iterare le tessere per inserirle nell'area per poter essere trascinate
            for (let i = 0; i < shuffleCat.length; i++) {
                
                const tile = document.createElement('div'); // creare un elemento blocco
                tile.classList.add('tiles'); //aggiungere la classe tiles nell'elemento blocco
                const imgElement = document.createElement('img'); //inserire l'elemento img
                imgElement.src = shuffleCat[i]; //inserire l'elemento src delle singole immagini
                imgElement.draggable = true; //inserire nel markup l'attributo draggable
                imgElement.id = `tile-${parseInt(shuffleCat[i].match(/\d+/)[0])}`; //inserire l'id della singola tessera
                imgElement.addEventListener('dragstart', drag); //impostare la capacità di trascinare le tessere grazie alla funzione
                tile.appendChild(imgElement); // integrare tutti gli elementi all'elemento blocco
                boardGame.appendChild(tile); //integrare l'elemento blocco all'area di gioco dove si pescano le tessere
            }

            //iterare le tessere nell'area principale di gioco
            for (let i = 0; i < imgCat.length; i++) {

                const dropZone = document.createElement('div');
                dropZone.classList.add('tiles-drag'); // creare la classe tiles-drag
                dropZone.addEventListener('dragover', allowDrop); //abilitare la capacità di effettuare il drop delle tessere
                dropZone.addEventListener('drop', drop); //fare in modo che le tessere siano inserite nella griglia di gioco una volta tras
                boardBox.appendChild(dropZone); // inserire tutti gli elementi nell'area di gioco
            }

            //mostra la scritta in alto
            guide.style.display = 'block';
        })


    })



})










