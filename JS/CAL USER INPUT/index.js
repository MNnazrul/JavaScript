
let a, b;

document.getElementById('myButton').onclick = function() {
   a = document.getElementById('A').value;
   b = document.getElementById('B').value;
   a = Number(a);
   b = Number(b);
   c = Math.sqrt(a*a + b*b);
   console.log(c);
   document.getElementById('C').innerHTML = "C : " + c;
}