import  { add } from './add.js';
import { subTitle } from './components/sub-title.js';
console.log('main');

const app = document.getElementById('app');
console.log(app);

let state = 0;


app.innerHTML = `<h2>app</h2>
  <p>JavaSCript</p>
  <p class="count">${state}</p>
`

const count = document.querySelector('.count')
console.log(count)

function addCount() {
  state = state + 1;
}

const addBtn = document.getElementById('add')
addBtn.addEventListener('click', () => {
  addCount();
  count.innerText = state;
} )


add();

const writeText = document.querySelector('.write-text')
console.log(writeText)

console.log(subTitle);
