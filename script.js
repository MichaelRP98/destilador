function iniciarCalentamiento() {
    document.getElementById('agua').style.height = '80%';
    document.getElementById('vapor').style.display = 'block';
    setTimeout(iniciarDestilacion, 3000);
}

function iniciarDestilacion() {
    document.getElementById('vapor').style.display = 'none';
    document.getElementById('aguaDestilada').style.display = 'block';
}

function reiniciarSimulacion() {
    document.getElementById('agua').style.height = '100%';
    document.getElementById('vapor').style.display = 'none';
    document.getElementById('aguaDestilada').style.display = 'none';
}
