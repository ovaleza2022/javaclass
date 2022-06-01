// 1. obtener formulario
const clienteForm = document.querySelector("#cliente-form")


// 2. crear funcion del formulario
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

// 3. Agregar evento al formulario
clienteForm.addEventListener("submit", salvarCliente)