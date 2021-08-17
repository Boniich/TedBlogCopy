// Vamos a llmar a todos los componenetes o helpers para renderizar el html

import { ConteinerMenu } from "./components/ConteinerMenu.js";
import { ContentPrincipal } from "./components/ContentPrincipal.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";


export function App(){

    const $root = document.getElementById("root");

    $root.innerHTML = null;
    
    $root.appendChild(Header());
    $root.appendChild(ConteinerMenu());
    $root.appendChild(ContentPrincipal());
    
    $root.appendChild(Footer());
    

    Router();
    
}
