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





// Seleziono il form dove l’utente inserirà i numeri
const input = document.querySelector('#answers-form');

// Array che conterrà i numeri casuali generati
const numeriRandom = [];

// Genero 5 numeri casuali
for (i = 0; i < 5; i++) {
    // Numero casuale tra 1 e 50
    let numeroRandom = Math.floor(Math.random() * 50) + 1;

    // Aggiungo il numero all’array
    numeriRandom.push(numeroRandom);

    // Mostro l’array in console (debug)
    console.log(numeriRandom);
}

// Seleziono la lista HTML dove mostrerò i numeri
const numeri = document.querySelector('#numbers-list');

// Stringa che conterrà il markup HTML dei numeri
let html = '';

// Creo un <li> per ogni numero casuale
for (let i = 0; i < numeriRandom.length; i++) {
    html += `<li class="badge text-bg-dark">${numeriRandom[i]}</li>`;
}

// Inserisco i numeri nella pagina
numeri.innerHTML = html;


// ----------------------
//     COUNTDOWN
// ----------------------

// Imposto il countdown iniziale
let countDown = 30;

// Seleziono l’elemento che mostra il timer
const countDownShow = document.querySelector('#countdown');

// Funzione che viene eseguita ogni secondo
const timer = () => {
    countDown--; // Decremento il timer

    if (countDown >= 0) {
        // Aggiorno il numero mostrato
        console.log(countDown);
        countDownShow.innerHTML = `${countDown}`;
    } else {
        // Quando il tempo finisce, nascondo timer e numeri
        countDownShow.classList.add('d-none');
        numeri.classList.add('d-none');

        // Mostro il form per inserire i numeri
        input.classList.remove('d-none');

        // Stoppo il timer
        clearInterval(interval);
    }
};

// Avvio il timer ogni 1000ms (1 secondo)
const interval = setInterval(timer, 1000);


// ----------------------
//   LETTURA INPUT UTENTE
// ----------------------

// Seleziono tutti gli input dove l’utente scrive i numeri
const numbersOfInput = document.querySelectorAll('.form-control');

// Seleziono il bottone di invio
const button = document.querySelector('#btn');

// Aggiungo l’evento click al bottone
button.addEventListener("click", (e) => {
    e.preventDefault(); // Evito il refresh della pagina

    // Nascondo le istruzioni
    document.querySelector('#instructions').classList.add('d-none');

    // Array che conterrà i numeri inseriti dall’utente
    const userNumbers = [];

    // Leggo i valori degli input e li trasformo in numeri
    numbersOfInput.forEach(input2 => {
        const val = Number(input2.value);
        userNumbers.push(val);
    });

    // Nascondo il form dopo l’invio
    input.classList.add('d-none');

    // Variabile per contare i numeri indovinati
    let rightNumbers = 0;

    // HTML per mostrare i risultati
    let html2 = '';

    // Confronto numeri utente con numeri casuali
    for (let i = 0; i < userNumbers.length; i++) {
        if (numeriRandom.includes(userNumbers[i])) {
            // Numero corretto → verde
            html2 += `<li class="badge text-bg-success">${userNumbers[i]}</li>`;
            rightNumbers++;
        } else {
            // Numero sbagliato → rosso
            html2 += `<li class="badge text-bg-danger">${userNumbers[i]}</li>`;
        }
    }

    // Mostro i risultati
    numeri.innerHTML = html2;
    numeri.classList.remove('d-none');

    // Messaggio finale
    const text = document.querySelector('#message');

    if (rightNumbers === 5) {
        // Tutti corretti
        text.classList.remove('text-danger');
        text.classList.add('text-success');
        text.innerHTML = `Hai inserito correttamente tutti i numeri`;
    } else {
        // Parzialmente corretti
        text.innerHTML = `Hai inserito correttamente <span class="text-success"> ${rightNumbers} </span> numeri su <span class="text-dark">5</span>.`;
    }
});
