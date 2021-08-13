// Vamos a llmar a todos los componenetes o helpers para renderizar el html

import { ConteinerMenu } from "./components/ConteinerMenu.js";
import { ContentPrincipal } from "./components/ContentPrincipal.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { Router } from "./components/Router.js";




export function App(){

    const $root = document.getElementById("root");

    $root.innerHTML = null;
    
    $root.appendChild(Header());
    $root.appendChild(ConteinerMenu());
    $root.appendChild(ContentPrincipal());
    $root.appendChild(Footer());
    // $root.appendChild(Posts());

// me permite ver la informacion de la api (segun el endpoint que le ponga)
    // Ajax({
    //     url: api.POSTS,
    //     cbSuccess: (posts) =>{
    //         console.log(posts);
    //     }
    // });

    // Ajax({
    //     url: api.POSTS,
    //     cbSuccess: (posts) =>{
    //         console.log(posts);
    //         let html = "";
    //         posts.forEach(post => html += PostCard(post));
    //         document.getElementById("posts").innerHTML = html;
    
    //     }
    // });

    // Nos muestra todos los endpoints de la api
    // console.log(api);

    Router();
    
}
