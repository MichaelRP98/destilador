let mecheroEncendido = false;

function agregarAgua() {
    reiniciarSimulacion();
    document.getElementById('agua1').style.height = '80%';
}

function encenderMechero() {
    if (!mecheroEncendido) {
        document.getElementById('mechero').style.backgroundColor = '#ff8c00'; // Cambia a naranja
        mecheroEncendido = true;
    }
}

function pasarVapor() {
    document.getElementById('vapor').style.display = 'none';
    document.getElementById('aguaDestilada').style.height = '80%';
}

function llenarAguaDestilada() {
    reiniciarSimulacion();
    document.getElementById('aguaDestilada').style.height = '80%';
}
