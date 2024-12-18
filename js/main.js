
const img = [
    './img/1.jpg', 
    './img/2.jpg', 
    './img/3.jpg', 
    './img/4.jpg',
    './img/5.jpg', 
    './img/6.jpg', 
    './img/7.jpg', 
    './img/8.jpg',
    './img/9.jpg', 
    './img/10.jpg', 
    './img/11.jpg', 
    './img/12.jpg',
    './img/13.jpg', 
    './img/14.jpg', 
    './img/15.jpg', 
    './img/16.jpg',
];


//individuare l'area in cui le tiles vengono trascinate le tessere
const boardBox = document.getElementById('puzzle-board');

//individuare l'area che ospita le tessere da trascinare
const boardGame = document.getElementById('tiles-box');

//individuare il pulsante reset
const reset = document.getElementById('reset');

//all'avvio del gioco rimescola le tessere in ordine casuale
const  shuffledImages = shuffleArray(img)

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

//pulsante per iniziare una nuova partita
reset.addEventListener('click', function() {
    location.reload(); 
});

//iterare le tessere nell'area principale di gioco
for (let i = 0; i < img.length; i++) {

    const dropZone = document.createElement('div');
    dropZone.classList.add('tiles-drag'); // creare la classe tiles-drag
    dropZone.addEventListener('dragover', allowDrop); //abilitare la capacità di effettuare il drop delle tessere
    dropZone.addEventListener('drop', drop); //fare in modo che le tessere siano inserite nella griglia di gioco una volta trascinate

    boardBox.appendChild(dropZone); // inserire tutti gli elementi nell'area di gioco
}

//// funzioni ////

//rimescola le tessere in ordine casuale
function shuffleArray(array) {
    const shuffledArray = array.slice(); 
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray
}

//consente allo spazio apposito il drop delle tessere
function allowDrop(event) {
    event.preventDefault();
}

//permette alle tessere di essere trascinate
function drag(event) {
    event.dataTransfer.setData('text', event.target.id);
}

//permette alle tessere il drop una volta trascinate
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const draggedElement = document.getElementById(data);

    if (!event.target.querySelector('img')) {
        event.target.appendChild(draggedElement);

        //se sono state inserite tutte le tessere
        if(isBoardFull()){

            //controlla se tutte le tessere sono nella posizione corretta
            if (checkWin()) {
                const message = document.getElementById('message')
                message.style.display = 'block';
                message.innerHTML = 'Congratulazioni, hai vinto!' //mostra il messaggio se le tessere sono nella posizione giusta
            } else {
                const message = document.getElementById('message')
                message.style.display = 'block';
                message.innerHTML = 'Game over!' //mostra il messaggio se le tessere sono nella posizione sbagliata
            }

        }
    }
}

//permette di verificare se c'è condizione di vittoria
function checkWin() {
    const dropZones = document.querySelectorAll('.tiles-drag');
    for (let i = 0; i < dropZones.length; i++) {
        const imgElement = dropZones[i].querySelector('img');
        if (!imgElement || !imgElement.id) return false; // controlla se manca una tessera
        const expectedId = `tile-${i + 1}`;
        if (imgElement.id !== expectedId) return false; // controlla se l'ID corrisponde
    }
    return true; // tutte le tessere sono al posto giusto
}

//permette di capire se sono presenti tutte le tessere
function isBoardFull() {
    const dropZones = document.querySelectorAll('.tiles-drag');
    for (let i = 0; i < dropZones.length; i++) {
        if (!dropZones[i].querySelector('img')) return false; //verifica se manca una tessere
    }
    return true;
}










