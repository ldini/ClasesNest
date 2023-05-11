let btn_mostrar = document.getElementById("btn-mostrar");
btn_mostrar.addEventListener("click",mostrarDatos);

let btn_crear = document.getElementById("btn-crear");
btn_crear.addEventListener("click",crearPista);

async function mostrarDatos(){
    let res = await fetch('api/pista/pistas');
    let data = await res.json();

    document.getElementById("idPista").innerHTML = data.titulo;
    console.log(data.pistas);
}



async function crearPista(){

    let datos = {
            "identificador": document.getElementById("identificador").value,
            "titulo": document.getElementById("titulo").value,
            "duracion": document.getElementById("duracion").value,
            "interprete": document.getElementById("interprete").value,
            "fecha": document.getElementById("fecha").value
    }

    res = await fetch('api/pista/crear',
                     {
                        method : 'POST',
                        headers : { 'Content-Type' : 'application/json' },
                        body : JSON.stringify(datos)
                     });
    let data = await res.json();
    console.log(data);
    
}