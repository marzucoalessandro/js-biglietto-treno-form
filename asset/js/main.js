var passeggero = document.getElementById('passeggero').value;
console.log(passeggero);
var distanza = document.getElementById('distanza').value;
console.log(distanza);
var age = document.getElementById('età').value;


var button_on = document.getElementById('genera');
var button_reset = document.getElementById('annulla');

button_on.addEventListener("click", function () {

  var passeggero = document.getElementById('passeggero').value;

  var distanza = document.getElementById('distanza').value;

  var age = document.getElementById('età');

  console.log(passeggero, distanza, age);

});

button_reset.addEventListener("click", function () {

});
