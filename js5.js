/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2){
  if (num1 === num2){
    return (num1 + num2)*3;
  } else{
    return num1 + num2
  }
  
}
console.log(crazySum(10,10))



/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num1){
    if ((num1 >=20 && num1 <=100) || num1===400){
        return true;
    }else{
        return false
    }
}

console.log(boundary(19))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(par1){
    return par1.split("").reverse().join("");
}

console.log(reverseString("computer"))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(par1){
    return par1.charAt(0).toUpperCase() + par1.slice(1);
}

console.log(upperFirst("collina"))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n){

    const arrayRandom=[];

    for (let i=0; i<n; i++){
        const random = Math.floor(Math.random()*10) +1
        arrayRandom.push(random)
    }
    
    return arrayRandom
}

console.log(giveMeRandom(5))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){

    return l1*l2

}
let risultato = area(5,6)
console.log(risultato)


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(par1){
    let differenza= Math.abs(par1 - 19)
    if (differenza >19){
        return differenza *3;
    } else{
        return differenza
    }

}

let differenza = crazyDiff(39)
console.log(differenza)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify (par1){
    const code = "code"
    
    if(par1.startsWith(code)){
        return par1
    } else{
        return code + par1
    }
}
let finale = codify("aaa")
console.log(finale)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (par1){
    if (par1 %3 === 0){
        return true
    } else if(par1 %7 === 0){
        return true
    } else{
        return false
    }
}

console.log(check3and7(20))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(par1){
    return par1.slice(1, -1)
}

console.log(cutString("scrivania"))