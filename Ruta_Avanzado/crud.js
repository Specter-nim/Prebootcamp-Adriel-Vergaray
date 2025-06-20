const cliente = document.getElementById("cliente");
const pedido = document.getElementById("pedido");
const fecha = document.getElementById("fecha");
const hora = document.getElementById("hora");
const agrePedido = document.getElementById("agrepedido");
const lista = document.getElementById("lista");

function cargar() {
    let pendientes = localStorage.getItem("pendientes");
    if (!pendientes) {
        pendientes = [];
    } else {
        pendientes = JSON.parse(pendientes);
    }

    lista.innerHTML = "";
    for (let i = 0; i < pendientes.length; i++) {
        const item = document.createElement("li");
        item.textContent = `Cliente: ${pendientes[i].cliente}, Pedido: ${pendientes[i].pedido}, Fecha: ${pendientes[i].fecha}, Hora: ${pendientes[i].hora}`;
        const btndelete = document.createElement("button");
        btndelete.textContent = "Eliminar";
        btndelete.onclick = () => eliminar(i);
        item.appendChild(btndelete);
        lista.appendChild(item);
    }
}

function agregar() {
    if (cliente.value && pedido.value && fecha.value && hora.value) {
        let pendientes = localStorage.getItem("pendientes");
        if (!pendientes) {
            pendientes = [];
        } else {
            pendientes = JSON.parse(pendientes);
        }

        const nueva = { cliente: cliente.value, pedido: pedido.value, fecha: fecha.value, hora: hora.value };
        pendientes.push(nueva);

        localStorage.setItem("pendientes", JSON.stringify(pendientes));
        
        cliente.value = pedido.value = fecha.value = hora.value = "";
        cargar();
    } else {
        alert("Completa todos los campos.");
    }
}

function eliminar(index) {
    let pendientes = localStorage.getItem("pendientes");
    if (!pendientes) {
        pendientes = [];
    } else {
        pendientes = JSON.parse(pendientes);
    }

    pendientes.splice(index, 1);
    localStorage.setItem("pendientes", JSON.stringify(pendientes));
    cargar();
}

agrePedido.addEventListener("click", agregar);

cargar();
