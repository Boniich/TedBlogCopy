export function FooterAdicional(){
    
    const $doc = document,
    $FooterAdicional = $doc.createElement("div"),
    $conteiner = $doc.createElement("div"),
    $footerContent = $doc.createElement("div"),
    $footerContentCopy = $doc.createElement("div"),
    $p = document.createElement("p");
    $p.innerHTML = "Powered by WordPress VIP";

    // Clases

    $FooterAdicional.classList.add("footerAdicional");
    $conteiner.classList.add("conteiner");
    $footerContent.classList.add("footerContent");
    $footerContentCopy.classList.add("footerContent_copy");
    

    // Agregamos los nodos como hijos

    $FooterAdicional.appendChild($conteiner);
    $conteiner.appendChild($footerContent);
    $footerContent.appendChild($footerContentCopy);
    $footerContentCopy.appendChild($p);

    return $FooterAdicional;
}