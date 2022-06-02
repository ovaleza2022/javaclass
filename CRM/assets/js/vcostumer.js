const url = "http://localhost:3200/costumer"
const btn = document.querySelector("#btn-salvar")
const clienteForm = document.querySelector("#cliente-form")

window.addEventListener("load", event=> {
    const id = getParam("id");
    if (!id==0) {
    callAPI(`${url}/${id}`, "GET", {})
    .then( cliente => {
        clienteForm.elements["id"].value = cliente.id
        clienteForm.elements["nombre"].value = cliente.name
        clienteForm.elements["correo"].value = cliente.email
        clienteForm.elements["direccion"].value = cliente.address
        clienteForm.elements["creado"].value = cliente.createdAt
        clienteForm.elements["nombre"].focus();
    })
    }
    else clienteForm.elements["creado"].value = new Date().toISOString().split('T')[0]
})

function salvarCliente(event) {
    event.preventDefault()
    const inputs = event.target.elements;
    const cliente = {
        id: inputs["id"].value,
        name: inputs["nombre"].value,
        email: inputs["correo"].value,
        address: inputs["direccion"].value,
        createdAt: inputs["creado"].value
    }

    if (!cliente.id==0){
    callAPI(`${url}/${cliente.id}`, "PUT", cliente)
    .then( () => {
        //if (confirm(`Desea volver al listado de clientes?`)) {
            window.location.replace("/costumers");                                
        //}
    })}
    else{
        callAPI(`${url}/${cliente.id}`, "POST", cliente)
        .then( () => {
            window.location.replace("/costumers");                                
        })
    }
}
clienteForm.addEventListener("submit", salvarCliente)


