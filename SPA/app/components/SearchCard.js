export function SearchCard(props){
    //titulo
    //tag
    //imagen
    //texto introductorio
    // autor
    // fecha
    let {title, _embedded} = props;
    let img = _embedded.self[0].jetpack_featured_media_url;
    let slug = _embedded.self[0].slug;
    let text = _embedded.self[0].excerpt.rendered;
    let author = _embedded.self[0].author;
    let date = _embedded.self[0].date;  
    

    // pasar a un metodo/componente para tener un solo codigo
    let formatDate = new Date(date);
    const meses = [

        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octube",
        "Noviembre",
        "Diciembre"

    ];

    const month = meses[formatDate.getMonth()];

    let [day, year] = [formatDate.getDate(), formatDate.getFullYear()];
       
    

    return `
    <article id="posts" class="articulo">
    <div class="caja_titulo_img">
    <h3 class="titulo_posts"><a href="${slug}">${title}</a></h3>
    <img class="img_posts" src="${img}">
    </div>
    <p class="autor_fecha">By <a class="autor" href="#">${author}</a><time>${month} ${day},${year}</time></p>
    <div class="texto_intro">${text}</div>
    </article>
    `;
}