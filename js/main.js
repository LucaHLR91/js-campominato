// Consegna
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

//  GENERAZIONE NUMERI CASUALI TRA 1 E 100
var numbersRndArray = [];
var arrayLength = 16;
var i = 0;
do {
    var number = rndNumber(1, 100);
    if (isInArray(numbersRndArray, number) == false) {
        numbersRndArray.push(number);
        i++
    }
}while (numbersRndArray.length != arrayLength);

console.log(numbersRndArray);






// FUNZIONI

function rndNumber(min, max) {
    var rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return rndNumber;
}

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