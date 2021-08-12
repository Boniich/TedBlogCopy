export function DivRecommend(){

    const $divRecommend = document.createElement("div"),
    $h2 = document.createElement("h2"),
    $p = document.createElement("p");

    //clases css

    $divRecommend.classList.add("recommendBar");
    $p.id = "btnLoginRecommend";
    $p.classList.add("botonLogin")

    $h2.innerHTML = "Get TED Talks recommended for you";
    $p.innerHTML = `<a href="#">Sign up</a>`;

    //anidamos nodos

    $divRecommend.appendChild($h2);
    $divRecommend.appendChild($p);

    return $divRecommend;
}