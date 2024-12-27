

//individuare l'elemento corrispondente al pulsante di inizio gioco
const play = document.getElementById('play')

//individuare il pulsante reset
const reset = document.getElementById('reset');

//individuare l'area in cui le tiles vengono trascinate le tessere
const boardBox = document.getElementById('puzzle-board');

//individuare l'area che ospita le tessere da trascinare
const boardGame = document.getElementById('tiles-box');

//titolo principale
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

//immagini modalità facile
const flower = document.getElementById('flower')

const cat = document.getElementById('cat')

const landscape = document.getElementById('landscape')

//immagini modalità media
const airbaloon = document.getElementById('airbaloon')

const wolf = document.getElementById('wolf')

const village = document.getElementById('village')

//immagini modalità difficile
const city = document.getElementById('city')

const florence = document.getElementById('florence')

const grassland = document.getElementById('grassland')

//testo sopra le immagini da scegliere
const textImg = document.getElementById('text-img')

//testi che descrivono i livelli di difficoltà
const description = document.getElementById('level-description')

//all'avvio del gioco rimescola le tessere in ordine casuale
const shuffleFlower = shuffleArray(imgFlower)

const shuffleCat = shuffleArray(imgCat)

const shuffleLandscape = shuffleArray(imgLandscape)

const shuffleAirbaloon = shuffleArray(imgAirbaloon)

const shuffleWolf = shuffleArray(imgWolf)

const shuffleVillage = shuffleArray(imgVillage)

const shuffleCity = shuffleArray(imgCity)

const shuffleFlorence = shuffleArray(imgFlorence)

const shuffleGrass = shuffleArray(imgGrassland)

flower.style.display = 'none';

cat.style.display = 'none';

landscape.style.display = 'none';

airbaloon.style.display = 'none';

wolf.style.display = 'none';

village.style.display = 'none';

city.style.display = 'none';

florence.style.display = 'none'

grassland.style.display = 'none'

const boxMessage = document.getElementById('message-box')

const message = document.getElementById('message')

let countDown = document.querySelector('#time')

const topBoard = document.getElementById('top-board')

const btnBox = document.getElementById('btn-line')

//tutte le immagini disponibili
const imagesMap = {
    flower: shuffleFlower,
    cat: shuffleCat,
    landscape: shuffleLandscape,
    airbaloon: shuffleAirbaloon,
    wolf: shuffleWolf,
    village: shuffleVillage,
    city: shuffleCity,
    florence: shuffleFlorence,
    grassland: shuffleGrass
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
                flower.style.display = 'block';

                cat.style.display = 'block';

                landscape.style.display = 'block';


            }else if(button === medium){// se si sceglie la modalità media

                //immagini della modalità media
                airbaloon.style.display = 'block';

                wolf.style.display = 'block';

                village.style.display = 'block';

            }else{// se si sceglie la modalità difficile

                //immagini della modalità difficile
                city.style.display = 'block'

                florence.style.display = 'block'

                grassland.style.display = 'block'
            }

            //mostra il testo sopra le tre immagini
            textImg.style.display = 'block';

            // assegna gli eventi alle immagini
            Object.keys(imagesMap).forEach((key) => {
                const element = document.getElementById(key);

                if (!element) {
                    console.error(`Elemento con ID '${key}' non trovato nel DOM.`);
                    return; // Salta l'aggiunta del listener se l'elemento non esiste
                }

                console.log(`Aggiunto listener all'immagine '${key}'`);

                // console.log(imagesMap[key])
                // console.log(element)
                element.addEventListener('click', () => {
                    
                    btnBox.style.display = 'none';

                    topBoard.style.display = 'none';

                    if(button === easy){
                        
                        //crea l'area di gioco
                        createBoardBox('large')
                        createBoardGame('large')

                        //dispone le tessere
                        setupGame(imagesMap[key], 'large', 'large')
                    }

                    //se si attiva qualsiasi immagine di difficoltà media
                    else if (button === medium) {

                        //crea l'area di gioco
                        createBoardBox('large')
                        createBoardGame('large')

                        //dispone le tessere
                        setupGame(imagesMap[key], 'large', 'large')

                        //imposta il contatore
                        countDown.style.display = 'flex'

                        //imposta il contenuto del timer a 20 minuti
                        countDown.textContent = '10:00'
                        
                        //fai partire il countdown che dura 10 minuti
                        let tenMinutes = 60 * 10,
                            display = countDown;
                        startTimer(tenMinutes, display);
                    }

                    else if(button === hard){

                        //crea l'area di gioco
                        createBoardBox('small')
                        createBoardGame('small')

                        //dispone le tessere
                        setupGame(imagesMap[key], 'small', 'small')

                        //imposta il contatore
                        countDown.style.display = 'flex'

                        //imposta il contenuto del timer a 20 minuti
                        countDown.textContent = '06:00'

                        //fai partire il countdown che dura 10 minuti
                        let sixMinutes = 60 * 6,
                            display = countDown;
                        startTimer(sixMinutes, display);

                    }
                });

            });
        });
    });



});
















