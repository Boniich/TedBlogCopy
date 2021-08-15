
import api from "../helpers/wp_api.js";
import { Ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { SearchCard } from "./SearchCard.js";
import { PostCardPrincipal } from "./PostCardPrincipal.js";
import { Post } from "./Post.js";

export async function Router(){

    const doc = document,
    w = window,
    $main = doc.getElementById("mainPost");

    let {hash} = location;

   
    if(!hash || hash === "#/"){

        await Ajax({
            url: api.POSTS,
            cbSuccess: (posts) =>{
                console.log(posts);
                let html = "";
                // forma precaria de determinar que post tiene que ir como encabezado
                let contador = 1;
                    posts.forEach(post =>{
                        
                        if(contador === 1){
                            console.log(posts[0]);
                            html = PostCardPrincipal(post);
                            document.getElementById("postCabezera").innerHTML = html;
                            //reteados el contador para que no se vuelva a ejecutar esta linea
                            contador = 0;
                            // reseteamos el html para que el primer post no se repetira en las filas
                            html = "";
                        }else{
                            html += PostCard(post)
                            $main.innerHTML = html;

                        }


                    });
                    
            }
        });
        
    }else if(hash === "#/popular"){

        $main.innerHTML = "Contenido popular";

    }else if(hash === "#/live"){

        $main.innerHTML = "Contenido TedMonterrey";

    }else if(hash.includes("#/search")){

        document.getElementById("menu").style.display = "none";
        let query = localStorage.getItem("wpSearch");

        await Ajax({

            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) =>{
                console.log(search);
                let html = "";
                if(search.length === 0){
                    html = "No existen resultados";
                }else{
                    
                    search.forEach((post)  => (html += SearchCard(post)));
                }

                $main.innerHTML = html;
            }
        });

    }else{

        let id = localStorage.getItem("wpPostId");

        await Ajax({

            url: `${api.POST}/${id}`,
            cbSuccess: (post) =>{
                console.log(post);
                $main.innerHTML = Post(post);
            }
        });

    }


  
}