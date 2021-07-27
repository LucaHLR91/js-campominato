// Consegna
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

// BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50

// SELEZIONARE IL LIVELLO DI GIOCO
alert('Benvenuto nel Campo Minato: il gioco sta per cominciare. Buona Fortuna!')
var select_level = parseInt(prompt('Scegli il livello del gioco da 0 a 2'));
var level
switch (select_level) {
    case 0 :
        var level = 100;
        alert('Hai selezionato il livello 0: puoi scegliere numeri da 1 a 100');
        break;
    case 1 :
        var level = 80;
        alert('Hai selezionato il livello 1: puoi scegliere numeri da 1 a 80');
        break;
    case 2 :
        var level = 50;
        alert('Hai selezionato il livello 2: puoi scegliere numeri da 1 a 50');
        break;
}

//  GENERAZIONE NUMERI CASUALI TRA 1 E 100
var numbersRndArray = [];
var arrayLength = 16;
var i = 0;
do {
    var number = rndNumber(1, level);
    if (isInArray(numbersRndArray, number) == false) {
        numbersRndArray.push(number);
        i++
    }
}while (numbersRndArray.length != arrayLength);

console.log(numbersRndArray);

// CHIEDERE ALL'UTENTE 100-16 NUMERI DA 1 A 100 E VERIFICO LA PRESENZA NELL'ARRAY BOMBA
var user_array = [];
var user_array_lenght = level - 16;

function cellClick(e) {     //e = event
    var cella = e.target.dataset.cella;
    console.log(cella);
    let element = document.querySelectorAll("[data-cella='" + cella + "']");
    console.log(element[0]);

    if (isInArray(user_array, cella) == true) {
        alert('Attenzione: hai inserito lo stesso numero due volte! prendi un pezzo di carta ;)')
    } else if (isInArray(numbersRndArray, cella) == true) {
        element[0].classList.add("red");
        document.getElementById('campo').removeEventListener('click', cellClick)
        alert('Hai fatto scoppiare una bomba!! Hai perso!!!');
        alert('Il tuo punteggio è:' + ' ' + user_array.length);   
    }else {
        element[0].classList.add("blue");
        user_array.push(cella);
    }  
    
}

document.getElementById('campo').addEventListener('click', cellClick)

creaCampo(level);
console.log(user_array);
console.log('Il tuo punteggio è:' + ' ' + user_array.length);

// FUNZIONI
// CREO NUMERO RANDOM PC
function rndNumber(min, max) {
    var rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return rndNumber;
}
// VERIFICO SE IL NUMERO SCELTO DALL'UTENTE NON SIA RIPETUTO
function isInArray(array, element) {
    var result = false;
    var i = 0;

    while (i < array.length && result == false) {
        if (element == array[i]) {
            result = true;
        }
        i++
    }
    return result;
}
// CREO IL CAMPO DA GIOCO
function creaCampo (celle) {
    for (let i = 1; i <= celle; i++) {
        let cella = `
            <div data-cella="${i}" class="cella"></div>
        `;

        let templateCella = document.createElement('div');
        templateCella.classList.add('quadrato');
        templateCella.innerHTML = cella;
        document.getElementById('campo').appendChild(templateCella);
    }
}