const btn = document.querySelector("#btn-listado")

function salvarUsuario(event) {
    event.preventDefault()

    // 1. obtener datos del formulario
    const inputs = event.target.elements;
    const cliente = {
        name: inputs["nombre"].value,
        email: inputs["correo"].value,
        address: inputs["direccion"].value,
    }

    // 2. enviar datos al API

    const url = "http://localhost:3200/user"
    const header = {
        'Content-Type': 'application/json'
    }
    const configuracion = {
        method: "POST",
        body: JSON.stringify(cliente),
        headers: header
    }

    fetch(url, configuracion)
    .then(response => {
        return response.json()
    })
    .then(cliente => {
        console.log(cliente)
        //....
    })
}


async function eventoClick(event) {
    const url = "http://localhost:3200/user"
    const listado = await fetch(url)
    .then( response => response.json());
    renderizarListadoPost(listado)
}

function renderizarListadoPost(listado) {
    const elementoListado = document.querySelector("#listado")
     listado.forEach(user => {
        const elemtPost = document.createElement("div")
        elemtPost.classList.add("users")
        const linea1 = document.createElement("div")
        linea1.textContent = `Id: ${user.id}`
        elemtPost.appendChild(linea1)        
        const linea2 = document.createElement("div")
        linea2.textContent = `Usuario: ${user.username}.`
        elemtPost.appendChild(linea2)        
        const linea3 = document.createElement("div")
        linea3.textContent = `Nombre: ${user.name}.`
        elemtPost.appendChild(linea3)        

        elementoListado.appendChild(elemtPost)
    });
 }

btn.addEventListener("click", eventoClick)