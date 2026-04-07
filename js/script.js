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
    let numeroRandom = Math.floor(Math.random()*10) + 1;
    numeriRandom.push(numeroRandom);
    console.log(numeriRandom);
}
const numberi = document.querySelector('#numbers-list');
numberi.innerHTML = `<li class="badge text-bg-dark">${numeriRandom[0]}</li>
    <li class="badge text-bg-dark">${numeriRandom[1]}</li>
    <li class="badge text-bg-dark">${numeriRandom[2]}</li>
    <li class="badge text-bg-dark">${numeriRandom[3]}</li>
    <li class="badge text-bg-dark">${numeriRandom[4]}</li>`;

let countDown = 31;
const countDownShow = document.querySelector('#countdown');
const timer = ()=>{
    countDown --;
    if(countDown>=0){
        console.log(countDown);
        countDownShow.innerHTML = `${countDown}`;
    }else {
        countDownShow.classList.add('d-none');
        numberi.classList.add('d-none');
        input.classList.remove('d-none');
        clearInterval(interval);

        }
    }
const interval = setInterval(timer , 1000);

