// .addEventListner(event, funciton, useCapture)
// You can add many event handlers to one element.
// Even the same event that invokes different funtions.

const innnerDiv = document.getElementById("innerDiv");
const outerDiv = document.getElementById("outerDiv")

innnerDiv.addEventListener("click", changRed);
outerDiv.addEventListener("click", changRed, true);


function changRed () {
   alert(`You selected ${this.id}`);
   this.style.backgroundColor = "lightgreen";
}
