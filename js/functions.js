
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
        if (isBoardFull()) {

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
function createTiles(imagesArray) {
    for (let i = 0; i < imagesArray.length; i++) {
        const tile = document.createElement('div'); // creare un elemento blocco
        tile.classList.add('tiles'); //aggiungere la classe tiles nell'elemento blocco
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
function createDropZones(count) {
    for (let i = 0; i < count; i++) {
        const dropZone = document.createElement('div');
        dropZone.classList.add('tiles-drag');
        dropZone.addEventListener('dragover', allowDrop);
        dropZone.addEventListener('drop', drop);

        boardBox.appendChild(dropZone);
    }
}

//gestisce la creazione delle tessere e l'assegnazione del drag e drop
function setupGame(imagesArray) {
    flower.style.display = 'none';
    cat.style.display = 'none';
    landscape.style.display = 'none';
    textImg.style.display = 'none';

    boardGame.innerHTML = ''; // Svuota l'area di gioco
    boardBox.innerHTML = ''; // Svuota l'area delle drop zones

    createTiles(imagesArray);
    createDropZones(imagesArray.length);

    guide.style.display = 'block';
}


