const url = "http://localhost:3200/user"

window.addEventListener("load", event=> {
     callAPI(url, "GET", {}).then( listado => {
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
            const link = document.createElement("a")
            link.classList.add("link-modificar")            
            link.href=`vuser?id=${user.id}`           
            const buttonBorrar = document.createElement("button")
            buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
            buttonBorrar.textContent = "Borrar"
            agregarEventoBorrarUsuario(buttonBorrar, user)
 
            elemtPost.appendChild(link)
            elemtPost.appendChild(buttonBorrar)
            elementoListado.appendChild(elemtPost)
         });
    }) 
})

function agregarEventoBorrarUsuario(button, user) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el Usuario ${user.name}?`)) {
            callAPI(`${url}/${user.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}

