const toggle = document.querySelector('#toggle input');

function clickHandler() {
  if (this.checked) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}
toggle.addEventListener('click', clickHandler);