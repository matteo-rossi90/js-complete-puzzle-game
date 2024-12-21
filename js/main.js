

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

const shuffleLandscape = shuffleArray(imgLandscape)

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

//immagine gatto
const cat = document.getElementById('cat')

//immagine paesaggio
const landscape = document.getElementById('landscape')

const textImg = document.getElementById('text-img')

flower.style.display = 'none';

cat.style.display = 'none';

landscape.style.display = 'none';

//immagini
const imagesMap = {
    flower: shuffleFlower,
    cat: shuffleCat,
    landscape: shuffleLandscape,
};

// Mappa pulsanti difficoltà
const levels = {
    easy,
    medium,
    hard,
};

//al click del pulsante inizia il gioco
play.addEventListener('click', () =>{

    //nasconde il titolo
    selected.style.display = 'none';

    //nasconde il tasto start
    play.style.display = 'none';

    //mostra il testo sopra i tre livelli di difficoltà
    choice.style.display = 'block'

    // mostra pulsanti di difficoltà
    Object.values(levels).forEach((button) => (button.style.display = 'inline-block'));
    choice.style.display = 'block';

    // genera i livelli di difficoltà
    Object.values(levels).forEach((button) => {

        //abilità tutti i livelli di difficoltà
        button.addEventListener('click', () => {
            choice.style.display = 'none';
            Object.values(levels).forEach((btn) => (btn.style.display = 'none'));

            // mostra opzioni di immagini
            if(button === easy){ // se si sceglie la modalità facile
                
                //immagini della modailità facile
                flower.style.display = 'flex';
                cat.style.display = 'flex';
                landscape.style.display = 'flex';
            }

            //mostra il testo sopra le tre immagini
            textImg.style.display = 'block';
        });
    });

    // assegna gli eventi alle immagini
    Object.keys(imagesMap).forEach((key) => {
        const element = document.getElementById(key);
        element.addEventListener('click', () => setupGame(imagesMap[key]));
    });


});
















