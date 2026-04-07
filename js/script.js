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


const input = document.querySelector('#answers-form');
const numeriRandom = [];
for (i = 0; i < 5; i++) {
    let numeroRandom = Math.floor(Math.random() * 50) + 1;
    numeriRandom.push(numeroRandom);
    console.log(numeriRandom);
}
const numeri = document.querySelector('#numbers-list');
let html = '';

for (let i = 0; i < numeriRandom.length; i++) {
    html += `<li class="badge text-bg-dark">${numeriRandom[i]}</li>`;
}
numeri.innerHTML = html;


let countDown = 30;
const countDownShow = document.querySelector('#countdown');
const timer = () => {
    countDown--;
    if (countDown >= 0) {
        console.log(countDown);
        countDownShow.innerHTML = `${countDown}`;
    } else {
        countDownShow.classList.add('d-none');
        numeri.classList.add('d-none');
        input.classList.remove('d-none');
        clearInterval(interval);
    }
}
const interval = setInterval(timer, 1000);

const numbersOfInput = document.querySelectorAll('.form-control')

const button = document.querySelector('#btn');

button.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('#instructions').classList.add('d-none');
    

    const userNumbers = [];
    numbersOfInput.forEach(input2 => {
        const val = Number(input2.value);
        userNumbers.push(val);
    });

    input.classList.add('d-none');
    
    let html2 = '';
    for (let i = 0; i < userNumbers.length; i++) {
        if (numeriRandom.includes(userNumbers[i])) {
            html2 += `<li class="badge text-bg-success">${userNumbers[i]}</li>`;
        } else {
            html2 += `<li class="badge text-bg-danger">${userNumbers[i]}</li>`;
        }
    } numeri.innerHTML = html2;
    numeri.classList.remove('d-none');
});

