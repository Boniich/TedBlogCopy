import { btnStories } from "./btnStories.js";
import { ConteinerSideBar } from "./ConteinerSideBar.js";
import { Posts } from "./Posts.js";
import { SocialBar } from "./SocialBar.js";

export function ContentPrincipal(){
    const $doc = document,
    $contentPrincipal = $doc.createElement("div"),
    $contenidoGeneral = $doc.createElement("div"),
    $postCabezera = $doc.createElement("div"),
    $main = $doc.createElement("main");
    $main.id = "mainPost";

    // contenido textual


    // id

    $postCabezera.id = "postCabezera";
    //Clases de css

    $contentPrincipal.classList.add("contentPrincipal");
    $contenidoGeneral.classList.add("contenidoGeneral");
    $postCabezera.classList.add("postCabezera");
    $main.classList.add("main");
    $main.classList.add("seccionCajas");


    //anidado de nodos

    $contentPrincipal.appendChild($contenidoGeneral);
    $contenidoGeneral.appendChild($postCabezera);
    $contenidoGeneral.appendChild($main);
    $contenidoGeneral.appendChild(ConteinerSideBar());
    


    return $contentPrincipal;

   
}