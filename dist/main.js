(()=>{"use strict";let e=()=>{let e=document.createElement("section"),t=document.createElement("container"),n=document.createElement("div"),a=document.createElement("h1");return e.classList.add("main"),t.classList.add("container"),n.classList.add("text"),a.innerHTML="Perfect food and delicious compot!",e.appendChild(t),t.appendChild(n),n.appendChild(a),e},t=()=>{let e=document.createElement("section"),t=document.createElement("div"),n=document.createElement("div");return e.classList.add("menu"),t.classList.add("container"),n.classList.add("cardsContainer"),e.appendChild(t),t.appendChild(n),[{title:"Unique Soup",price:"200₽",img:"./src/img/soup.jpg",description:"Delicious soup with pasta, meat and some green things"},{title:"Unbelivable Pasta",price:"140₽",img:"./src/img/pasta.jpg",description:"Our pasta with salad has unforgetable taste"},{title:"Amazing Compote",price:"70₽",img:"./src/img/compote.jpg",description:"Drink compote and be happy"},{title:"Sweet Sweets",price:"9999999999₽",img:"./src/img/sweet.jpg",description:"Sweet Sweets Sweet Sweets Sweet Sweets Sweet Sweets Sweet Sweets"}].forEach((e=>{let t=document.createElement("div"),a=document.createElement("h2"),d=document.createElement("h3"),i=document.createElement("img"),c=document.createElement("p");t.classList.add("card"),n.appendChild(t),t.appendChild(a),t.appendChild(d),t.appendChild(i),t.appendChild(c),console.log(e.img),a.innerText=e.title,d.innerText=e.price,i.src=e.img,c.innerText=e.description})),e},n=()=>{let e=document.createElement("section"),t=document.createElement("container"),n=document.createElement("div"),a=document.createElement("h1"),d=document.createElement("p"),i=document.createElement("iframe");return e.classList.add("contacts"),t.classList.add("container"),n.classList.add("text"),a.innerHTML="Contacts",d.innerHTML="Some address 1231, 1231, +1(241)23-51-232",i.src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d264750.2489097247!2d103.50279389705602!3d77.03526127099362!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1609953062130!5m2!1sru!2sru",i.setAttribute("width","100%"),i.setAttribute("height","500"),i.setAttribute("frameborder","0"),i.setAttribute("style","border:0;"),i.setAttribute("allowfullscreen",""),i.setAttribute("aria-hidden","false"),i.setAttribute("tabindex","0"),e.appendChild(t),t.appendChild(n),t.appendChild(i),n.appendChild(a),n.appendChild(d),e};const a=document.getElementById("content"),d=document.createElement("main");a.appendChild((()=>{let e=document.createElement("header"),t=document.createElement("div"),n=document.createElement("logo"),a=document.createElement("nav");return t.classList.add("container"),n.classList.add("logo"),e.appendChild(t),t.appendChild(n),t.appendChild(a),n.innerHTML="Village",[["Home","home"],["Menu","menu"],["Contacts","contacts"]].forEach((e=>{let t=document.createElement("a");t.innerHTML=e[0],t.setAttribute("page",e[1]),a.appendChild(t)})),e})()),a.appendChild(d),d.appendChild(e());const i=document.getElementsByTagName("a");for(let a of i)a.onclick=function(i){switch(i.preventDefault(),a.getAttribute("page")){case"home":d.innerHTML="",d.appendChild(e());break;case"menu":d.innerHTML="",d.appendChild(t());break;case"contacts":d.innerHTML="",d.appendChild(n())}}})();
