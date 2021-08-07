import api from "../helpers/wp_api.js";

export function Title(){

    const $h1 = document.createElement("h1");
    $h1.classList.add("titulo")
    $h1.innerHTML = `<strong class="titulo_strong">TED</strong>Blog`

    return $h1;
}