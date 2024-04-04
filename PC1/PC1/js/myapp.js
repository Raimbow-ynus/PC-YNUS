const personas = [
    { nombre: "Juan", oficio: "Programador" },
    { nombre: "María", oficio: "Diseñadora" },
    { nombre: "Pedro", oficio: "Ingeniero" },
    { nombre: "Ana", oficio: "Contadora" }
];

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('personas-container');
    let personasContratadas = JSON.parse(localStorage.getItem('personasContratadas')) || [];

    function actualizarLista() {
        container.innerHTML = '';
        personasContratadas.forEach(persona => {
            const div = document.createElement('div');
            div.innerHTML = `${persona.nombre} - ${persona.oficio}`;
            container.appendChild(div);
        });
    }

    actualizarLista();

    const contratarBtn = document.getElementById('contratarBtn');
    contratarBtn.addEventListener('click', function() {
        const nombre = document.getElementById('nombre').value;
        const oficio = document.getElementById('oficio').value;
        personasContratadas.push({ nombre, oficio });
        localStorage.setItem('personasContratadas', JSON.stringify(personasContratadas));
        actualizarLista();
    });
});

