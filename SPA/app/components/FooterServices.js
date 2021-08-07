export function FooterServices(){

    const $div = document.createElement("div"),
    $ul = document.createElement("ul"),
    $p = document.createElement("p");
    $div.classList.add("footerServices");

    $ul.innerHTML = `
    <li><a href="">TED Talks Usage Policy</a></li>
    <li><a href="">Privacy Policy</a></li>
    <li><a href="">Advertising/Partnership</a></li>
    <li><a href="">TED.com Terms of Use</a></li>
    <li><a href="">Contact</a></li>
    <li><a href="">Jobs</a></li>
    <li><a href="">Help</a></li>
    `

    $p.innerHTML = "TED Conferences, LLC";


    $div.appendChild($ul);
    $div.appendChild($p);

    return $div;
}