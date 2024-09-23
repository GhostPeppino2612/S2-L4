/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = (l1, l2) => {
  return l1 * l2;
};
console.log(area(23, 232));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = (n1, n2) => {
  if (n1 === n2) {
    return (n1 + n2) * 3;
  } else {
    return n1 + n2;
  }
};

console.log(crazySum(23, 23));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = (n1) => {
  if (n1 > 19) {
    return Math.abs(n1 - 19) * 3;
  } else {
    return Math.abs(n1 - 19);
  }
};

console.log(crazyDiff(2));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = (n) => {
  if ((20 < n && n < 100) || n === 400) {
    return true;
  } else return "Il numero fornito non è ne compreso tra 20 e 100 e ne uguale a 400";
};
console.log(boundary(401));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = (str) => {
  if (str.startsWith("EPICODE")) {
    return str;
  } else return "EPICODE" + " " + str;
};

console.log(epify("ciao sono giuspepe"));
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and7 = (n) => {
  if (n % 3 === 0 || n % 7 === 0) return "il numero è un multiplo di 3 o 7";
  return "Il numero non è un multiplo di 3 o 7";
};

console.log(check3and7(8));
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const reverseString = (string) => {
  if (string.toUpperCase() === "EPICODE") return string.split("").reverse().join("");
  return "La stringa non è Epicode";
};

console.log(reverseString("Epcode"));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = (string) => {
  let array = string.split(" ");
  let newElement = "";
  array = array.map((element) => {
    newElement = element.charAt(0).toUpperCase() + element.slice(1, element.length);
    return newElement;
  });
  return array.join(" ");
};

console.log(upperFirst("ciao sono giuseppe"));
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = (string) => {
  return string.slice(1, string.length).slice(-string.length - 1, -1);
};

console.log(cutString("renkgi"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const giveMeRandom = (n) => {
  const array = [];
  for (let i = 0; i < n; i++) {
    array[i] = Math.floor(Math.random() * 11);
  }
  console.log(array);
};

console.log(giveMeRandom(6));
