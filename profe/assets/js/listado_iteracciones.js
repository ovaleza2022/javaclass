const btn = document.querySelector("#btn-listado")

async function eventoClick(event) {
    const url = "http://localhost:3200/iteraction"
    const listado = await fetch(url)
    .then( response => response.json());
    renderizarListadoPost(listado)
}

function renderizarListadoPost(listado) {
    const elementoListado = document.querySelector("#listado")
     listado.forEach(iteraction => {
        const elemtPost = document.createElement("div")
        elemtPost.classList.add("iteractions")
        const linea1 = document.createElement("div")
        linea1.textContent = `Id: ${iteraction.id}`
        elemtPost.appendChild(linea1)        
        const linea3 = document.createElement("div")
        linea3.textContent = `Cliente: ${iteraction.costumer}.`
        elemtPost.appendChild(linea3)        
        const linea4 = document.createElement("div")
        linea4.textContent = `Usuario: ${iteraction.user}.`
        elemtPost.appendChild(linea4)        
        const linea5 = document.createElement("div")
        linea5.textContent = `Fecha Registrado: ${iteraction.createdAt}.`
        elemtPost.appendChild(linea5)        
        const linea2 = document.createElement("textarea", cols=50, rows=200)
        linea2.setAttribute("rows","10")
        linea2.setAttribute("cols","30")        
        linea2.textContent = `Nota: ${iteraction.note}.`
        elemtPost.appendChild(linea2)        

        elementoListado.appendChild(elemtPost)
    });
 }

btn.addEventListener("click", eventoClick)