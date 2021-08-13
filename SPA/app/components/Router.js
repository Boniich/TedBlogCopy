
import api from "../helpers/wp_api.js";
import { Ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { btnStories } from "./btnStories.js";
import { SearchCard } from "./SearchCard.js";

export async function Router(){

    const doc = document,
    w = window,
    $main = doc.getElementById("mainPost");

    let {hash} = location;

   
    if(!hash || hash === "#/"){

        // Ajax({
        //     url: api.TAGS,
        //     cbSuccess: (tags) =>{
        //         console.log(tags);
        //     }
        // });

        // Ajax({
        //     url: api.CATEGORIES,
        //     cbSuccess: (categories) =>{
        //         console.log(categories);
        //     }
        // });  

        await Ajax({
            url: api.POSTS,
            cbSuccess: (posts) =>{
                console.log(posts);
                let html = "";
                posts.forEach(post => html += PostCard(post));
                document.getElementById("mainPost").innerHTML = html;


        
            }
        });
        
    }else if(hash.includes("#/search")){


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

                document.getElementById("mainPost").innerHTML = html;
            }
        });

    }


  
}