document.addEventListener("DOMContentLoaded", function(event) {
  var url = "http://api.icndb.com/jokes/random";

  var button = document.getElementById("get-joke");
  button.addEventListener("click", function() {
    getJoke();
  });

  var paragraph = document.getElementById("joke");

  function getJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.addEventListener("load", function() {
      var response = JSON.parse(xhr.response);
      paragraph.innerHTML = response.value.joke;
      if (response.value.joke === "" || response.value === undefined)
        throw new Error(alert("Joke / value not exist!"));
    });
    xhr.send();
  }
  getJoke();
});
