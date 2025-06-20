const btn = document.getElementById('btn'); 
const contenedor = document.getElementById('contenedor');

btn.addEventListener('click', function() {
  contenedor.textContent = 'Hola, ' + document.getElementById('nombre').value;
});


