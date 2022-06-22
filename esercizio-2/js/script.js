// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function evenOrOdd(selectedEO, numbers){

    if(((selectedEO) === ('pari')) && !(numbers % 2))/*&& ((numbers) === ((numbers % 2) && (isNan(numbers))))*/{
        return 1;
    } else if ((selectedEO) === ('dispari') && (numbers % 2)){
        return 2;
    } else{
        return 3;
    }
    
    

}

let result =  evenOrOdd('dispari', '3');
console.log(result);

