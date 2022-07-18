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
//Imposto due timeout diversi per la compatibilità con chrome altrimenti il prompt comparirebbe prima che i numeri vengono nascosti
setTimeout( function() {
    text.classList.add('d-none');
}, 2000);

//Dopo 31 secondi
setTimeout( function() {
    
    //Il prompt si ripeterà per 5 volte
    let i = 0;
    while (i < 5) {
        addedNumbers = parseInt(prompt("Inserisci i numeri che ricordi!"));

        //Imposto un controllo per non fare inserire 2 volte lo stesso numero
        if (!userNumbers.includes(addedNumbers)) {
            //Stampo i numeri inseriti dall utente nell array userNumbers
            userNumbers.push(addedNumbers);
            i++;
        } else {
            alert("Numero già inserito!");
        }

    }

    console.log(userNumbers);

    //Creo un array per i numeri indovinati dall utente
    let check = [];

    // Scorro i numeri inseriti dall utente 
    for (i = 0; i < userNumbers.length; i++) {

        //Se sono inclusi nei numeri generati
        if (numbers.includes(userNumbers[i])) {

            //Inserisco i numeri nell array check
            check.push(userNumbers[i]);
        }
    }

    //Stampo i numeri di check nell html
    let score = document.getElementById('score');
    score.classList.remove('d-none');
    score.innerHTML = "Hai ricordato " + check.length + " numero/i! <br>" + check;
    
}, 2100);
