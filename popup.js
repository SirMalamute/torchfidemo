var bgp = chrome.extension.getBackgroundPage();
var arr = []; // the array

document.addEventListener("DOMContentLoaded", function () {
  var btadd = document.getElementById("tbinput");
  btadd.addEventListener("click", alert());
});

function addItems() {
  console.log("<html>" + document.innerHTML + "</html>");
}
