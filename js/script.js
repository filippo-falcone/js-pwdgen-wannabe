/* AQUISIZIONE DATI */
// Chiedi all'utente di inserire il suo nome
const userName = prompt('Inserisci il tuo nome');

// Chiedi di inserire il cognome
const userSurname = prompt('Inserisci ora il tuo Cognome');

// Chiedi di inserie il colore preferito
const userColor = prompt('Inserisci adesso il tuo colore preferito');

// Chiedi di inserire un numero (BONUS)
const userNumber = prompt('Inserisci ora un numero');
const userNumberConvert = parseInt(userNumber);

/* LOGICA */
const sum = userNumberConvert + 23;

/* OUTPUT ALL'UTENTE */
const userPassword = `la tua password è: ${userName}${userSurname}${userColor}${sum}`;
document.getElementById('password').innerHTML = userPassword;