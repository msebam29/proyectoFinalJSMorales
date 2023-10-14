const libros = [];
const consumirJSON = async () => {
    try {
        const respuesta = await fetch("json/libros.json");
        const data = await respuesta.json();
        let libro = "";
        for (libro of data) {
            libros.push(libro)
        }  
    } catch (error) {
    document.getElementById("contenido").innerHTML = `<div class="alert alert-danger text-center role="alert""><p>Error! No se puede acceder a la Libreria!<br> ${error} </p></div>`
}finally{
    guardarLibrosLS(libros);
    renderLibros(); 
}
}

consumirJSON();

