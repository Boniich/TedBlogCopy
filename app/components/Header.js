
// Contiene el titulo y la barra de buscar (800px o mas)

import { SearchForm } from "./SearchForm.js";
import { Title } from "./title.js";

export function Header(){

    const $header = document.createElement("header"),
          $headorConteiner = document.createElement("div"),
          $cajaTitulo = document.createElement("div"),
          $cajaBuscar = document.createElement("div");
    $header.classList.add("header"); 
    $headorConteiner.classList.add("contenedorHeader");
    $cajaTitulo.appendChild(Title());
    $cajaTitulo.classList.add("cajaTitulo");
    $cajaBuscar.appendChild(SearchForm());
    $cajaBuscar.classList.add("cajaBuscar");

    $headorConteiner.appendChild($cajaTitulo);
    $headorConteiner.appendChild($cajaBuscar);

    $header.appendChild($headorConteiner);

    return $header;

}