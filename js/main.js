// Richiamo l'elemento in cui devo andare a stampare
let text = document.getElementById('text');

//Creo un array vuoto che dovrà andare a contenere i numeri generati
const numbers = [];
let numbersList;

//Imposto un ciclo che stamperà 5 numeri
for (i = 0; i < 5; i++) {
    numbersList = Math.floor(Math.random() * 100 + 1);

    //Imposto un controllo per evitare due numeri uguali
    while(numbers.includes(numbersList)){
        numbersList = Math.floor(Math.random() * 100 + 1);             
    }

    //Inserisco i numeri nell array
    numbers.push(numbersList);
}

console.log(numbers);

//Stampo i numeri nell html
text.innerHTML = numbers;

const userNumbers = [];
let addedNumbers;

//Imposto un timeout che dopo 30 secondi fa scomparire i numeri
setTimeout( function() {
    text.classList.add('d-none');

    //Il prompt si ripeterà per 5 volte
    for (i = 0; i < 5; i++) {
        addedNumbers = parseInt(prompt("Inserisci i numeri che ricordi!"));

        //Stampo i numeri inseriti dall utente nell array userNumbers
        userNumbers.push(addedNumbers);
    }

    console.log(userNumbers);

    let check = [];

    // Scorro i numeri inseriti dall utente 
    for (i = 0; i < userNumbers.length; i++) {

        //Se sono inclusi nei numeri generati
        if (numbers.includes(userNumbers[i])) {
            check.push(userNumbers[i]);
        }
    }

    console.log("Complimenti! Hai ricordato il numero " + check);
    
    
}, 5000);






