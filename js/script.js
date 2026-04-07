// 1) Generare 5 numeri casuali e salvarli in un array

// 2) Mostrare i 5 numeri in pagina (es. con delle badge)

// 3) Avviare un timer di 30 secondi (setTimeout o setInterval per il countdown)

// 4) Allo scadere dei 30 secondi, nascondere i numeri dalla pagina

// 5) Mostrare 5 input in cui l’utente può inserire i numeri visti + un bottone per confermare

// 6) Al click del bottone, leggere i valori degli input e salvarli in un array

// 7) (BONUS) Validare gli input: niente duplicati, solo numeri, niente campi vuoti

// 8) Confrontare l’array dei numeri casuali con l’array inserito dall’utente
//    → trovare quali e quanti numeri sono in comune

// 9) Mostrare il risultato in pagina:
//    - quanti numeri sono stati indovinati
//    - quali numeri sono stati indovinati



const numeriRandom = [];
for(i=0 ; i<5;i++){
    numeroRandom = Math.floor(Math.random()*10)+1;
    numeriRandom.push(numeriRandom);
}
const show = document.querySelector('#numbers-List');
show.innerHTML = ``

