export function specialStyleMenu(id){

    const $id =  document.getElementById(id).style,
        propBorder ="1px dotted red";

    $id.color = "red";
    $id.fontWeight = "bold";
    $id.borderLeft =  propBorder;
    $id.borderRight = propBorder;
    $id.borderBottom = propBorder;



}