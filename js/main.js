

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

const shuffleAirbaloon = shuffleArray(imgAirbaloon)

const shuffleWolf = shuffleArray(imgWolf)

const shuffleVillage = shuffleArray(imgVillage)

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

const airbaloon = document.getElementById('airbaloon')

const wolf = document.getElementById('wolf')

const village = document.getElementById('village')

//testo sopra le immagini da scegliere
const textImg = document.getElementById('text-img')

//testi che descrivono i livelli di difficoltà
const description = document.getElementById('level-description')

flower.style.display = 'none';

cat.style.display = 'none';

landscape.style.display = 'none';

airbaloon.style.display = 'none';

wolf.style.display = 'none';

village.style.display = 'none';

const message = document.getElementById('message')

let countDown = document.querySelector('#time')

//immagini complete
const imagesMap = {
    flower: shuffleFlower,
    cat: shuffleCat,
    landscape: shuffleLandscape,
    airbaloon: shuffleAirbaloon,
    wolf: shuffleWolf,
    village: shuffleVillage
};

// pulsanti difficoltà
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

    //testo che appare sopra i tre pulsanti
    choice.style.display = 'block';

    //visualizza la descrizione dei livelli di difficoltà
    description.style.display = 'flex';

    // genera i livelli di difficoltà
    Object.values(levels).forEach((button) => {

        //abilità tutti i livelli di difficoltà
        button.addEventListener('click', () => {

            //nascondi il testo che appare sopra i tre pulsanti
            choice.style.display = 'none';

            //nascondi descrizioni
            description.style.display = 'none';

            Object.values(levels).forEach((btn) => (btn.style.display = 'none'));

            // mostra opzioni di immagini
            if(button === easy){ // se si sceglie la modalità facile
                
                //immagini della modalità facile
                flower.style.display = 'flex';
                cat.style.display = 'flex';
                landscape.style.display = 'flex';

            }else if(button === medium){

                //immagini della modalità media
                airbaloon.style.display = 'flex';

                wolf.style.display = 'flex';

                village.style.display = 'flex';

            }

            //mostra il testo sopra le tre immagini
            textImg.style.display = 'block';

            // assegna gli eventi alle immagini
            Object.keys(imagesMap).forEach((key) => {
                const element = document.getElementById(key);
                element.addEventListener('click', () => {

                    //dispone le tessere
                    setupGame(imagesMap[key])

                    //se si attiva qualsiasi immagine di difficoltà media
                    if(levels.medium){

                        //imposta il contatore
                        countDown.style.display = 'flex'

                        //imposta il contenuto del timer a 20 minuti
                        countDown.textContent = '15:00'
                        
                        //fai partire il countdown che dura 10 minuti
                        let fiftyMinutes = 60 * 15,
                            display = countDown;
                        startTimer(fiftyMinutes, display);
                        
                    }
                });

            });
        });
    });



});
















