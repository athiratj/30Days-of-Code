let count = 10;
var id;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".clicked");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    const style = event.currentTarget.classList;
    if (style.contains("decrease")) {
      count--;
      if (value.textContent <= 0) {
        count = 0;
        alert("Count reached 0!");
      }
    } else if (style.contains("increase")) {
      count++;
    } else if (style.contains("reset")) {
      count = 10;
    } else if (style.contains("counter")) {
      var btn = document.getElementById("btn");
      if (btn.textContent == "Start") {
        if (count <= 0) {
          btn.textContent = "Start";
          count = 0;
          alert("Count reached 0!");
        } else {
          btn.textContent = "Stop";
        }
      } else {
        btn.textContent = "Start";
      }

      if (!id) {
        id = setInterval(decrementCount, 1000);
      } else {
        clearInterval(id);
        id = null;
      }
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});

function decrementCount() {
  count--;
  value.textContent = count;
  if (count <= 0) {
    
    alert("Counter reached 0!");
    btn.textContent = "Start";
    clearInterval(id);
    id = null;
  }
  
}

