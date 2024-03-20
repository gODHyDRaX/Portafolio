import { lista_soporte_tecnico } from "./Data_tecnico.js"
let soporte = document.querySelector(".soporte")

lista_soporte_tecnico.forEach((cada_categoria)=>{
    let div_soporte =document.createElement("div")

    div_soporte.innerHTML = `

    <img src="${cada_categoria.img}" alt="" class="img2">
    <h2 class="titulo2">${cada_categoria.nombre}</h2>
    <span class="descripcion2">${cada_categoria.cantidad}</span>
    <div class="div_categoria">Categoria</div>
    `;
    
    div_soporte.classList.add("cartas2")
    soporte.appendChild(div_soporte)
})