document.title = 'DOM'
console.log(document.URL);

let ad = document.getElementById('myTitle');
ad.innerHTML = "Changed"
ad.style.color = "cyan";
ad.style.backgroundColor = "red";

// get element by name
let fruits = document.getElementsByName('fruits');
fruits.forEach(fruit => {
   if(fruit.checked) console.log(fruit.value);
})

// get element by tag.
let vegetables = document.getElementsByTagName('li');
vegetables[0].style.backgroundColor = 'cyan'

// get element by class name.
let dessert = document.getElementsByClassName('desserts');
console.log(dessert[0].innerHTML);
dessert[0].style.color = "blue";

let element = document.querySelector('[for]'); // first element in li
let elements = document.querySelectorAll('[for]');
elements.forEach(ele => {
   ele.style.color = 'red';
})
