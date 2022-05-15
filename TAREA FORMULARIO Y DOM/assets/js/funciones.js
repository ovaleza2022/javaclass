const miTarea = document.querySelector("#Tarea")
function eventoSubmit(evento){
     evento.preventDefault()
     const entradas = evento.target.elements;

    const altura=entradas["altura"].value
    const ancho =entradas["ancho"].value
    const mensaje = entradas["mensaje"].value
    
    const miMostrador = document.querySelector("#mostrador")
    miMostrador.textContent=mensaje;
    miMostrador.style.width=ancho+"px"
    miMostrador.style.height=altura+"px"
}
miTarea.addEventListener("submit", eventoSubmit)
