const url = "http://localhost:3200/user"
const btn = document.querySelector("#btn-salvar")
const userForm = document.querySelector("#usuario-form")

window.addEventListener("load", event=> {
    const id = getParam("id");
    if (!id==0) {
    callAPI(`${url}/${id}`, "GET", {})
    .then( user => {
        userForm.elements["id"].value = user.id
        userForm.elements["nombre"].value = user.name
        userForm.elements["usuario"].value = user.username
        userForm.elements["clave"].value = user.password
        userForm.elements["nombre"].focus();
    })
    }
})

function salvarUser(event) {
    event.preventDefault()
    const inputs = event.target.elements;
    const usuario = {
        id: inputs["id"].value,
        name: inputs["nombre"].value,
        username: inputs["usuario"].value,
        password: inputs["clave"].value
    }

    if (!usuario.id==0){    
    callAPI(`${url}/${usuario.id}`, "PUT", usuario)
    .then( () => {
        if (confirm(`Desea volver al listado de usuarios?`)) {
            window.location.replace("/users");                                
        }
    })}
    else
    {
        callAPI(`${url}/${usuario.id}`, "POST", usuario)
        .then( () => {
                window.location.replace("/users");                                
        })        
    }
}
userForm.addEventListener("submit", salvarUser)


