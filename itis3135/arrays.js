const salaries = [250000, 150000, 150000, 90000, 50000, 55000, 75000];
const person = ['Alex Heart', 'Mindy Apple', 'Eric Warren', 'Daniel Hazan', 'Joe Johnson', 'Chris Stevens', 'Josh Peck'];

function addSalary(e) {
  e.preventDefault();
  let name = document.forms["information"]["name"].value;
  let sala = document.forms["information"]["salary"].value;

  if (name == "") {
    alert("Enter Name!")
  }
  if (sala == "") {
    alert("Enter Salary!")
  }

  salaries.push(sala);
  person.push(name);
}
function displayResults() {
  let maxSal = 0;
  for (var i = 0; i < salaries.length; i++) {
    if (salaries[i] > maxSal) {
      maxSal = salaries[i];
    }
  }
  document.getElementById("results").innerHTML = `<h2>Highest Salary</h2> <p>${maxSal}</p>`;
}
function displaySalary() {
  document.getElementById("result_table").innerHTML = `<tr><th>Name</th><th>Salary</th></tr>`;
  for (var i = 0; i < person.length; i++) {
    document.getElementById("result_table").innerHTML += `<tr><td>${person[i]}</td><td>${salaries[i]}</td></tr>`;
  }
}