
export function Title(){

    const $h1 = document.createElement("h1");
    $h1.classList.add("titulo")
    $h1.innerHTML = `<a href="index.html"><strong class="titulo_strong">TED</strong>Blog</a>`

    return $h1;
}