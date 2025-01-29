// Inicializar jsPDF
const { jsPDF } = window.jspdf;

function mostrarInformacion() {
    // Obtener valores de los campos adicionales
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const type = document.getElementById('type').value;
    const tag = document.getElementById('tag').value;
    const alignment = document.getElementById('alignment').value;

    // Obtener valores de las estadísticas
    const stats = ['fuerza', 'destreza', 'fortaleza', 'inteligencia', 'conciencia', 'carisma'];
    let modificadores = {};

    stats.forEach(stat => {
        const valor = parseInt(document.getElementById(stat).value);
        const modificador = Math.floor((valor - 10) / 2);
        modificadores[stat] = modificador;
    });

    // Mostrar la información en la caja de resultado
    let resultado = `<h2>${name}</h2>`;
    resultado += `<p><strong>Size:</strong> ${size}</p>`;
    resultado += `<p><strong>Type:</strong> ${type}</p>`;
    resultado += `<p><strong>Tag:</strong> ${tag}</p>`;
    resultado += `<p><strong>Alignment:</strong> ${alignment}</p>`;

    resultado += '<h2>Estadísticas:</h2>';
    for (const [stat, mod] of Object.entries(modificadores)) {
        resultado += `<p>${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${mod}</p>`;
    }

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('descargarBtn').style.display = 'block';
}

function descargarPDF() {
    const contenido = document.getElementById('resultado').innerText;

    // Crear un nuevo documento PDF
    const doc = new jsPDF();

    // Añadir el contenido al PDF
    doc.setFontSize(12);
    doc.text(contenido, 10, 10);

    // Descargar el PDF
    doc.save('informacion_personaje.pdf');
}
