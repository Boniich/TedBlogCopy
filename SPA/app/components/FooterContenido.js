export function FooterContenido(){

    //Vamos a generar un div con la clase conteiner para usar el display table
    //vamos a cambiar el h2 por a 
    const $doc = document,
    $conteiner = $doc.createElement("div"),
    $FooterContent = $doc.createElement("div"),
    $FooterContentForms = $doc.createElement("div"),
    $footerDetalles = $doc.createElement("div"),
    $a = $doc.createElement("a"),
    $h3 = $doc.createElement("h3"),
    $p = $doc.createElement("p"),
    $botonLogin = $doc.createElement("a");
    
    // Clases Css
    $conteiner.classList.add("conteiner");
    $FooterContent.classList.add("footerContent");
    $FooterContentForms.classList.add("footerContentForms");
    $footerDetalles.classList.add("footerContentDetalles");
    $botonLogin.classList.add("botonLogin");

    $a.classList.add("logoPequeño");
    $a.classList.add("footerLogo");

 

    $a.innerHTML = "TED";
    $h3.innerHTML = "Sign up for TED email updates";
    $p.innerHTML = "Sign up for our daily or weekly emails to receive notifications whenever new talks are published";
    $botonLogin.innerHTML = "Sing Up";
    $botonLogin.href="#";


    

 
    $conteiner.appendChild($FooterContent);
    $FooterContent.appendChild($a);
    $FooterContent.appendChild($FooterContentForms);
    $FooterContentForms.appendChild($h3);
    $FooterContentForms.appendChild($footerDetalles);
    $footerDetalles.appendChild($p);
    $footerDetalles.appendChild($botonLogin);

    return $conteiner;

}