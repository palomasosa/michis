const imageContainer = document.getElementById("containerImagen");
const boton = document.getElementById("button");
const loader = document.getElementById("loader")

const traerUrlImagenes = async()=>{
    try{
        const imagenes = await fetch ("https://api.thecatapi.com/v1/images/search")
        const imagenesJSon = await imagenes.json();
        const urlImagenes = imagenesJSon[0].url;
        return(urlImagenes)
    }
    catch{
        console.log("Error en la busqueda")
    }

};

const ponerImagenHTML = (imagen)=>{
    const codigoHTML = `<img class="imagen" src="${imagen}">`;
    imageContainer.innerHTML = codigoHTML;
}


const iniciarLoader = ()=>{
    loader.classList.add("show")
    setTimeout(()=>{
    loader.classList.remove("show");
    }
    ,2000);
}


boton.addEventListener("click", async()=>{
    iniciarLoader();
    const urlImagen = await traerUrlImagenes();
    setTimeout(()=>{ponerImagenHTML(urlImagen)},2000)
    
})

function inicializar(){
    window.addEventListener("DOMContentLoaded", async () => {
        const urlImagen = await traerUrlImagenes();
        ponerImagenHTML(urlImagen)}
        )
    };
inicializar();
