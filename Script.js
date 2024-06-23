let num = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      num = eval(num);
      document.querySelector("input").value = num;
    } else if (e.target.innerHTML == "C") {
      num = "";
      document.querySelector("input").value = num;
    } else {
      num = num + e.target.innerHTML;
      document.querySelector("input").value = num;
    }
  });
});
