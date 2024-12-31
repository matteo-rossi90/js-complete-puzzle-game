

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

//titolo inserito in modo dinamico
const string = 'Puzzle Game'

for(let i=0; i < string.length; i++){
    let char = string[i]
    
    const span = document.createElement("span");
    span.className = "letter";
    span.style.setProperty("--i", i + 1);

    //se non c'è una lettera, inserisci uno spazio
    if (char === " ") {
        span.innerHTML = "&nbsp;"; 
    } else {
        span.textContent = char;
    }
    title.appendChild(span);
}

//al click del pulsante info mostra la guida del gioco
info.addEventListener('click', () =>{

    //nasconde il titolo
    selected.style.display = 'none';

    //mostra il tasto play
    play.style.display = 'flex';

    //nasconde il tasto info
    info.style.display = 'none';

    //mostra le istruzioni
    instruct.style.display = 'block'
    instruct.style.animation = 'fadeIn 0.8s ease'

    //stampa le istruzioni del gioco in pagina
    instruct.innerHTML = `
        <h3>Come si gioca?</h3>
        <p class="spacing"> 
            Lo scopo del gioco è creare un puzzle partendo da un'immagine predefinita. 
            Avrai delle tessere in cui è stata divisa l'immagine e dovrai ricomporla riordinando le tessere nell'ordine corretto.
        </p>
        <p class="spacing">
            Esistono tre livelli di difficoltà. Ogni livello offre immagini diverse e 
            presenta alcune caratteristiche:
            <ul class="spacing">
                <li><strong>Modalità facile:</strong> la versione di gioco più semplice in cui le tessere disponibili sono più grandi e non c'è un timer entro il quale completare il gioco</li>
                <li><strong>Modalità Media: </strong>in questo livello le tessere sono sempre grandi ma hai a disposizione solo fino a 5 minuti per completare il gioco </li>
                <li><strong>Modalità difficile: </strong> in questo livello hai solo fino a 8 minuti per ricomporre un'immagine e dovrai usare tessere più piccole</li>
            </ul>
        </p>
        <p class="text">
            Se non riesci a ricomporre l'immagine dando un ordine sbagliato alle tessere o entro lo scadere del tempo, hai perso! Puoi comunque ricominciare
            una nuova partita. Premi il tasto <strong>Inizia</strong> per giocare.

        </p>`
})

//al click del pulsante inizia il gioco
play.addEventListener('click', () =>{

    //nasconde il titolo
    selected.style.display = 'none';

    //nasconde il tasto play
    play.style.display = 'none';

    //nasconde il tasto info
    info.style.display = 'none';

    //nasconde le istruzioni
    instruct.style.display = 'none'

    // mostra pulsanti di difficoltà
    Object.values(levels).forEach((button) => {
        button.style.display = 'inline-block'
        button.style.animation = 'entryTitle 0.8s ease'
    });

    //testo che appare sopra i tre pulsanti
    choice.style.display = 'block';
    choice.style.animation = 'fadeIn 0.8s ease'

    //visualizza la descrizione dei livelli di difficoltà
    description.style.display = 'flex';
    description.style.animation = 'entryTitle 0.8s ease'

    // genera i livelli di difficoltà
    Object.values(levels).forEach((button) => {

        //abilità tutti i livelli di difficoltà
        button.addEventListener('click', () => {

            //nascondi il testo che appare sopra i tre pulsanti
            choice.style.display = 'none';

            //nascondi descrizioni
            description.style.display = 'none';

            topBoard.style.display = 'none';

            Object.values(levels).forEach((btn) => (btn.style.display = 'none'));

            // mostra opzioni di immagini
            if(button === easy){ // se si sceglie la modalità facile
                
                //immagini della modalità facile
                flower.style.display = 'block';
                flower.style.animation = 'fadeIn 0.8s ease';

                cat.style.display = 'block';
                cat.style.animation = 'fadeIn 0.8s ease';

                landscape.style.display = 'block';
                landscape.style.animation = 'fadeIn 0.8s ease';


            }else if(button === medium){// se si sceglie la modalità media

                //immagini della modalità media
                airbaloon.style.display = 'block';
                airbaloon.style.animation = 'fadeIn 0.8s ease';

                wolf.style.display = 'block';
                wolf.style.animation = 'fadeIn 0.8s ease';

                village.style.display = 'block';
                village.style.animation = 'fadeIn 0.8s ease';

            }else{// se si sceglie la modalità difficile

                //immagini della modalità difficile
                city.style.display = 'block'
                city.style.animation = 'fadeIn 0.8s ease';

                florence.style.display = 'block'
                florence.style.animation = 'fadeIn 0.8s ease';

                grassland.style.display = 'block'
                grassland.style.animation = 'fadeIn 0.8s ease';
            }

            //mostra il testo sopra le tre immagini
            textImg.style.display = 'block';

            suggest.style.display = 'block';
            suggest.innerHTML = `
                <p class="spacing">
                    <strong>Consiglio:</strong>
                    guarda per qualche minuto l'immagine che vuoi scegliere, in modo da memorizzarne i dettagli
                </p>`
            
            suggest.style.animation = 'fadeIn 0.8s ease'

            // assegna gli eventi alle immagini
            Object.keys(imagesMap).forEach((key) => {
                const element = document.getElementById(key);

                if (!element) {
                    console.error(`Elemento con ID '${key}' non trovato nel DOM.`);
                    return; // salta l'aggiunta del listener se l'elemento non esiste
                }

                console.log(`Aggiunto listener all'immagine '${key}'`);

                // console.log(imagesMap[key])
                // console.log(element)
                element.addEventListener('click', () => {

                    imageChoice.style.display = 'none'
                    
                    btnBox.style.display = 'none';

                    topBoard.style.display = 'none';

                    puzzleBox.style.display = 'block'

                    //mostra il timer e l'icona
                    boxTimer.style.display = 'flex'

                    clock.innerHTML = `
                        <img src="./img/clock.gif">
                    `
                    //animazione
                    boxTimer.style.animation = 'entryTitle 0.6s ease'

                    if(button === easy){

                        //crea l'area di gioco
                        // createBoardBox('large')
                        createBoardGame('large')

                        //dispone le tessere
                        setupGame(imagesMap[key], 'large', 'large')

                        //nascondi timer nella modalità facile
                        boxTimer.style.display = 'none'

                    }

                    //se si attiva qualsiasi immagine di difficoltà media
                    else if (button === medium) {

                        //crea l'area di gioco
                        // createBoardBox('large')
                        createBoardGame('large')

                        //dispone le tessere
                        setupGame(imagesMap[key], 'large', 'large')

                        //imposta il contenuto del timer a 5 minuti
                        countDown.textContent = '05:00'
                        
                        //fai partire il countdown che dura 5 minuti
                        let fiveMinutes = 60 * 5,
                            display = countDown;
                        startTimer(fiveMinutes, display);
                    }

                    else if(button === hard){

                        //crea l'area di gioco
                        // createBoardBox('small')
                        createBoardGame('small')

                        //dispone le tessere
                        setupGame(imagesMap[key], 'small', 'small')

                        //imposta il contenuto del timer a 8 minuti
                        countDown.textContent = '08:00'

                        //fai partire il countdown che dura 8 minuti
                        let eightMinutes = 60 * 8,
                            display = countDown;
                        startTimer(eightMinutes, display);

                    }
                });

            });
        });
    });



});
















