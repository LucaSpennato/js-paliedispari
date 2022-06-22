// Palidroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// const userWord = prompt('Inserisci una parola');

function palindromeTester(wordToTest){

    // salvo la parola in un array
    let wordArray = [];
    wordArray.push(wordToTest);
    return ( `${wordArray}`);

    // rompo la parola in più pezzi (trovato il metodo .split())
    // in un for, riordino la parola al contrario, eseguo quindi il for con i--
    // salvo le lettere in un secondo array
    // unisco le parole in un'unica stringa
    // faccio una comparazione tra la parola iniziale nel primo array ed il secondo
    // se la parola è uguale, return di 'è palindroma', oppure return di 'true' da con altro if

}

let result = palindromeTester('ciaoasdasdasd');
console.log(result);
