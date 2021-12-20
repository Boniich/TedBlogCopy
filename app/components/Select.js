export function Select(){

    const $Select = document.createElement("select"),
    $option1 = document.createElement("option"),
    $option2 = document.createElement("option"),
    $option3 = document.createElement("option");

    $Select.classList.add("menu_desplegable");

     $option1.innerHTML = "Newest";
     $option2.innerHTML = `Popular`;
     $option3.innerHTML = "Live From TEDMonterey"; 

    

    $Select.appendChild($option1);
    $Select.appendChild($option2);
    $Select.appendChild($option3);

    

    return $Select;
}