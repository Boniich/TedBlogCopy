export function Select(){

    const $Select = document.createElement("select"),
    $option1 = document.createElement("option"),
    $option2 = document.createElement("option"),
    $option3 = document.createElement("option");

     $option1.innerHTML = `Hola`; //sirve pero solo toma uno
     $option2.innerHTML = "chau";
     $option3.innerHTML = "PEPE";

    

    $Select.appendChild($option1);
    $Select.appendChild($option2);
    $Select.appendChild($option3);

    return $Select;
}