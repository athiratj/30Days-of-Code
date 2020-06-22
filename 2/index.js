let count = 10;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".clicked");

btns.forEach(function(btn)  {
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
    } else if (style.contains("counter")) {
      if(count>0){
        var id = setInterval(() => {
        count--; 
          value.textContent = count;
          if (count == 0) {
            
            alert("Reached 0!");
            clearInterval(id);
          }
      }, 1000);
      }
    }
    else {
      count = 0;
      }
      value.textContent = count;
      
  });
});



