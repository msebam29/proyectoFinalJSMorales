const guardarLibrosLS = (libros) => {
    localStorage.setItem("libros", JSON.stringify(libros));
}

const cargarLibrosLS = () => {
    return JSON.parse(localStorage.getItem("libros") || [])
}

const renderLibros = () => {
    const libros = cargarLibrosLS();
    let contenidoHTML = "";
    libros.forEach(libro => {
        contenidoHTML += `<div class="col-md-3 text-center my-4"
        <div class="card">
        <a href="producto.html" onclick="guardarLibroLS(${libro.id})"><img src="${libro.imagen}" class="card-img-top width" alt="${libro.nombre}"></a>
        <div class="card-body ">
          <h5 class="card-title">${libro.nombre}</h5>
          <p class="card-text">$${libro.precio}</p>
          <a href="#" class="btn btn-success" onclick="agregarLibroCarrito(${libro.id})">Agregar al Carrito</a>
        </div>
        </div>
        </div>`;
    });
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

const guardarCarritoLS = (carrito) => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
const cargarCarritoLS = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const cantLibrosCarrito = () => {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.cantidad, 0);
}


const renderCarrito = () => {
    const libros = cargarCarritoLS();
    let contenidoHTML = "";

    if (cantLibrosCarrito() > 0) {
        contenidoHTML += `<table class="table">
        <tr>
        <td colspan="7" class="text-end"><button class="btn btn-success" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito</button></td>
        </tr>`;

        libros.forEach(libro => {
            contenidoHTML += `<tr>
            <td><img src="${libro.imagen}" alt="${libro.nombre}" width="64"></td>
            <td class="align-middle">${libro.nombre}</td>
            <td class="align-middle">${libro.autor}</td>
            <td class="align-middle">$${libro.precio}</td>
            <td class="align-middle"><button class="btn btn-success rounded-circle" onclick="decrementarCantidadLibro(${libro.id})">-</button> ${libro.cantidad} <button class="btn btn-success rounded-circle" onclick="incrementarCantidadLibro(${libro.id})">+</button></td>
            <td class="align-middle">$${libro.precio * libro.cantidad}</td>
            <td class="align-middle text-end"><img src="./images/icons8-trash.svg" alt="Eliminar" width="24" onclick="eliminarLibroCarrito(${libro.id})"></td>
            </tr>`;
        });
        contenidoHTML += `<tr>
        <td>&nbsp;</td>
        <td><b>Total</b></td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
        <td><b>$${sumaLibrosCarrito()}</b></td>
        <td>&nbsp;</td>
        </tr>
        </table>`;
    } else {
        contenidoHTML = `<div class="alert alert-success my-5 text-center" role="alert">No existen Libros en el Carrito!</div>`;
    }
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

const vaciarCarrito = () => {
    Swal.fire({
        background: '#d1e7dd',
        title: '¿Desea eliminar el carrito?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#198754',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, eliminar',
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("carrito");
            renderCarrito();
            renderBotonCarrito();
            Swal.fire({
                icon: 'success',
                iconColor: '#198754',
                title: 'Su carrito fue eliminado',
                background: '#d1e7dd',
                confirmButtonColor: '#198754'
            })
        }
    })

}

const agregarLibroCarrito = (id) => {
    const carrito = cargarCarritoLS();

    if (estaEnElCarrito(id)) {
        const libro = carrito.find(item => item.id === id);
        libro.cantidad += 1;
    } else {
        const libro = buscarLibro(id);
        libro.cantidad = 1;
        carrito.push(libro);
    }

    guardarCarritoLS(carrito);
    renderBotonCarrito();
}
const estaEnElCarrito = (id) => {
    const libros = cargarCarritoLS();

    return libros.some(item => item.id === id);
}
const eliminarLibroCarrito = (id) => {
    Swal.fire({
        icon: 'success',
        iconColor: '#198754',
        title: 'Su libro fue eliminado del carrito',
        background: '#d1e7dd',
        confirmButtonColor: '#198754'
    })
    const carrito = cargarCarritoLS();
    const nuevoCarrito = carrito.filter(item => item.id !== id);
    guardarCarritoLS(nuevoCarrito);
    renderCarrito();
    renderBotonCarrito();
}
const incrementarCantidadLibro = (id) => {
    const carrito = cargarCarritoLS();
    const libro = carrito.find(item => item.id === id);
    libro.cantidad += 1;
    guardarCarritoLS(carrito);
    renderCarrito();
    renderBotonCarrito();
}
const decrementarCantidadLibro = (id) => {
    const carrito = cargarCarritoLS();
    const libro = carrito.find(item => item.id === id);

    if (libro.cantidad > 1) {
        libro.cantidad -= 1;
        guardarCarritoLS(carrito);
        renderCarrito();
        renderBotonCarrito();
    } else {
        eliminarLibroCarrito(id);
    }
}
const buscarLibro = (id) => {
    const libros = cargarLibrosLS();
    let libro = libros.find(item => item.id === id);

    return libro;
}

const sumaLibrosCarrito = () => {
    const carrito = cargarCarritoLS();

    return carrito.reduce((acumulador, item) => acumulador += item.precio * item.cantidad, 0);
}
const renderBotonCarrito = () => {
    let totalCarrito = document.getElementById("totalCarrito");
    totalCarrito.innerHTML = cantLibrosCarrito();
}
const guardarLibroLS = (id) => {
    localStorage.setItem("libro", JSON.stringify(id));
}
const cargarLibroLS = () => {
    return JSON.parse(localStorage.getItem("libro")) || [];
}
const renderLibro = () => {
    const idLibro = cargarLibroLS();
    const libro = buscarLibro(idLibro);

    document.getElementById("imagenLibro").src = libro.imagen;
    document.getElementById("nombreLibro").innerHTML = libro.nombre;
    document.getElementById("autorLibro").innerHTML = libro.autor;
    document.getElementById("descripcionLibro").innerHTML = libro.descripcion;
    document.getElementById("precioLibro").innerHTML = "$" + libro.precio;
    document.getElementById("botonAgregar").innerHTML = `<a href="#" class="btn btn-success" onclick="agregarLibroCarrito(${libro.id})">Agregar al Carrito</a>`;
}

const renderAventura = () => {
    const libros = cargarLibrosLS();
    const librosAventura = libros.filter((libros) => (libros.categoria == "Aventura y Ciencia Ficción"))
    console.log(librosAventura);
    let contenidoHTML = "";

    librosAventura.forEach(libro => {
        contenidoHTML += `<div class="col-md-3 text-center my-4"
        <div class="card">
        <a href="producto.html" onclick="guardarLibroLS(${libro.id})"><img src="${libro.imagen}" class="card-img-top width" alt="${libro.nombre}"></a>
        <div class="card-body ">
          <h5 class="card-title">${libro.nombre}</h5>
          <p class="card-text">$${libro.precio}</p>
          <a href="#" class="btn btn-success" onclick="agregarLibroCarrito(${libro.id})">Agregar al Carrito</a>
        </div>
        </div>
        </div>`;
    });
    document.getElementById("contenido").innerHTML = contenidoHTML;
}
const renderBiografias = () => {
    const libros = cargarLibrosLS();
    const librosBiografias = libros.filter((libros) => (libros.categoria == "Biografias"))
    console.log(librosBiografias);
    let contenidoHTML = "";

    librosBiografias.forEach(libro => {
        contenidoHTML += `<div class="col-md-3 text-center my-4"
        <div class="card">
        <a href="producto.html" onclick="guardarLibroLS(${libro.id})"><img src="${libro.imagen}" class="card-img-top width" alt="${libro.nombre}"></a>
        <div class="card-body ">
          <h5 class="card-title">${libro.nombre}</h5>
          <p class="card-text">$${libro.precio}</p>
          <a href="#" class="btn btn-success" onclick="agregarLibroCarrito(${libro.id})">Agregar al Carrito</a>
        </div>
        </div>
        </div>`;
    });
    document.getElementById("contenido").innerHTML = contenidoHTML;
}
const renderJuveniles = () => {
    const libros = cargarLibrosLS();
    const librosJuveniles = libros.filter((libros) => (libros.categoria == "Juveniles"))

    let contenidoHTML = "";

    librosJuveniles.forEach(libro => {
        contenidoHTML += `<div class="col-md-3 text-center my-4"
        <div class="card">
        <a href="producto.html" onclick="guardarLibroLS(${libro.id})"><img src="${libro.imagen}" class="card-img-top width" alt="${libro.nombre}"></a>
        <div class="card-body ">
          <h5 class="card-title">${libro.nombre}</h5>
          <p class="card-text">$${libro.precio}</p>
          <a href="#" class="btn btn-success" onclick="agregarLibroCarrito(${libro.id})">Agregar al Carrito</a>
        </div>
        </div>
        </div>`;
    });
    document.getElementById("contenido").innerHTML = contenidoHTML;
}