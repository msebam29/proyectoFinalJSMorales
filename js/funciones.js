let libros = [
    {id:1, nombre:"Nosotros en la luna", autor:"Alice Kellen", precio:13900, descripcion:"Una noche en París. Dos caminos entrelazándose. No hay nada más eterno que un encuentro fugaz. Cuando Rhys y Ginger se conocen en las calles de la ciudad de la luz, no imaginan que sus vidas se unirán para siempre, a pesar de la distancia y de que no puedan ser más diferentes. Ella vive en Londres y a veces se siente tan perdida que se ha olvidado hasta de sus propios sueños. Él es incapaz de quedarse quieto en ningún lugar y cree saber quién es. Y cada noche su amistad crece entre emails llenos de confidencias, dudas e inquietudes. Pero ¿qué ocurre cuando el paso del tiempo pone a prueba su relación? ¿Es posible colgarse de la luna junto a otra persona sin poner en riesgo el corazón? Una historia sobre el amor, el destino y la búsqueda de uno mismo. Porque a veces, solo hace falta mirar la luna para sentirte cerca de otra persona.", imagen: "https://acdn.mitiendanube.com/stores/001/930/519/products/9789504974611-38646bdb95d44edad816971462148852-320-0.webp", categoria:"Juveniles"},
    {id:2, nombre:"Romper el Círculo", autor:"Colleen Hoover", precio:13000, descripcion:"A veces, quien más te quiere es quién más daño te hace. Lily no siempre lo ha tenido fácil. Por eso, su idílica relación con un magnífico neurocirujano llamado Ryle Kincaid, parece demasiado buena para ser verdad. Cuando Atlas, su primer amor, reaparece repentinamente y Ryle comienza a mostrar su verdadera cara, todo lo que Lily ha construido con él se ve amenazado. «Nadie escribe sobre sentimientos como Colleen Hoover.» Anna Todd", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9789504976677-a9bb8c2197fea1b3a616961285773171-320-0.webp", categoria:"Juveniles"},
    {id:3, nombre:"La sonrisa de Mandela", autor:"John Carlin", precio:11899, descripcion:"Entre el 11 de febrero de 1990 y el 10 de mayo de 1994, Nelson Mandela pasó de ser el prisionero político más famoso del mundo a presidente de su país. Fueron cuatro años vertiginosos y fascinantes que modelaron la dimensión humana y política de un líder excepcional. John Carlin, observador privilegiado de esa etapa, traza un emocionante retrato de Mandela en el que demuestra que se puede ser un gran po-lítico sin dejar de ser una gran persona, y que la reconciliación y la convivencia son no solo deseables sino posibles incluso en las circunstancias más difíciles.", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9789871786831-163ddce8214bd3718816935927795416-320-0.webp", categoria:"Biografias"},
    {id:4, nombre:"De La Pampa a los Estado Unidos", autor:"René G. Favaloro", precio:4499, descripcion:"La vida de los hombres oculta razones, decisiones y matices que sólo los protagonistas de esas vidas conocen a fondo. El testimonio del doctor Favaloro permite a los lectores adentrarse en una vida apasionante, tanto por las convicciones que la alientan como por los abundantes episodios anecdóticos que ayudan a entenderla. La carrera profesional del médico argentino que viajó a Estados Unidos para perfeccionarse y logró convertirse en un cirujano eminente está aquí junto a las profundas reflexiones de un hombre cuyos múltiples intereses provocan curiosidad, admiración y respeto. Nada de lo humano fue ajeno para quien eligió el oficio de mejorar la vida. El empeño vocacional a través del paso de los años, la especialización y sus vínculos con la vida cotidiana, las obligaciones y el exilio, la libertad y el arraigo son temas que este libro aborda con deslumbrante lucidez.", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9789875662902-678d465f9795e3e6b316953419653724-320-0.jpg", categoria:"Biografías"},
    {id:5, nombre:"En la sombra", autor:"Principe Harry", precio:13799, descripcion:"Fue una de las imágenes más desgarradoras del siglo XX: dos niños, dos príncipes, caminando detrás del féretro de su madre mientras el mundo contemplaba la escena con pesar... y horror. A la vez que se daba sepultura a Diana, princesa de Gales, miles de millones de personas se preguntaron qué debían de pensar y sentir esos príncipes y qué rumbo tomarían sus vidas en adelante. En el caso de Harry, esta es, por fin, esa historia. Con su franqueza directa y sin concesiones, En la sombra es una publicación que marcará un hito, llena de lucidez, revelaciones, introspección y sabiduría, adquirida a un alto coste, sobre el eterno poder del amor.", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9789506446611-a02147f193dbc2e3ce16959132137186-320-0.jpg", categoria:"Biografias"},
    {id:6, nombre:"Antes de diciembre", autor:"Joana Marcús", precio:12699, descripcion:"Una historia de amor y pasión con una cuenta atrás. Todo acabará Antes de diciembre. Una de las historias de amor más adictivas de Wattpad.", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9789874924971-195483ac3ca180162116963740320861-320-0.webp", categoria:"Juveniles"},
    {id:7, nombre:"El fin de la muerte", autor:"Liu Cixin", precio:17899, descripcion:"Tras El problema de los tres cuerpos y El bosque oscuro, la tensa espera de la humanidad concluye ahora con un último episodio, tan extraordinario como los anteriores, lleno de ideas electrizantes y una calidad de obra maestra. Ha pasado medio siglo de la batalla del Día del Juicio Final y la Tierra goza de una prosperidad sin precedentes gracias al conocimiento transferido por Trisolaris. Mientras la ciencia humana avance y los trisolarianos adopten la cultura terrícola, ambas civilizaciones podrán convivir sin temor a ser destruidas. Pero con la paz la humanidad se ha vuelto autocomplaciente. Después de una larga hibernación, Cheng Xin, una ingeniera aeroespacial de comienzos del siglo XX, despierta en esta nueva era. Su mera presencia, sumada a cierta información sobre un proyecto olvidado desde el principio de la Crisis Trisolariana, podría alterar el frágil equilibrio entre ambos mundos... ¿Alcanzará el ser humano las estrellas, o morirá en su cuna?", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9788417347017-108c67b4e23433e97d16946208236082-320-0.webp", categoria:"Aventura y Ciencia Ficción"},
    {id:8, nombre:"El Hobbit", autor:"JRR Tolkien", precio:9000, descripcion:"El Hobbit es uno de los principales clásicos modernos y el preludio de El Señor de los Anillos. Bilbo Bolsón es como cualquier hobbit: no mide más de metro y medio, vive pacíficamente en la Comarca, y su máxima aspiración es disfrutar de los placeres sencillos de la vida: comer bien, pasear y charlar con los amigos. Pero su tranquilidad se ve interrumpida cuando el mago Gandalf y un grupo de trece enanos se presentan un día en su casa para involucrarlo en una aventura. Con la ayuda de un mapa misterioso, partirán hacia la Montaña Solitaria con el fin de rescatar el valioso tesoro custodiado por Smaug el Dorado, un terrible y enorme dragón. A pesar de las reticencias de Bilbo a participar en esta búsqueda, pronto descubrirá una temeridad y una habilidad como ladrón que jamás hubiera sospechado poseer.", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9789505472697-6c9184563bc50ada7c16935683764766-320-0.jpg", categoria:"Aventura y Ciencia Ficción"},
    {id:9, nombre:"Destructora de Espadas", autor:"Victoria Aveyard", precio:13400, descripcion:"Secuela de Destructora de reinos, parte de la segunda gran saga de fantasía medieval escrita por Victoria Aveyard, superestrella de la novela juvenil y autora de la elogiada tetralogía La reina Roja. Destructora de espadas Destructora de reinos 2) Taristan del viejo Cor, poderos hechicero, ha conseguido su ruin cometido: abrir las grietas de los Husos, portales al mundo antiguo, para desencadenar sus males sobre los reinos mortales. Por ello, la inaudita cruzada de salvamento, liderada por Corayne an-Amarat , heredera de la sangre prometida, parece aún más imposible, ¿Podrá ella, junto con su variopinto grupo de improbables compañeros - Dom, inmortal de Iona; Sorasa Sarn, asesina a sueldo; Andry-Trelland, antiguo escudero; Valtik bruja Jydi; y Charlon Armond, as de la falsificación-, proteger la espada sagrada y con ella salvar el mundo?", imagen:"https://acdn.mitiendanube.com/stores/001/930/519/products/9788412473049-a3900b347114260f5916961247932806-320-0.jpg", categoria:"Aventura y Ciencia Ficción"}
]

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
const guardarLibroLS = (id) => {
    localStorage.setItem("libro", JSON.stringify(id));
}
const cargarLibroLS = () => {
    return JSON.parse(localStorage.getItem("libro")) || [];
}

const renderCarrito = () => {
    const libros = cargarCarritoLS();
    let contenidoHTML = "";
    
    if(cantLibrosCarrito()>0) {
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
    }else{
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
                icon:'success',
                iconColor: '#198754', 
                title:'Su carrito fue eliminado',
                background: '#d1e7dd',
                confirmButtonColor:'#198754'
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
        icon:'success',
        iconColor: '#198754', 
        title:'Su libro fue eliminado del carrito',
        background: '#d1e7dd',
        confirmButtonColor:'#198754'
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

const renderLibro = () => {
    const idLibro = cargarLibroLS();
    console.log(idLibro);
    const libro = buscarLibro(idLibro);

    document.getElementById("imagenLibro").src = libro.imagen;
    document.getElementById("nombreLibro").innerHTML = libro.nombre;
    document.getElementById("autorLibro").innerHTML = libro.autor;
    document.getElementById("descripcionLibro").innerHTML = libro.descripcion;
    document.getElementById("precioLibro").innerHTML = "$" + libro.precio;
    document.getElementById("botonAgregar").innerHTML= `<a href="#" class="btn btn-success" onclick="agregarLibroCarrito(${libro.id})">Agregar al Carrito</a>`;
}