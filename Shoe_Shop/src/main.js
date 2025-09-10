import './style.css'
import nike1 from "./img/n1-min.png";
import nike2 from "./img/n2-min.png";
import nike3 from "./img/n3-min.png";
import nike4 from "./img/n4-min.png";

let card=document.getElementById('cards');
const SHOE_LIST = [
  {
    id: 1,
    src: nike1,
    className: "bg-[#EEFFA4]",
    title: "Nike Air Max 270",
    description:
      "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.",
    price: 160,
  },
  {
    id: 2,
    src: nike2,
    className: "bg-[#DDCEFD]",
    title: "Nike Air Vapor",
    description:
      "The Nike Air Vapor is a sleek and stylish shoe that's perfect for any occasion. It's the perfect shoe for any active lifestyle.",
    price: 100,
  },
  {
    id: 3,
    src: nike3,
    className: "bg-[#DAFFA2]",
    title: "Nike Air Max 2090",
    description:
      "The Nike Air Max 2090 is shoe that's both stylish and comfortable. It's the perfect shoe for any fashion-forward individual.",
    price: 150,
  },
  {
    id: 4,
    src: nike4,
    className: "bg-[#FCC4EA]",
    title: "Nike Air Blazer",
    description:
      "The Nike Air Blazer is a classic shoe that's perfect for any casual occasion. It's the perfect shoe for any laid-back individual.",
    price: 110,
  },
];
function createcard(obj){
        return `<div class="${obj.className} relative max-w-xl cursor-pointer transition hover:scale-105">
                <div class="p-8">
                  <div class="text-2xl font-bold">${obj.title}</div>
                  <div class="underline underline-offset-4 font-semibold mt-10">
                    SHOP NOW+
                  </div>
                </div>
                <img
                  class="absolute left-[40%] h-40 w-56 top-5"
                  src="${obj.src}"
                  alt="shoe to buy"
                />
              </div>`;
        }

let frag=new DocumentFragment();
for(const c of SHOE_LIST)
{
let card11=document.createElement('div');
card11.innerHTML=createcard(c);
frag.append(card11);
}
card.append(frag);

let navbar=document.getElementById('navbar');
let humbergurg=document.getElementById('humb');
humbergurg.addEventListener('click',()=>{
navbar.classList.toggle('hidden');
console.log("hello world");
});
