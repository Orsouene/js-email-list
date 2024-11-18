// liste element
let uListe = document.getElementById("uListe");
// il buttone
const button = document.getElementById("button");

// // Boolean API

// https://flynn.boolean.careers/exercises/api/random/mail => (ritorna una email)

//////////////////////////////-B.O.N.U.S-//////////

button.addEventListener("click", genera);

//  un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)

function genera() {
  let template = "";
  for (let i = 0; i < 10; i++) {
    // La richiesta fatta con Axios per ottenere i dati dall'URL
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((res) => {
        console.log(res.data.response);
        template += ` <li style="padding-top: 10px;"> <span style="color:#1a4870">Em@il : </span> ${res.data.response}</li> <hr style="margin:3px;">`;
        uListe.innerHTML = template;
      })
      // Se c'è un errore nel codice
      .catch((error) => {
        console.log(error);
      })
      //   Messaggio finale che verrà stampato indipendentemente dal risultato
      .finally(() => {
        console.log("Mail Generato");
      });
  }
}
// Al caricamento della paggina vengono generate 10 mail
genera();

//////////////////////////////-ESERCIZIO-//////////
//  / Versione per generare 10 indirizzi email e stamparli in pagina all'interno di una lista

// for (let i = 0; i < 10; i++) {
//   axios
//     .get("https://flynn.boolean.careers/exercises/api/random/mail")
//     .then((res) => {
//       console.log(res.data.response);
//       uListe.innerHTML += `<li> ${res.data.response}</li> <hr>`;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
