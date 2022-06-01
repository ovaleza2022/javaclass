
/* const url = "localhost:3200/user"
const loginForm = document.querySelector("#login-form")

function loginApp(event) {
    event.preventDefault()
    const inputs = event.target.elements;
    const usuario = {
        id:3,
        username: inputs["usuario"].value,
        password: inputs["clave"].value
    }

    //callAPI(`${url}/${id}`, "GET", {})  
    alert(url)  
    callAPI(url, "GET", {})
    .then( user => {
//        alert(`${url}${usuario.username}`)
        alert(`${url}dos`)
        if (usuario.password=user.password) 
                    window.location.replace("/home")                    
         else alert("Usuario o Password Incorectos")
    })
}
loginForm.addEventListener("submit", loginApp) */



 const loginForm = document.querySelector("#login-form")

let usuario = ""
let clave = ""

async function loginApp(event) {
    event.preventDefault() 
//alert(getdate())

    usuario = document.querySelectorAll("input[name='usuario']")[0].value
    clave = document.querySelectorAll("input[name='clave']")[0].value


    const url = "http://localhost:3200/user/?username="+usuario
    const respuesta = await fetch(url)
    .then( response => response.json());

    validarUsuario(respuesta)
}

function validarUsuario(respuesta) {
     respuesta.forEach(user => {
        localStorage.setItem('elusuario',user.name);     
        if (clave==user.password) 
            window.location.replace("/home")
         else
            alert("Usuario o Password Incorectos")
    });
 }

loginForm.addEventListener("submit", loginApp)
