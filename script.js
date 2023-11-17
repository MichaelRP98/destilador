let mecheroEncendido = false;

function reiniciarSimulacion() {
    document.getElementById('agua1').style.height = '0';
    document.getElementById('vapor').style.display = 'block';
    document.getElementById('aguaDestilada').style.height = '0';
    document.getElementById('mechero').style.backgroundColor = '#6c757d';
    document.getElementById('tubo').style.display = 'none';
    mecheroEncendido = false;
}

function agregarAgua() {
    reiniciarSimulacion();
    document.getElementById('agua1').style.height = '80%';
}

function encenderMechero() {
    if (!mecheroEncendido) {
        document.getElementById('mechero').style.backgroundColor = '#ff8c00';
        document.getElementById('tubo').style.display = 'block';
        mecheroEncendido = true;
    }
}

function evaporarAgua() {
    document.getElementById('vapor').style.display = 'none';
    document.getElementById('tubo').style.backgroundColor = '#3498db';
}

function llenarAguaDestilada() {
    reiniciarSimulacion();
    document.getElementById('aguaDestilada').style.height = '80%';
}
