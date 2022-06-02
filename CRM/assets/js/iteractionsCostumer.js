let nombre=elcliente().name
let idCliente=elcliente().id
document.querySelector("#elusuario").textContent='CLIENTE:'+nombre;
const urlCliente = `http://localhost:3200/iteraction/?costumer.id=${idCliente}`
const url = "http://localhost:3200/iteraction"
window.addEventListener("load", event=> {
     callAPI(urlCliente, "GET", {}).then( listado => {
        const elementoListado = document.querySelector("#listado")
        listado.forEach(iteraction => {
            const elemtPost = document.createElement("div")
            elemtPost.classList.add("iteractions")
            const linea1 = document.createElement("div")
            linea1.textContent = `Id: ${iteraction.id}`
            elemtPost.appendChild(linea1)        
            const linea3 = document.createElement("div")
            linea3.textContent = `Cliente: ${iteraction.costumer.name}.`
            elemtPost.appendChild(linea3)        
            const linea4 = document.createElement("div")
            linea4.textContent = `Usuario: ${iteraction.user.name}.`
            elemtPost.appendChild(linea4)        
            const linea5 = document.createElement("div")
            linea5.textContent = `Fecha Registrado: ${iteraction.createdAt}.`
            elemtPost.appendChild(linea5)        
            const linea2 = document.createElement("textarea", cols=50, rows=200)
            linea2.setAttribute("rows","5")
            linea2.setAttribute("cols","30")        
            linea2.textContent = `Nota: ${iteraction.note}.`
            elemtPost.appendChild(linea2)        
            const link = document.createElement("a")
            link.classList.add("link-modificar")
           link.href=`viteraction?id=${iteraction.id}`           
           const buttonBorrar = document.createElement("button")
           buttonBorrar.classList.add("btn","btn-danger", "btn-sm")
           buttonBorrar.textContent = "Borrar"
           agregarEventoBorrarIteraccion(buttonBorrar, iteraction)

           //elemtPost.appendChild(link)
           elemtPost.appendChild(buttonBorrar)
           elementoListado.appendChild(elemtPost)
       });
   
    }) 

})

function agregarEventoBorrarIteraccion(button, iteraction) {
    button.addEventListener("click", event=> {
        if(confirm(`Desea borrar la iteraccion ${iteraction.costumer}?`)) {
            callAPI(`${url}/${iteraction.id}`, "DELETE", {})
            .then( ()=> window.location.reload())
        }
    })
}