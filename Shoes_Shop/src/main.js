import './style.css'

let navbar=document.getElementById('navbar');
let humbergurg=document.getElementById('humb');
humbergurg.addEventListener('click',()=>{
navbar.classList.toggle('hidden');
console.log("hello world");
});
