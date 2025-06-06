// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}
const checkArray = function(arr = giveMeRandom(10)) {
    let sum = 0;
    arr.forEach(num => {
        if (num > 5) {
            console.log(`${num} è maggiore di 5`);
            sum += num;
        } else {
            console.log(`${num} non è maggiore di 5`);
        }
    });
    return sum;
}
console.log(checkArray()); // Output: Somma dei valori maggiori di 5

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const shoppingCart = [
    { price: 10, name: "Item1", id: 1, quantity: 2 },
    { price: 20, name: "Item2", id: 2, quantity: 1 },
    { price: 5, name: "Item3", id: 3, quantity: 4 }
];
const shoppingCartTotal = function(cart) {
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    return total;
}
console.log("Totale del carrello:", shoppingCartTotal(shoppingCart)); // Output: Totale del carrello: 60

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function(newItem) {
    shoppingCart.push(newItem);
    return shoppingCart.length;
}
console.log("Nuovo numero totale degli elementi nel carrello:", addToShoppingCart({ price: 15, name: "Item4", id: 4, quantity: 1 })); // Output: Nuovo numero totale degli elementi nel carrello: 4

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function(cart) {
    return cart.reduce((max, item) => (item.price > max.price ? item : max), cart[0]);
}
console.log("Oggetto più costoso nel carrello:", maxShoppingCart(shoppingCart)); // Output: Oggetto più costoso nel carrello: { price: 20, name: "Item2", id: 2, quantity: 1 }

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function(cart) {
    return cart[cart.length - 1];
}; console.log("Ultimo elemento nel carrello:", latestShoppingCart(shoppingCart)); // Output: Ultimo elemento nel carrello: { price: 15, name: "Item4", id: 4, quantity: 1 }

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function(x) {
    if (x < 0 || x > 9) {
        console.error("Il numero deve essere tra 0 e 9.");
        return;
    }
    let count = 0;
    while (count < 3) {
        const randomNum = Math.floor(Math.random() * 10);
        console.log("Numero casuale:", randomNum);
        if (randomNum > x) {
            count++;
        } else {
            count = 0;
        }
    }
}; loopUntil(4); // Esempio di utilizzo

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const average = function(arr) {
    const validNumbers = arr.filter(item => typeof item === 'number');
    if (validNumbers.length === 0) return 0;
    const sum = validNumbers.reduce((acc, num) => acc + num, 0);
    return sum / validNumbers.length;
}; console.log(average([1, 2, 'a', 3, 4])); // Output: 2.5

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function(arr) {
    if (arr.length === 0) return "";
    return arr.reduce((longestStr, currentStr) => {
        return currentStr.length > longestStr.length ? currentStr : longestStr;
    }, "");
}; console.log(longest(["apple", "banana", "cherry", "date"])); // Output: "banana"

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const filterSpam = function(emailContent) {
    const spamWords = ["SPAM", "SCAM"];
    return !spamWords.some(word => emailContent.includes(word));
}; console.log(filterSpam("This is a legitimate email.")); // Output: true

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const daysSince = function(date) {
    const today = new Date();
    const pastDate = new Date(date);
    const diffTime = Math.abs(today - pastDate);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}; console.log(daysSince("2023-01-01")); // Output: Numero di giorni passati da quella data

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const matrixGenerator = function(x, y) {
    const matrix = [];
    for (let i = 0; i < x; i++) {
        const row = [];
        for (let j = 0; j < y; j++) {
            row.push(`${i}${j}`);
        }
        matrix.push(row);
    }
    return matrix;
}; console.log(matrixGenerator(3, 2)); // Output: [["00", "01"], ["10", "11"], ["20", "21"]]