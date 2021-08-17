export function Menu(){

    const $menu = document.createElement("nav"),
    $ul = document.createElement("ul");
    $menu.classList.add("menu");
    $menu.id = "menu";
    $ul.innerHTML = `
    <li id="filterArticles">Filter articles by: </li>
    <li><a id="colorNewest" href="#/">Newest</a></li>
    <li><a id="colorPopular" href="#/popular">Popular</a></li>
    <li><a id="colorTED" href="#/live">Live From TEDMonterey</a></li>`

    $menu.appendChild($ul);

    return $menu;

}