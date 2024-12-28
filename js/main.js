

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

                        //imposta il contenuto del timer a 10 minuti
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

                        //imposta il contenuto del timer a 6 minuti
                        countDown.textContent = '06:00'

                        //fai partire il countdown che dura 6 minuti
                        let eightMinutes = 60 * 8,
                            display = countDown;
                        startTimer(sixMinutes, display);

                    }
                });

            });
        });
    });



});
















