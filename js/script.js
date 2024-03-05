/* AQUISIZIONE DATI */
// Cosa mi serve: nome, cognome, colore preferito e numero
const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('Inserisci ora il tuo Cognome');
const userColor = prompt('Inserisci adesso il tuo colore preferito');
const userNumber = prompt('Inserisci ora un numero');
const userNumberAsNumber = parseInt(userNumber);

/* LOGICA */
const sum = userNumberAsNumber + 23;
const userPassword = `${userName}${userSurname}${userColor}${sum}`.toLowerCase();

/* OUTPUT ALL'UTENTE */
const userMessage = 'la tua password è: ' + userPassword;
document.getElementById('message').innerHTML = userMessage;