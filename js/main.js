// Consegna
// Il computer deve generare 16 numeri casuali (le nostre bombe) tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.

alert('Benvenuto nel Campo Minato: il gioco sta per cominciare. Buona Fortuna!')

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

// CHIEDERE ALL'UTENTE 100-16 NUMERI DA 1 A 100 E VERIFICO LA PRESENZA NELL'ARRAY BOMBA

var level = 100;
var user_array = [];
var user_array_lenght = level - 16;

do {
    var user_numbers = parseInt(prompt('inserisci un numero da 1 a 100'));
     if (isInArray(user_array, user_numbers) == true) {
         alert('attenzione: hai inserito lo stesso numero due volte! prendi un pezzo di carta ;)')
    } else if (isInArray(numbersRndArray, user_numbers) == true) {
        alert('Hai fatto scoppiare una bomba!! Hai perso!!!');
        alert('il tuo punteggio è:' + ' ' + user_array.length);
        console.log('il tuo punteggio è:' + ' ' + user_array.length)   
    }else {
        user_array.push(user_numbers);
    }
} while (user_array.length != user_array_lenght && isInArray(numbersRndArray, user_numbers) == false)

console.log(user_array);


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