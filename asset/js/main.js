//variabili degli input nel form

var passeggero = document.getElementById('passeggero').value;
console.log(passeggero);
var distanza = document.getElementById('distanza').value;
console.log(distanza);
var age = document.getElementById('eta').value;
console.log(age);

//variabili dei pulsanti nel form
var button_on = document.getElementById('genera');
var button_reset = document.getElementById('annulla');

//eventi scaturiti dal bottone GENERA
button_on.addEventListener("click", function () {

  var nomepasseggero = document.getElementById('passeggero').value;

  var distanza = document.getElementById('distanza').value;

  var age = document.getElementById('eta').value;

  //console.log(nomepasseggero, distanza, age);

  var priceticket = (distanza * 0.21);

  var sconto1 = (priceticket / 100) * 20;
  var sconto2 = (priceticket / 100) * 40;

  var prezzominore = priceticket - sconto1;
  var prezzoover65 = priceticket - sconto2;
  var offerta = "prezzo standard";
  
  if (age == "minorenne") {
    prezzominore;
    offerta = "sconto minorenne";
    //console.log(prezzominore);

  } else if (age == "over65") {
    prezzoover65;
    offerta = "sconto over 65";
    //console.log(prezzoover65);
  }
  else {
    priceticket;
    //console.log(priceticket);
    offerta = "prezzo standard";
  }
});

//creiamo le var per i dati del biglietto

  var utente = document.getElementById('passenger');
  var sales = document.getElementById('sconto');
  var carrozza = document.getElementById('carrozza');
  var codcp = document.getElementById('cod-cp');
  var prezzofinale = document.getElementById('costobiglietto');

  //inseriamo i dati nei ns contenitori per il biglietto

  //utente.innerHTML = nomepasseggero;
  //sales.innerHTML = offerta;
  carrozza.innerHTML = Math.floor(Math.random() * 10) + 1;
  codcp.innerHTML = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
  //prezzofinale.innerHTML = prezzominore;




















button_reset.addEventListener("click", function () {

});
