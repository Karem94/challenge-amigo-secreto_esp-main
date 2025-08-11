let amigos = [];

// Función para mostrar los amigos en la lista HTML
function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

// Función para agregar un nuevo amigo
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre !== "") {
        amigos.push(nombre);
        input.value = "";
        mostrarAmigos();
    } else {
        alert("Por favor, escribe un nombre válido.");
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    // 1. Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("Agrega al menos un amigo para sortear.");
        return;
    }

    // 2. Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3. Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // 4. Mostrar el resultado en el HTML
    let item = document.createElement("li");
    item.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(item);
}

