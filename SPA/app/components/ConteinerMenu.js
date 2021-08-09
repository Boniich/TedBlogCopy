import { Menu } from "./menu.js";
import { Select } from "./Select.js";

export function ConteinerMenu(){

    const $conteiner_menu = document.createElement("div");
    $conteiner_menu.classList.add("conteiner_menu");
    $conteiner_menu.classList.add("conteiner");
    $conteiner_menu.appendChild(Select());
    $conteiner_menu.appendChild(Menu());

    return $conteiner_menu;
}