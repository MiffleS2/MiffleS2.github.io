function promptUser() {
  var shape;

  let input = parseInt(prompt("The Caramel Horse would like your number 1-5"));

  if (input > 5 || input < 1) {
    input = parseInt(prompt("Please enter within the bounds of 1-5"));
  }

  if(input == 1){
    shape = "Henagon";
  }
  if(input == 2){
    shape = "Digon";
  }
  if(input == 3){
    shape = "Trigon";
  }
  if(input == 4){
    shape = "Tetragon";
  }
  if(input == 5){
    shape = "Pentagon";
  }
  document.getElementById("result").innerHTML= `<h2>Shape Name</h2> <p>${shape}</p>`;
}
