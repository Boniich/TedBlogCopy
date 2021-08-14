export function Menu(){

    const $menu = document.createElement("nav"),
    $ul = document.createElement("ul");
    $menu.classList.add("menu");
    $menu.id = "menu";
    $ul.innerHTML = `
    <li>Filter articles by: </li>
    <li><a href="#/">Newest</a></li>
    <li><a href="#/Popular">Popular</a></li>
    <li><a href="#/">Live From TEDMonterey</a></li>`

    $menu.appendChild($ul);

    return $menu;

}