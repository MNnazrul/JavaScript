let guess = Math.floor(Math.random() * 10) + 1;
console.log(guess);
let guessNumber = 0;

document.getElementById('btn').onclick = function() {
   let num = document.getElementById('input').value;
   num = Number(num);
   
   guessNumber += 1;
   //num == guess ? windows.alert(`You won`) : (num > guess ? `bigger than the guess` : `smaller than the guess`);

   if(num > guess) {
      alert('bigger guess');
   } else if(num < guess) {
      alert('smaller guess');
   } else {
      alert(`you won in ${guessNumber}th guess`);
   }
}