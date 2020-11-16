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

  var passeggero = document.getElementById('passeggero').value;

  var distanza = document.getElementById('distanza').value;

  var age = document.getElementById('eta').value;

  console.log(passeggero, distanza, age);

  var priceticket = (distanza * 0.21);

  var sconto1 = (priceticket / 100) * 20;
  var sconto2 = (priceticket / 100) * 40;

  var prezzominore = priceticket - sconto1;
  var prezzoover65 = priceticket - sconto2;

  if (age == "minorenne") {
    prezzominore;
    console.log(prezzominore);

  } else if (age == "over65") {
    prezzoover65;
    console.log(prezzoover65);
  }
  else {
    priceticket;
    console.log(priceticket);
  }
});
















button_reset.addEventListener("click", function () {

});
