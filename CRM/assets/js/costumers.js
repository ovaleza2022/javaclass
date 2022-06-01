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

           const link = document.createElement("a")
           link.classList.add("link-modificar")
           link.href=`vcostumer?id=${costumer.id}`           
           elemtPost.appendChild(link)

            const button1 = document.createElement("button")
           button1.classList.add("btn","btn-danger", "btn-sm")
           button1.textContent = "Borrar"
           agregarEventoBorrarCliente(button1, costumer)
           elemtPost.appendChild(button1)

           const button2 = document.createElement("button")
           button2.classList.add("btn-login")
           button2.textContent = "Agregar Iteraccion"           
           agregarEventoAgregarIteraccion(button2, costumer)
           elemtPost.appendChild(button2)

            const button3 = document.createElement("button")
           button3.classList.add("btn-login")
           button3.textContent = "Historial"
           agregarEventoHistoricoCliente(button3, costumer)
           elemtPost.appendChild(button3) 

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

function agregarEventoAgregarIteraccion(button, cliente) {
    button.addEventListener("click", event=> {
        localStorage.setItem('elcliente',cliente.name);        
        if(confirm(`Desea agregar Interaccion al cliente ${cliente.name}?`)) {
           window.location.replace("/viteraction");                                
        }
    })
}

function agregarEventoHistoricoCliente(button, cliente) {
    button.addEventListener("click", event=> {
        localStorage.setItem('elcliente',cliente.name);        
        let params = `scrollbars=yes,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=400,height=600,left=100,top=100`;
        open("/iteractionsCostumer", "Historico_Cliente", params);
    })
}

