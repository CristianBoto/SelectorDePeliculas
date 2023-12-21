function consultarPelis() {
    let edad = parseInt(document.getElementById("numeroEdad").value);
    let genero = event.target.id; // Obtiene el ID del botón clicado

    let nombrePelicula = ""; //es vacio y luego se actualiza con las condiciones de la página.

    // Lógica para determinar la película según la edad y el género seleccionado
    if (edad >= 18) {
        if (genero === "comedia") {
            nombrePelicula = "Tu pelicula ideal es: 'Scary Movie'";
        } else if (genero === "drama") {
            nombrePelicula = " Tu pelicula ideal es: 'El Padrino' ";
        }
    } if(edad >= 18){
        if (genero === "musical") {
            nombrePelicula = "Tu pelicula ideal es: 'El gran showman'";
        } else if (genero === "crimen") {
            nombrePelicula = " Tu pelicula ideal es: 'Jack el destripador'";
        }

    } if(edad < 18) {
        if (genero === "musical") {
            nombrePelicula = "Tu pelicula ideal es: 'HighSchool Musical'";
        } else if (genero === "crimen") {
            nombrePelicula = "Tu pelicula ideal es: 'Scooby-Doo'";
        }
    } if (edad < 18) {
        if (genero === "comedia") {
            nombrePelicula = "Tu pelicula ideal es: 'Buscando a Nemo'";
        } else if (genero === "drama") {
            nombrePelicula = "Tu pelicula ideal es: 'Toy Story'";
        }
    }


    // Mostrar el mensaje con el nombre de la película
    const mensaje = document.getElementById('mensaje');
    const nombrePeliculaElement = document.getElementById('nombrePelicula');
    
    if (nombrePelicula !== "") {
        nombrePeliculaElement.textContent = nombrePelicula;
        mensaje.classList.remove('oculto');
    }
}

function reiniciarPagina() {
    location.reload(); // Esto reiniciará la página al ser presionado el botón
}
