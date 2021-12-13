// Vamos a importart el archivo App.js para poder gestionar los eventos

import { App } from "./App.js";

document.addEventListener("DOMContentLoaded",App);
// Ponemos a la escucha un evento para que detecte el cambio del #
window.addEventListener("hashchange",App);