export function Loader(){

    const $loader = document.createElement("img");

    $loader.src = "app/asset/loader.svg";
    $loader.alt = "Loading...";
    $loader.classList.add("loader");

    return $loader;


}