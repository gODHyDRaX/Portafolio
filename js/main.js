
let root = document.querySelector(".root")
let nav = document.createElement("nav")
    nav.classList.add("header");
let div = document.createElement("div");
    div.classList.add("perfil")
let div2 = document.createElement("div")
    div2.classList.add("grid")
    root.appendChild(nav)
    root.appendChild(div)
    root.appendChild(div2)

    let caja1 = document.createElement("div")
    let caja2 = document.createElement("div")

    caja1.classList.add("caja1")
    caja2.classList.add("caja2")

    div2.appendChild(caja1)
    div2.appendChild(caja2)

    nav.innerHTML = `HEADER`;

    div.innerHTML = `PERFIL`;

    caja1.innerHTML = `CAJA 1`;
    caja2.innerHTML = `CAJA 2`;