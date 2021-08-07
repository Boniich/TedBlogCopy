import { Posts } from "./Posts.js";
import { SocialBar } from "./SocialBar.js";

export function Main(){

    const $Main = document.createElement("main");
    const $boton = document.createElement("a");
    const $divContenedor = document.createElement("div");
    $Main.classList.add("main");
    $boton.classList.add("botonStories");
    $divContenedor.classList.add("contenedorMain");
    $boton.innerHTML = "Show more stories";
    // Agregamos un id
    $Main.id = "main";

    

    $Main.appendChild(Posts());
    // $Main.appendChild($boton);
    $Main.appendChild(SocialBar());

    $divContenedor.appendChild($Main);

    return $divContenedor;

}