export function SocialBar(){

    const $div = document.createElement("div"),
    $h3 = document.createElement("h3"),
    $ul = document.createElement("ul");
    $div.classList.add("social_bar");
    $h3.classList.add("titulo_social_bar");
    $ul.classList.add("lista_social_bar");
    
    $h3.innerHTML = "Follow TED";
    

    $ul.innerHTML = `
    <li><a class="" href=""><span class="iconos_social"><i class="fab fa-twitter"></i></span></a></li>
    <li><a class="" href=""><span class="iconos_social"><i class="fab fa-instagram"></i></span></a></li>
    <li><a class="" href=""><span class="iconos_social"><i class="fab fa-youtube"></i></span></a></li>
    <li><a class="" href=""><span class="iconos_social"><i class="far fa-envelope"></i></span></a></li>
    `

    $div.appendChild($h3);
    $div.appendChild($ul);

    return $div;
}