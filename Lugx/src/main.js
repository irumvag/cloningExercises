let btn=document.getElementById('navbtn');
let navbar=document.getElementById('navbar');
btn.addEventListener('click',()=>{
  navbar.classList.toggle('hidden');
  console.log('clicked');
});

let scl=document.getElementById('navsticky');
window.addEventListener('scroll',()=>{
  if(window.scrollY>50){
    scl.classList.add('bg-blue-600');
    console('allived');
  }
  else{
    scl.classList.remove('bg-blue-600');
  }
});


