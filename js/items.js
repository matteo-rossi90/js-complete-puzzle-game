//individuare l'elemento corrispondente al pulsante di inizio gioco
const play = document.getElementById('play')

const info = document.getElementById('info')

//individuare il pulsante reset
const reset = document.getElementById('reset');

//sezione di tutta l'area di gioco
const puzzleBox = document.getElementById('puzzle-box');

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

//all'avvio del gioco le immagini disponibili sono nascoste
flower.style.display = 'none';

cat.style.display = 'none';

landscape.style.display = 'none';

airbaloon.style.display = 'none';

wolf.style.display = 'none';

village.style.display = 'none';

city.style.display = 'none';

florence.style.display = 'none'

grassland.style.display = 'none'

//box del messaggio
const boxMessage = document.getElementById('message-box')

//animazione fuochi d'artificio
const fireworks = document.getElementById('animation-winner')

//messaggio al giocatore
const message = document.getElementById('message')

//box timer
const boxTimer = document.getElementById('box-timer')

//orologio
const clock = document.getElementById('clock')

//timer
let countDown = document.querySelector('#time')

//parte in alto del gioco
const topBoard = document.getElementById('top-board')

//box che ospita tutti i bottoni del livello difficoltà
const btnBox = document.getElementById('btn-line')

//titolo
const title = document.getElementById('title')

//area che accoglie le istruzioni
const instruct = document.getElementById('instruct')

//suggerimento
const suggest = document.getElementById('suggestion')

const boxBtn = document.getElementById('play-box')