
let cnt = 0;

document.getElementById('reset').onclick = function() {
   cnt = 0;
   document.getElementById('count').innerHTML = 0;
}

document.getElementById('decrement').onclick = function() {
   cnt -= 1;
   document.getElementById('count').innerHTML = cnt;
}

document.getElementById('increment').onclick = function() {
   cnt += 1;
   document.getElementById('count').innerHTML = cnt;
}