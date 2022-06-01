const url = "http://localhost:3200/iteraction"
const btn = document.querySelector("#btn-salvar")
const iteractionForm = document.querySelector("#iteraccion-form")

window.addEventListener("load", event=> {
    const id = getParam("id");
    if (!id==0) {    
    callAPI(`${url}/${id}`, "GET", {})
    .then( iteraction => {
        iteractionForm.elements["id"].value = iteraction.id
        iteractionForm.elements["cliente"].value = iteraction.costumer
        iteractionForm.elements["nota"].value = iteraction.note
        iteractionForm.elements["creado"].value = iteraction.createdAt
        iteractionForm.elements["usuario"].value = iteraction.user
    })
    }    
    else
    {
        iteractionForm.elements["cliente"].value = elcliente() //localStorage.getItem('elcliente')
        iteractionForm.elements["usuario"].value = elusuario() //localStorage.getItem('elusuario')
        iteractionForm.elements["creado"].value = new Date().toISOString().split('T')[0]        
    }
    iteractionForm.elements["nota"].focus();    
})

function salvarIteraction(event) {
    event.preventDefault()
    const inputs = event.target.elements;
    const iteraccion = {
        id: inputs["id"].value,
        note: inputs["nota"].value,
        costumer: inputs["cliente"].value,
        user: inputs["usuario"].value,        
        createdAt: inputs["creado"].value
    }

    if (!iteraccion.id==0){    
    callAPI(`${url}/${iteraccion.id}`, "PUT", iteraccion)
    .then( () => {
        if (confirm(`Desea volver al listado de iteracciones?`)) {
            window.location.replace("/iteractions");                                
        }
    })
    }
    else
    {
        callAPI(`${url}/${iteraccion.id}`, "POST", iteraccion)
        .then( () => {
                window.location.replace("/costumers");                                
        })
    }
}
iteractionForm.addEventListener("submit", salvarIteraction)


