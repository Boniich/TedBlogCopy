import { GetDate } from "../helpers/GetDate.js";

export function PostCard(props){

    // Date: Fecha de cada post
    // ID: id de cada post
    // slug: direcciones url de cada post al "entrar" en cada uno
    // Title: Titulo
    // Todo el contenido


    // Wp:term: es lo que nos deja acceder al enlace arriba del titulo 
    // export.rendered: es el contenido textual en forma de introduccion

    let {date,id,slug,title,excerpt, _embedded} = props;

    const newDate = GetDate(date);
    
    return `
    <article id="posts" class="articulo">
    <a class="categoria" href="#">${_embedded["wp:term"][0][0].name}</a>
    <div class="caja_titulo_img">
    <h3 class="titulo_posts"><a href="${slug}">${title.rendered}</a></h3>
    <img class="img_posts" src="${_embedded["wp:featuredmedia"][0].source_url}">
    </div>
    <p class="autor_fecha">By <a class="autor" href="#">${_embedded["author"][0].name}</a><time>${newDate}</time></p>
    <div class="texto_intro">${excerpt.rendered}</div>
    </article>
    `;
    
}