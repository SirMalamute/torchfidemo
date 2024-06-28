// alert("page scraping w/ content scripts");
// alert(document.documentElement.innerHTML);
// alert("navigation");
// location.replace("https://google.com");

document.addEventListener("click", navigation);
document.addEventListener("contextmenu", opener);

function navigation() {
  //   alert("navigation");
  location.replace(
    "https://sandbox.dev.clover.com/inventory/m/1DCSVP7HC7C61/items"
  );
}

function opener() {
  const collection = document.getElementsByClassName(
    "hIyRhqY1--styles_nameFieldText__VyGxG"
  );
  let inp = prompt("Enter food name:");
  let index = 0;
  for (let i = 0; i < collection.length; i++) {
    if (inp == collection[i].innerHTML) {
      index = i;
    }
  }

  document.getElementsByClassName("mdc-switch__native-control")[index].click();
}
