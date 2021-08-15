export function Menu(){

    const $menu = document.createElement("nav"),
    $ul = document.createElement("ul");
    $menu.classList.add("menu");
    $menu.id = "menu";
    $ul.innerHTML = `
    <li>Filter articles by: </li>
    <li><a id="new" href="#/">Newest</a></li>
    <li><a href="#/popular">Popular</a></li>
    <li><a href="#/live">Live From TEDMonterey</a></li>`

    $menu.appendChild($ul);

    return $menu;

}