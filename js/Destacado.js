import { wbs } from "./Data_web.js";
let div_paginas = document.querySelector(".paginas")

wbs.forEach((cada_web)=>{
    let div_web = document.createElement("div")
    
 div_web.innerHTML= `

    <img src="${cada_web.img}" alt="" class="img">
    <h2 class="titulo">${cada_web.nombre}</h2>
    <p class="descripcion">${cada_web.descripcion}</p>
    <a href="${cada_web.github_page}" class="github">Proyecto</div>
    <a href="${cada_web.link_repo}" class="repo">Github</a>
`;
div_web.classList.add("cartas")
div_paginas.appendChild(div_web)


})