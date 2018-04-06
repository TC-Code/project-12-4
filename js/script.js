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
      if (!response || !response.value) try {
        throw new Error("Joke / value not exist!");
      } catch (e) {
        $("#joke").text(e.name + ': ' + e.message);
        return
      }
      paragraph.innerHTML = response.value.joke;
    });
    xhr.send();
  }
  getJoke();
});
