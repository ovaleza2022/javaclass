const url = "http://localhost:3200/iteraction"
const btn = document.querySelector("#btn-salvar")
const iteractionForm = document.querySelector("#iteraccion-form")
var iteraction2
var id

window.addEventListener("load", event=> {
    id = getParam("id");
    if (!id==0) {    
    callAPI(`${url}/${id}`, "GET", {})
    .then( iteraction => {
        iteraction2=iteraction
        iteractionForm.elements["id"].value = iteraction.id
        iteractionForm.elements["cliente"].value = iteraction.costumer.name
        iteractionForm.elements["nota"].value = iteraction.note
        iteractionForm.elements["creado"].value = iteraction.createdAt
        iteractionForm.elements["usuario"].value = iteraction.user.name
    })
    }    
    else
    {
        iteractionForm.elements["cliente"].value = elcliente().name //localStorage.getItem('elcliente')
        iteractionForm.elements["usuario"].value = elusuario().name //localStorage.getItem('elusuario')
        iteractionForm.elements["creado"].value = new Date().toISOString().split('T')[0]        
    }
    iteractionForm.elements["nota"].focus();    
})

function salvarIteraction(event) {
    event.preventDefault()
    const inputs = event.target.elements;
    if (!id==0){    
        const iteraccion = {
            id: inputs["id"].value,
            note: inputs["nota"].value,
            costumer: iteraction2.costumer,
            user: iteraction2.user,
            createdAt: inputs["creado"].value
        }
        callAPI(`${url}/${iteraccion.id}`, "PUT", iteraccion)
    .then( () => {
       // if (confirm(`Desea volver al listado de iteracciones?`)) {
            window.location.replace("/iteractions");                                
       // }
    })
    }
    else
    {
        const iteraccion = {
            id: inputs["id"].value,
            note: inputs["nota"].value,
            costumer: elcliente(),
            user: elusuario(),
            createdAt: inputs["creado"].value
        }
    
        callAPI(`${url}/${iteraccion.id}`, "POST", iteraccion)
        .then( () => {
                window.location.replace("/costumers");                                
        })
    }
}
iteractionForm.addEventListener("submit", salvarIteraction)


