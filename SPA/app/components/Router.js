
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

        document.getElementById("colorNewest").style.color = "red";
        document.getElementById("colorNewest").style.fontWeight = "bold";

        await Ajax({
            url: api.POSTS,
            cbSuccess: (posts) =>{
                let html = "";
                // determinamos que el primer post tiene que ir como encabezado
                let flag = true;
                    posts.forEach(post =>{

                        if(flag === true){
                            html = PostCardPrincipal(post);
                            document.getElementById("postCabezera").innerHTML = html;
                            //reteados el flag para que no se vuelva a ejecutar esta linea
                            flag = false;
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

        document.getElementById("colorPopular").style.color = "red";
        document.getElementById("colorPopular").style.fontWeight = "bold";
        await Ajax({
            url: api.POSTS,
            cbSuccess: (posts) =>{
                console.log(posts);
                let popularPosts = "";
                posts.forEach(post =>{popularPosts += PostCard(post)});
                $main.innerHTML = popularPosts;
            }
        })


    }else if(hash === "#/live"){

        $main.innerHTML = "Contenido TedMonterrey";

    }else if(hash.includes("#/search")){

        document.getElementById("menu").style.display = "none";
        let query = localStorage.getItem("wpSearch");

        await Ajax({

            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) =>{
                let postsSearched = "";
                if(search.length === 0){
                    
                    postsSearched = "No existen resultados";

                }else{search.forEach((post)  => (postsSearched += SearchCard(post)));}

                $main.innerHTML = postsSearched;
            }
        });

    }else{

        let idPost = localStorage.getItem("wpPostId");

        await Ajax({

            url: `${api.POST}/${idPost}`,
            cbSuccess: (post) =>{
                console.log(post);
                $main.innerHTML = Post(post);
            }
        });

    }


  
}