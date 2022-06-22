// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// salvo la parola in un array 
    // rompo la parola in più pezzi SENZA METODO SPLIT, 
    // let wordArray = [];
    // wordArray.push(wordToTest);
    // return ( `${wordArray}`);
    // ma come? le stringhe possono essere divise come un array? A quanto pare si!
    // let ciao = 'ciao'; console.log(ciao[0]); risultato = c!!!!!

const userWord = prompt('Inserisci una parola');

function palindromeTester(wordToTest){

    

    // salvo la parola in una stringa
    // in un for, riordino la parola al contrario, eseguo quindi il for con i--
    // cosa gli stiamo dicendo? Gli diciamo di partire dall'ultimo elemento dell''''''array''''' della stringa
    // successivamente, gli diciamo di decrescere index-- e di fermarsi a 0. NB: >0 O SI FERMERà AL NUMERO 1 E TE MANCA UN ELEMENTO
    let sum = '';
    for (let index = wordToTest.length-1; index >= 0; index--) {
        const element = wordToTest[index];
        // console.log(element);

        // unisco le parole in un'unica stringa
        sum += wordToTest[index];
        
    }

    console.log(sum);


    // faccio una comparazione tra la parola iniziale nel primo array ed il secondo
    if(wordToTest === sum){
        console.log('uguali');
    } else{
        console.log('diverse');
    }
    
    // se la parola è uguale, return di 'è palindroma', oppure return di 'true' da con altro if

}

let result = palindromeTester(userWord);
console.log(result);


