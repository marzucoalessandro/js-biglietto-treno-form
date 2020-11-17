

//variabili dei pulsanti nel nostro form
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


  if (age == "minorenne") {
    priceticket = priceticket - sconto1;
    offerta = "sconto minorenne";
    var carrozza = Math.floor(Math.random() * 10) + 1;
    var codcp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    console.log( nomepasseggero, distanza, priceticket, offerta, carrozza, codcp);

  } else if (age == "over65") {
    priceticket = priceticket - sconto2;
    offerta = "sconto over 65";
    var carrozza = Math.floor(Math.random() * 10) + 1;
    var codcp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    console.log(nomepasseggero, distanza, priceticket, offerta, carrozza, codcp);
  } else {
    priceticket;
    offerta = "prezzo standard";
    var carrozza = Math.floor(Math.random() * 10) + 1;
    var codcp = Math.floor(Math.random() * (100000 - 90000) ) + 90000;
    console.log(nomepasseggero, distanza, priceticket,  offerta, carrozza, codcp);
  }


});

//verificato che le condizioni siano giuste e che appaiano nella console;

//a questo punto dobbiamo inserirle nel nostro biglietto.
