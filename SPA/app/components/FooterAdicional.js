export function FooterAdicional(){

    const $div = document.createElement("div"),
    $p = document.createElement("p");
    $p.classList.add("footerAdicional");
    $p.innerHTML = "Powered by WordPress VIP";

    $div.appendChild($p);

    return $div;
}