export function FooterServices(){

    const $footerServices = document.createElement("div"),
    $conteinerServies = document.createElement("div"),
    $ul = document.createElement("ul"),
    $p = document.createElement("p");
    $footerServices.classList.add("footerServices");
    $conteinerServies.classList.add("conteinerServices");
    $conteinerServies.classList.add("conteiner");
    $ul.classList.add("servicios_lista");

    $ul.innerHTML = `
    <li><a href="#">TED Talks Usage Policy</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Advertising/Partnership</a></li>
    <li><a href="#">TED.com Terms of Use</a></li>
    <li><a href="#">Contact</a></li>
    <li><a href="#">Jobs</a></li>
    <li><a href="#">Help</a></li>
    `

    $p.innerHTML = "© TED Conferences, LLC";


    $conteinerServies.appendChild($ul);
    // $conteinerServies.appendChild($p);

    $footerServices.appendChild($conteinerServies);

    return $footerServices;
}