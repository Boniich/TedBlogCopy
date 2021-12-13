import { FooterAdicional } from "./FooterAdicional.js";
import { FooterContenido } from "./FooterContenido.js";
import { FooterServices } from "./FooterServices.js";

export function Footer(){

    const $footer = document.createElement("footer");
    $footer.classList.add("footer");

    $footer.appendChild(FooterContenido());
    $footer.appendChild(FooterAdicional());
    $footer.appendChild(FooterServices());


    return $footer;
}