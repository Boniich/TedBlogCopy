
export async function Ajax(props){

    let {url, cbSuccess} = props;
    const $main = document.getElementById("mainPost");

    await fetch(url)
        .then(res => res.ok ? res.json():Promise.reject(res))
        .then(json => cbSuccess(json))
        .catch(err => {
            let message = err.statusText || "ocurrio un error";
            console.log(err);
            $main.innerHTML = `<div class="error">${err.statusText}:${message}<p></p></div>`
        });
    
}