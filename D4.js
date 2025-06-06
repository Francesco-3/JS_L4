/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const area = function(l1, l2) {
    return l1 * l2;
}; console.log("L'area del rettangolo è:", area(5, 10)); // Output: 50

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = function(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}; console.log("La somma è:", crazySum(2, 5)); // Output: 30

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(num) {
    const diff = Math.abs(num - 19);
    if (num > 19) {
        return diff * 3;
    } else {
        return diff;
    }
}; console.log("La differenza assoluta è:", crazyDiff(25)); // Output: 18

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function(n){
    return (n >= 20 && n <= 100) || n === 400;
}; console.log(boundary(101));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function(str) {
    if (str.startsWith("EPICODE")) {
        return str;
    } else {
        return "EPICODE " + str;
    }
}; console.log(epify("EPICODE is great!")); // Output: "EPICODE is great!"
console.log(epify("is great!")); // Output: "EPICODE is great!"

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function(num) {
    if (num > 0 && (num % 3 === 0 || num % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}; console.log(check3and7(21)); // Output: true

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(str) {
    return str.split('').reverse().join('');
}; console.log(reverseString("EPICODE")); // Output: "EDOCIPE"

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}; console.log(upperFirst("hello world")); // Output: "Hello World"

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function(str) {
    if (str.length <= 2) {
        return "";
    }
    return str.slice(1, -1);
}; console.log(cutString("EPICODE")); // Output: "PICOD"

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
}; console.log(giveMeRandom(4)); // Output: Un array di n numeri casuali tra 0 e 10