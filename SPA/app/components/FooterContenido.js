export function FooterContenido(){
    
    const $divFooter = document.createElement("div"),
    $h2 = document.createElement("h2"),
    $h3 = document.createElement("h3"),
    $h4 = document.createElement("h4"),
    $p = document.createElement("p"),
    $p2 = document.createElement("p"),
    $botonLogin = document.createElement("a");
    $divFooter.classList.add("footerContenido");
    $h4.classList.add("botonLogin");

    $h2.innerHTML = "<a href='#'>TED</a>";
    $h3.innerHTML = "Sign up for TED email updates";
    $p.innerHTML = "Sign up for our daily or weekly emails to receive notifications whenever new talks are published";
    $botonLogin.innerHTML = "Sing Up";
    $botonLogin.href="#";
 
    $h4.appendChild($botonLogin);
    $divFooter.appendChild($h2);
    $divFooter.appendChild($h3);
    $divFooter.appendChild($p);
    $divFooter.appendChild($h4);


    return $divFooter;

}