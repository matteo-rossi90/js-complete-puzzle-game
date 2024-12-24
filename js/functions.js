
//// funzioni ////

function createBox(lenBox){

    let dimBox = '';
    if(lenBox === 'large'){
        dimBox = 'width-box-large'
    }else if(lenBox === 'small'){
        dimBox = 'width-box-small'
    }

    boardBox.classList.add(dimBox)

}

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
        if (isBoardFull()) {

            //controlla se tutte le tessere sono nella posizione corretta
            if (checkWin()) {
                countDown.style.display = 'none'; //nascondi il countdown
                message.style.display = 'block';
                message.innerHTML = 'Hai vinto!' //mostra il messaggio se le tessere sono nella posizione giusta
            } else {
                countDown.style.display = 'none'; //nascondi il countdown
                message.style.display = 'block';
                message.innerHTML = 'Game over!' //mostra il messaggio se le tessere sono nella posizione sbagliata

            }

            reset.style.display = 'block'; //compare il pulsante per iniziare una nuova partita

            reset.addEventListener('click', function () {//pulsante per iniziare una nuova partita
                location.reload();
            });

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

//genera le tessere da trascinare
function createTiles(imagesArray, width) {
    for (let i = 0; i < imagesArray.length; i++) {
        const tile = document.createElement('div'); // creare un elemento blocco
        tile.classList.add('tiles'); //aggiungere la classe tiles nell'elemento blocco
        
        let tileWidth = '';
        if (width === 'large') {
            tileWidth = 'tile-large'
        } else if (width === 'small') {
            tileWidth = 'tile-small';
        }
        
        tile.classList.add(tileWidth)
        
        const imgElement = document.createElement('img'); //inserire l'elemento img
        imgElement.src = imagesArray[i]; //inserire l'elemento src delle singole immagini
        imgElement.draggable = true; //inserire nel markup l'attributo draggable
        imgElement.id = `tile-${parseInt(imagesArray[i].match(/\d+/)[0])}`; //inserire l'id della singola tessera
        imgElement.addEventListener('dragstart', drag); //impostare la capacità di trascinare le tessere grazie alla funzione
        tile.appendChild(imgElement); // integrare tutti gli elementi all'elemento blocco
        boardGame.appendChild(tile); //integrare l'elemento blocco all'area di gioco dove si pescano le tessere
    }

}

//genera le tessere che devono essere rilasciate nella'rea di gioco
function createDropZones(count, length) {
    for (let i = 0; i < count; i++) {
        const dropZone = document.createElement('div');
        dropZone.classList.add('tiles-drag');
        dropZone.addEventListener('dragover', allowDrop);
        dropZone.addEventListener('drop', drop);

        let dimensionClass = '';
        if (length === 'large') {
            dimensionClass = 'dimension-large'

        } else if (length === 'small') {
            dimensionClass = 'dimension-small';
        }

        dropZone.classList.add(dimensionClass);
        boardBox.appendChild(dropZone);

    }
}

//gestisce la creazione delle tessere e l'assegnazione del drag e drop
function setupGame(imagesArray, length, width) {
    flower.style.display = 'none';
    cat.style.display = 'none';
    landscape.style.display = 'none';
    village.style.display = 'none';
    wolf.style.display = 'none';
    airbaloon.style.display = 'none';
    city.style.display = 'none';
    
    textImg.style.display = 'none';

    boardGame.innerHTML = ''; // svuota l'area di gioco
    boardBox.innerHTML = ''; // svuota l'area delle drop zones

    createTiles(imagesArray, width);
    createDropZones(imagesArray.length, length);

    guide.style.display = 'block';
}

//genera un timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval)
            countDown.style.display = 'none';
            message.style.display = 'block';
            message.innerHTML = 'Game over!';

            reset.style.display = 'block'; //compare il pulsante per iniziare una nuova partita
            reset.addEventListener('click', function () {//pulsante per iniziare una nuova partita
                location.reload();
            });
        }
    }, 1000);
}


