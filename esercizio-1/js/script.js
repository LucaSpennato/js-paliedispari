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

    

    function palindromeTester(wordToTest){
    
        // salvo la parola in una stringa
        // in un for, riordino la parola al contrario, eseguo quindi il for con i--
        // cosa gli stiamo dicendo? Gli diciamo di partire dall'ultimo elemento dell''''''array''''' della stringa
        // successivamente, gli diciamo di decrescere index-- e di fermarsi a 0. NB: >0 O SI FERMERà AL NUMERO 1 E TE MANCA UN ELEMENTO
        let reversedWord = '';
        for (let index = wordToTest.length-1; index >= 0; index--) {
            // const element = wordToTest[index];
            // console.log(element);
            // unisco le parole in un'unica stringa
            reversedWord += wordToTest[index];
        }
    
        console.log(reversedWord);
    
        let resultTest = false;
        // faccio una comparazione tra la parola iniziale nel primo array ed il secondo
        if(wordToTest === reversedWord){
            resultTest = true;
        }
        // se la parola è uguale, return di 'è palindroma', oppure return di 'true' da con altro if
        if (resultTest === true){
            return `${wordToTest} è una parola palindroma!`;
        } else{
            return `${reversedWord} non è il contrario di ${wordToTest}, non è una parola palindroma!`
        }

    }

    
    const userWord = prompt('Inserisci una parola');

    const result = palindromeTester(userWord);
    
    const printInDom = document.getElementById('print');

    printInDom.innerHTML = `${result}`;
    
    // da provare: while, seconda lettera è uguale a penultima allora è palindroma