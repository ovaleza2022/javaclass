
//const url = "http://localhost:3200/costumer"

function elusuario (){
return (localStorage.getItem('elusuario'));         
}

document.querySelector("#elusuario").textContent='Usuario:'+elusuario();


function getParam(param) {
    const params = new URLSearchParams(window.location.search)
    return params.get(param)
}


function callAPI(url,method, data) {
    let configuracion = {};
    const header = {
        'Content-Type': 'application/json'
    }
    
    if (method === "GET") {
        configuracion = {
            method: method,
            headers: header
        }
    
    } else {
        configuracion = {
            method: method,
            body: JSON.stringify(data),
            headers: header
        }
    }

    return fetch(url, configuracion)
    .then(response => {
        return response.json()
    })
}