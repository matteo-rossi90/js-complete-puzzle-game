
const imgCat = [
    './img/img_cat/1.jpg', 
    './img/img_cat/2.jpg',
    './img/img_cat/3.jpg',
    './img/img_cat/4.jpg',
    './img/img_cat/5.jpg',
    './img/img_cat/6.jpg',
    './img/img_cat/7.jpg',
    './img/img_cat/8.jpg',
    './img/img_cat/9.jpg',
    './img/img_cat/10.jpg',
    './img/img_cat/11.jpg',
    './img/img_cat/12.jpg',
    './img/img_cat/13.jpg',
    './img/img_cat/14.jpg',
    './img/img_cat/15.jpg',
    './img/img_cat/16.jpg',
];

const imgFlower = [
    './img/img_flower/1.jpg',
    './img/img_flower/2.jpg',
    './img/img_flower/3.jpg',
    './img/img_flower/4.jpg',
    './img/img_flower/5.jpg',
    './img/img_flower/6.jpg',
    './img/img_flower/7.jpg',
    './img/img_flower/8.jpg',
    './img/img_flower/9.jpg',
    './img/img_flower/10.jpg',
    './img/img_flower/11.jpg',
    './img/img_flower/12.jpg',
    './img/img_flower/13.jpg',
    './img/img_flower/14.jpg',
    './img/img_flower/15.jpg',
    './img/img_flower/16.jpg',
]

//individuare l'elemento corrispondente al pulsante di inizio gioco
const play = document.getElementById('play')

//individuare il pulsante reset
const reset = document.getElementById('reset');

//individuare l'area in cui le tiles vengono trascinate le tessere
const boardBox = document.getElementById('puzzle-board');

//individuare l'area che ospita le tessere da trascinare
const boardGame = document.getElementById('tiles-box');

//all'avvio del gioco rimescola le tessere in ordine casuale
const shuffledImages = shuffleArray(imgFlower)

const selected = document.querySelector('.selected')

const guide = document.getElementById('guide')

const box = document.getElementById('container-puzzle')

const choice = document.getElementById('choice')

const easy = document.getElementById('easy')

const medium = document.getElementById('medium')

const hard = document.getElementById('hard')

//al click del pulsante inizia il gioco
play.addEventListener('click', () =>{

    //nasconde il titolo
    selected.style.display = 'none';

    //nasconde il tasto start
    play.style.display = 'none';

    easy.style.display = 'inline-block';

    medium.style.display = 'inline-block';

    hard.style.display = 'inline-block';

    choice.style.display = 'block'

    easy.addEventListener('click', () =>{

        choice.style.display = 'none'

        easy.style.display = 'none';
        medium.style.display = 'none';
        hard.style.display = 'none';

        //iterare le tessere per inserirle nell'area per poter essere trascinate
        for (let i = 0; i < shuffledImages.length; i++) {

            const tile = document.createElement('div'); // creare un elemento blocco
            tile.classList.add('tiles'); //aggiungere la classe tiles nell'elemento blocco

            const imgElement = document.createElement('img'); //inserire l'elemento img
            imgElement.src = shuffledImages[i]; //inserire l'elemento src delle singole immagini
            imgElement.draggable = true; //inserire nel markup l'attributo draggable
            imgElement.id = `tile-${parseInt(shuffledImages[i].match(/\d+/)[0])}`; //inserire l'id della singola tessera
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



})










