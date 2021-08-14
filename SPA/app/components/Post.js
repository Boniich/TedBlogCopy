import { GetDate } from "../helpers/GetDate.js";

export function Post(props){

    // Date: Fecha de cada post
    // ID: id de cada post
    // slug: direcciones url de cada post al "entrar" en cada uno
    // Title: Titulo
    // Todo el contenido


    // Wp:term: es lo que nos deja acceder al enlace arriba del titulo 
    // export.rendered: es el contenido textual en forma de introduccion

    let {date,title,content, _embedded} = props;
    // ${_embedded["wp:featuredmedia"][0].source_url}

    const newDate = GetDate(date);
    
    return `
    <article id="post" class="">
    <a class="categoria" href="#">Categoria</a>
    <div class="caja_titulo_img">
    <h3 class="titulo_posts">${title.rendered}</h3>
    </div>
    </article>
    `;
    
}