export function SearchForm(){

    // Acceso al dom, creamos un elementos form e input

    const doc = document,
    $form = doc.createElement("form"),
    $input = doc.createElement("input");
    $form.classList.add("buscar");

    // $form.classList.add();

    $input.name = "search";
    $input.type = "search";
    $input.placeholder = "Buscar...";
    $input.autocomplete = "off";
    // Desactivamos hasta que empezemos a dar estilos y responsive
  

    $form.appendChild($input);


    // comprovamos que la direccion contenga el #

    if(location.hash.includes("#/search")){
        $input.value = localStorage.getItem("wpSearch");
    }

    doc.addEventListener("search", e=>{

        if(!e.target.matches("input[type='search']")) return false;
        if(!e.target.value) localStorage.removeItem("wpSearch");

    });


    doc.addEventListener("submit", (e)=>{
        // si no se usa el formulario retornamos falso
        if(!e.target.matches(".buscar")) return false;
        e.preventDefault();
        localStorage.setItem("wpSearch",e.target.search.value);
        location.hash = `#/search?search=${e.target.search.value}`;
    });

    return $form;


}