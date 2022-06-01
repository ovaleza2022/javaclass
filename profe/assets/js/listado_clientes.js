const btn = document.querySelector("#btn-listado")

function salvarCliente(event) {
    event.preventDefault()

    // 1. obtener datos del formulario
    const inputs = event.target.elements;
    const cliente = {
        name: inputs["nombre"].value,
        email: inputs["correo"].value,
        address: inputs["direccion"].value,
    }

    // 2. enviar datos al API

    const url = "http://localhost:3200/costumer"
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
    const url = "http://localhost:3200/costumer"
    const listado = await fetch(url)
    .then( response => response.json());
    renderizarListadoPost(listado)
}

function renderizarListadoPost(listado) {
    const elementoListado = document.querySelector("#listado")
     listado.forEach(costumer => {
        const elemtPost = document.createElement("div")
        elemtPost.classList.add("costumers")
        const linea1 = document.createElement("div")
        linea1.textContent = `Id: ${costumer.id} | Nombre: ${costumer.name}.`
        const linea2 = document.createElement("div")
        elemtPost.appendChild(linea1)        
        linea2.textContent = `Email: ${costumer.email}.`
        elemtPost.appendChild(linea2)        
        const linea3 = document.createElement("div")
        linea3.textContent = `Direccion: ${costumer.address}.`
        elemtPost.appendChild(linea3)                
        const linea4 = document.createElement("div")
        linea4.textContent = `Creado en: ${costumer.CreatedAt}.`
        elemtPost.appendChild(linea4)                

        /*        elemtPost.textContent = `Id: ${costumer.id} | Nombre: ${costumer.name} | Email: ${costumer.email} | Direccion: ${costumer.addres} .` */
        elementoListado.appendChild(elemtPost)
    });
 }

btn.addEventListener("click", eventoClick)