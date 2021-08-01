export function Menu(){

    const $menu = document.createElement("nav");
    $menu.classList.add("Menu");
    $menu.innerHTML = `
    <a href="#/">Newest</a>
    <a href="#/">Popular</a>
    <a href="#/">Live From TEDMonterey</a>`

    $menu.style.display = "none"; 

    return $menu;

}