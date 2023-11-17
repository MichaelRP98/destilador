function encenderMechero() {
    document.getElementById('agua1').style.height = '80%';
    document.getElementById('vapor').style.display = 'block';
}

function pasarVapor() {
    document.getElementById('vapor').style.display = 'none';
    document.getElementById('aguaDestilada').style.height = '80%';
}
