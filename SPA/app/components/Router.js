
import api from "../helpers/wp_api.js";
import { Ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { btnStories } from "./btnStories.js";

export async function Router(){

    const doc = document,
    w = window,
    $main = doc.getElementById("main");

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
        
    }


  
}