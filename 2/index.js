//Initialise count
let count = 10;
var id;
//Choose value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".clicked");
//Selecting action
btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const style = event.currentTarget.classList;
    if (style.contains("decrease")) {
      //decrement button
      count--;
      if (value.textContent <= 0) {
        count = 0;
        alert("Count reached 0!");
      }
    } else if (style.contains("increase")) {
      //increment button
      count++;
    } else if (style.contains("reset")) {
      //reset button
      count = 10;
    } else if (style.contains("counter")) {
      //Counter button
      var btn = document.getElementById("btn");
      if (btn.textContent == "Start") {
          btn.textContent = "Stop";
      } else {
        btn.textContent = "Start";
      }
      //Check whether the counter is going on
      if (!id) {
        id = setInterval(decrementCount, 1000);
      } else {
        clearInterval(id);
        id = null;
      }
    } else {
      count = 0;
      btn.disabled = false;
    }
    value.textContent = count;
  });
});

//Counter function
function decrementCount() {
  count--;
  value.textContent = count;
  //Check whether the count goes negative
  if (count == -1) {
    alert("Count reached 0!");
    count = 10;
    value.textContent = count;
    clearInterval(id);
    id = null;
    location.reload();
  }
}
