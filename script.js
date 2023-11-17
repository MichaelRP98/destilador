function agregarAgua() {
    reiniciarSimulacion();
    document.getElementById('agua1').style.height = '80%';
}

function encenderMechero() {
    document.getElementById('vapor').style.display = 'block';
}

function pasarVapor() {
    document.getElementById('vapor').style.display = 'none';
    document.getElementById('aguaDestilada').style.height = '80%';
}

function llenarAguaDestilada() {
    reiniciarSimulacion();
    document.getElementById('aguaDestilada').style.height = '80%';
}
