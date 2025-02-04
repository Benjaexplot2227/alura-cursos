// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Creado por Benjamin Gonzalez para el curso de aluraLatam
//fecha:03-02-2025
let listaAmigos = document.getElementById('listaAmigos');
let nombresDeAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Introduzca un nombre válido');
    } else {
        nombresDeAmigos.push(amigo);  
        document.getElementById('amigo').value = '';  
        listarNombres();  
    }
    return;
}

function listarNombres() {
    listaAmigos.innerHTML = "";
    
    for (let i = nombresDeAmigos.length - 1; i >= 0; i--) {  
        let li = document.createElement('li');
        li.textContent = nombresDeAmigos[i];  
        listaAmigos.appendChild(li);
    }
    return;
}

function sortearAmigo() {
    let largoArray = nombresDeAmigos.length;
    let numeroAlazar = 0;
    let resultado = document.getElementById('resultado');

    if (nombresDeAmigos.length != 0) {

        numeroAlazar = Math.floor(Math.random() * largoArray);  
        resultado.innerHTML = "";  

        if (nombresDeAmigos.length > 0) {  
            let li = document.createElement('li');
            li.textContent = `El amigo secreto sorteado es ${nombresDeAmigos[numeroAlazar]}`; 
            resultado.appendChild(li);
        } else {
            alert("Agregar un nombre antes de sortear un amigo secreto");
        }
    }
}

document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        agregarAmigo();  
    }
});
