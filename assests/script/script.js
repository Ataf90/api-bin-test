
console.log("Bien Chargé mon script !");
// ----------------déclarer mon variables---------------------//
const SECRET_KEY = "$2a$10$9Q9BgWTlVTxMMctt8ReIQO4ODlo8OgxJgWA3/fxqQMoRyXsUJsN9O";
const BIN_ID = "6551fa880574da7622c60088"
const API_URL = "https://api.jsonbin.io/v3";

const donnees  = {
    "adresses ": [
      {
        "name": "Goerges",
        "rue": "1O rue ventôse parcc les vieux cyprès ",
        "code-postal": "13013",
        "ville": "MARSEILLE"
      },
      {
        "name": "Benoit",
        "rue": "22 yramen  Axele",
        "code-postal": "13002",
        "ville": "MARSEILLE"
      },
      {
        "name": "Joseph",
        "rue": "Ranian",
        "code-postal": "12000",
        "ville": "Hannover",
        "pays": "ALLEMAGNE"
      },
      {
        "name": "ORIANT",
        "rue": "54 boulevard lavéran",
        "code-postal": "13013",
        "ville": "MARSEILLE",
        "pays": "FRANCE"
      }
    ]
  }
  //------- lire mon bin  sur datafetch------------//
let dataFetchBis;
// await lireDataFetch(); /// appeller mon fontion await 
// console.log("Voici les données via fetch: ", dataFetchBis);

async function lireDataFetch () {
    const res = await fetch(`${API_URL}/b/${BIN_ID}`, {
        method: 'GET',
        headers: {
            "X-Master-Key":SECRET_KEY,
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        }
    });
    dataFetchBis = await res.json();
}
//------- creér mon bin sur data fetch ----------//
// await posttDataFetchBis(); /// appeller mon fonction await
async function posttDataFetchBis () {
    const res = await fetch(`${API_URL}/b`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            "X-Master-Key": SECRET_KEY,  
        },
         body: JSON.stringify(donnees)
    });
}
//-----------mis-à-jour-------------------//

async function misaAjourDataFetch(){
    const res = await fetch(`${API_URL}/b/${BIN_ID}`,{
        method:"PUT",
        headers:{
            'Content-type':'application/json',
            "X-Master-Key": SECRET_KEY, 
        },
        body: JSON.parse(donnees)  
    })
}
//---------------supprimer----------------//
// await supprimerDataFetch();
async function supprimerDataFetch(){
    const res = await fetch(`${API_URL}/b/${BIN_ID}`,{
        method:"DELETE",
        headers:{
            'Content-type':'application/json',
            "X-Master-Key": SECRET_KEY,
        },
        body:JSON.stringify(donnees)
    })
}
//-----DATA fetch pour ajouter data par submit-----//
let maDonnee;
async function envoyerMadonnee(){
    const res = await fetch(`${API_URL}/b/`,{
        method:"POST",
        headers:{
            'Content-type': 'application/json',
            "X-Master-Key": SECRET_KEY
        },
        body: JSON.stringify(maDonnee)
    })
}

let form = document.querySelector("form");
form.addEventListener('submit',function(event){
    event.preventDefault();// fonctionner de n'est pas laisser les chânes vides
    let  ecouteForm = new FormData(form);
     maDonnee = Object.fromEntries(ecouteForm);
     console.log(maDonnee);
     envoyerMadonnee();
})


document.querySelector("#supprimer").addEventListener("click",function (event){
    // window.location.reload(); /// déconsier
    document.querySelectorAll("input").forEach(item =>{
        item.value = "";
    });
})

let urlRecherche;// url+change
let result;
let adressChoix= "";

    let urlApi = `https://api-adresse.data.gouv.fr/search/?q=` ;
    async function apiadress;
    const apiAdress = async () => {
        const res = await fetch(urlRecherche);
        result = await res.json();
        console.log("result : ", result);
    }


