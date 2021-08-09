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

    return $form;


}