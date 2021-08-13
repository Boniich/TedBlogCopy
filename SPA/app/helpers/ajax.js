
export async function Ajax(props){

    let {url, cbSuccess} = props;

    await fetch(url)
        .then(res => res.ok ? res.json():Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err => {
            let message = err.statusText || "ocurrio un error";
            console.log(err);
            document.getElementById("mainPost").innerHTML = `<div class="error">${err.statusText}:${message}<p></p></div>`
        });
    
}