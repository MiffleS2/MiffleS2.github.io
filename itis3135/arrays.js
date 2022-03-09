let salaries = [250000, 150000, 150000, 90000, 50000, 55000, 75000];
let person = ['Alex Heart', 'Mindy Apple', 'Eric Warren', 'Daniel Hazan', 'Joe Johnson', 'Chris Stevens', 'Josh Peck'];

function addSalary() {

}
function displayResults() {
  let maxSal = 0;
  let averageSal = 0;
  let summation = 0;

  for (var i = 0; i < salaries.length; i++) {
    summation += salaries[i];

    if (salaries[i] > maxSal) {
      maxSal = salaries[i];
    }
  }
  averageSal = summation / salaries.length;
  document.getElementById("results").innerHTML = `<h2>Highest Salary</h2> <p>${maxSal}</p> <h2>Average Salary<h2> <p>${averageSal}</p>`;
}
function displaySalary() {
  document.getElementById("result_table").innerHTML = `<tr><th>Name</th><th>Salary</th></tr>`;
  for (var i = 0; i < person.length; i++) {
    document.getElementById("result_table").innerHTML += `<tr><td>${person[i]}</td><td>${salaries[i]}</td></tr>`;
  }
}