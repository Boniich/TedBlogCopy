import { DivRecommend } from "./DivRecommend.js";
import { SocialBar } from "./SocialBar.js";

export function ConteinerSideBar(){

    const $conteinerSideBar = document.createElement("div");

    $conteinerSideBar.classList.add("sideBar");

    $conteinerSideBar.appendChild(DivRecommend());
    $conteinerSideBar.appendChild(SocialBar());

    return $conteinerSideBar;


}