const url = "http://localhost:3200/costumer"

window.addEventListener("load", event=> {
     callAPI(url, "GET", {}).then( listado => {
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
           linea4.textContent = `Creado en: ${costumer.createdAt}.`
           elemtPost.appendChild(linea4)                

/*            const buttonBorrar_a = document.createElement("button")           
           buttonBorrar_a.classList.add("btn", "btn-sm")
           buttonBorrar_a.textContent = "Modificar"
           buttonBorrar_a.href=`vcostumer?id=${costumer.id}`           
           elemtPost.appendChild(buttonBorrar_a)
 */
           const link = document.createElement("a")
           link.classList.add("link-modificar")
           link.href=`vcostumer?id=${costumer.id}`           
           const buttonBorrar = document.createElement("button")
           buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
           buttonBorrar.textContent = "Borrar"
           agregarEventoBorrarCliente(buttonBorrar, costumer)

           const button2 = document.createElement("button")
           button2.classList.add("btn-login")
           button2.textContent = "Agregar Iteraccion"           
           agregarEventoIteraccionCliente(button2, costumer)

           elemtPost.appendChild(link)
           elemtPost.appendChild(buttonBorrar)
           elemtPost.appendChild(button2)           
           elementoListado.appendChild(elemtPost)
       });
   
    }) 

})

function agregarEventoBorrarCliente(button, cliente) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar el cliente ${cliente.name}?`)) {
            callAPI(`${url}/${cliente.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}

function agregarEventoIteraccionCliente(button, cliente) {
    button.addEventListener("click", event=> {
        localStorage.setItem('elcliente',cliente.name);        
        if(confirm(`Desea agregar Interaccion al cliente ${cliente.name}?`)) {
           window.location.replace("/viteraction");                                
        }
    })
}
