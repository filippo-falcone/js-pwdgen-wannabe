/* AQUISIZIONE DATI */
// Chiedi all'utente di inserire il suo nome
const userName = prompt('Inserisci il tuo nome');

// Chiedi di inserire il cognome
const userSurname = prompt('Inserisci ora il tuo Cognome');

// Chiedi di inserie il colore preferito
const userColor = prompt('Inserisci adesso il tuo colore preferito');

/* OUTPUT ALL'UTENTE */
const userPassword = `la tua password è: ${userName}${userSurname}${userColor}23`;
document.getElementById('password').innerHTML = userPassword;
console.log(userPassword);
