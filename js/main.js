import { header } from "./header_componentes.js";
import { wbs } from "./Data_web.js";
let root = document.querySelector(".root")

let componentes = `
<div class="header">${header}</div>
<div class="perfil">${perfil}</div>
<div class="grid">
    <div class="paginas"></div>
    <div class="soporte"></div>
</div>
`;

    root.innerHTML = componentes;

import { perfil } from "./perfil_componentes.js";