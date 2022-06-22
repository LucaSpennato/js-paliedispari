// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function evenOrOdd(selectedEO, numbers){

    numbers = parseInt(numbers);
    
    let contidion;
    // controllo del pari o dispari, se numero pari è effettivamente pari, ed anche un numero e non una stringa, vai a avanti, lo stesso per dispari
    if(((selectedEO) === ('pari')) && (!(numbers % 2) && !(isNaN(numbers)) && (numbers < 5) ) ){      
        contidion = true;
    } else if ((selectedEO) === ('dispari') && ((numbers % 2)) && !(isNaN(numbers)) && (numbers <= 5) ){
        contidion = false;
    } else{
        return 'Hai sbagliato ad inserire qualocosa, inserisci pari ed un numero pari, se dispari un numero dispari!';
    }

    let computerRandNum = (Math.floor(Math.random() * 5) ); 
    let sum = numbers + computerRandNum;
    if(sum % 2){
        return 'Hai vinto, la somma è pari!';
    } else{
        return 'Hai perso, la somma è dispari!';
    }
}

let askIfevenOrOdd = prompt('Scegli pari o dispari!');
let askNumber = parseInt(prompt('Scegli un numero pari se hai scelto pari, altrimenti dispari'));
let result =  evenOrOdd(askIfevenOrOdd, askNumber);
console.log(result);

// let computerRandNum = (Math.floor(Math.random() * 5) ); 
// // NUMERO RANDOMICO DISPARI, NON MIO MERITO!
// if(!(computerRandNum %2 === 0)){
//     if(computerRandNum === 5){
//         computerRandNum = computerRandNum - 1 ;}
// }else{
//     computerRandNum = computerRandNum +1 ;
// }

// numeri random pari
// if((computerRandNum %2 === 0)){
//     if(computerRandNum === 5){
//         computerRandNum = computerRandNum - 1 ;}
// }else{
//     computerRandNum = computerRandNum +1 ;
// }