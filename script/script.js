// liste element
let uListe = document.getElementById("uListe");
// il buttone
const button = document.getElementById("button");

// // Boolean API

// https://flynn.boolean.careers/exercises/api/random/mail => (ritorna una email)

//  / Versione per generare 10 indirizzi email e stamparli in pagina all'interno di una lista

for (let i = 0; i < 10; i++) {
  axios
    .get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then((res) => {
      console.log(res.data.response);
      uListe.innerHTML += `<li> ${res.data.response}</li> <hr>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
