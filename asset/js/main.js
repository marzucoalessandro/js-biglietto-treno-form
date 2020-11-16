var passeggero = document.getElementById('passeggero').value;
console.log(passeggero);
var distanza = document.getElementById('distanza').value;
console.log(distanza);
var age = document.getElementById('eta').value;
console.log(age);


var button_on = document.getElementById('genera');
var button_reset = document.getElementById('annulla');

button_on.addEventListener("click", function () {

  var passeggero = document.getElementById('passeggero').value;

  var distanza = document.getElementById('distanza').value;

  var age = document.getElementById('eta').value;

  console.log(passeggero, distanza, age);

  var priceticket = (distanza * 0.21);

  console.log(priceticket);
});

button_reset.addEventListener("click", function () {

});
