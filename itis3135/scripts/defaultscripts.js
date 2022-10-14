function alertUser() {
  alert("Hey my script is running");
}

function getDate() {

  var now = new Date();

  var months = ["January", "February", "March", "April", "May", "June"
    , "July", "August", "September", "October", "November", "December"];

  var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
    "Saturday", "Sunday"];

  var ampm = ["am", "am", "am", "am", "am", "am", "am", "am", "am", "am", "am",
    "pm", "pm", "pm", "pm", "pm", "pm", "pm", "pm", "pm", "pm", "pm", "pm",
  ];



  document.write("Today is: " + now.getHours() + ":" + now.getMinutes()
    + " " + ampm[now.getHours()] + " on " + days[now.getDay()] + ", " + now.getDate()
    + " " + months[now.getMonth()] + ", " + now.getFullYear());
}

function formCheck() {
  var fname = document.forms["information"]["name"].value;
  var mood = document.forms["information"]["doing"].value;

  document.getElementById("content").innerHTML += `<h1>, ${fname}! We\'re glad you are doing ${mood}</h1>`;
}

function getEmail() {
  document.write("CaramelHorse@gmail.com");
}
function getPhone() {
  document.write("555-555-5555");
}
function tellJoke() {
  document.write("What's the best thing about Switzerland?.... I don't know, but the flag is a big plus.");
}
function companyOwn() {
  document.write("Christopher Hanson");
}
function companyAge() {
  document.write("2 months");
}



