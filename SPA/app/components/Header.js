
// Contiene el titulo y la barra de buscar (800px o mas)

import { Linea } from "../helpers/linea.js";
import { SearchForm } from "./SearchForm.js";
import { Title } from "./title.js";

export function Header(){

    const $header = document.createElement("header");
    // $header.classList.add() 
    $header.appendChild(Title());
    $header.appendChild(SearchForm());
    $header.appendChild(Linea());

    return $header;

}