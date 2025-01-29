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

    // Configurar el estilo del PDF
    doc.setFont('helvetica'); // Usar una fuente similar a Arial
    doc.setFontSize(12);

    // Añadir un fondo y un borde similar a la caja
    doc.setFillColor(249, 249, 249); // Color de fondo (#f9f9f9)
    doc.rect(5, 5, 200, 280, 'F'); // Rectángulo de fondo
    doc.setDrawColor(221, 221, 221); // Color del borde (#ddd)
    doc.rect(5, 5, 200, 280); // Rectángulo del borde

    // Añadir el contenido al PDF
    doc.setTextColor(51, 51, 51); // Color del texto (#333)
    doc.setFontSize(16);
    doc.text(document.getElementById('name').value, 15, 20); // Nombre del personaje

    doc.setFontSize(12);
    doc.text(`Size: ${document.getElementById('size').value}`, 15, 30);
    doc.text(`Type: ${document.getElementById('type').value}`, 15, 40);
    doc.text(`Tag: ${document.getElementById('tag').value}`, 15, 50);
    doc.text(`Alignment: ${document.getElementById('alignment').value}`, 15, 60);

    doc.setFontSize(14);
    doc.text('Estadísticas:', 15, 80);

    doc.setFontSize(12);
    let y = 90;
    const stats = ['fuerza', 'destreza', 'fortaleza', 'inteligencia', 'conciencia', 'car
