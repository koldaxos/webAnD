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
    const stats = ['fuerza', 'destreza', 'fortaleza', 'inteligencia', 'conciencia', 'carisma', 'arcana', 'fe', 'voluntad'];
    let resultadoStats = '';

    stats.forEach(stat => {
        const valor = parseInt(document.getElementById(stat).value);
        const modificador = Math.floor((valor - 10) / 2);
        resultadoStats += `<p><strong>${stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> ${valor} (${modificador >= 0 ? '+' : ''}${modificador})</p>`;
    });

    // Mostrar la información en la caja de resultado
    let resultado = `<h2>${name}</h2>`;
    resultado += `<p><strong>Size:</strong> ${size}</p>`;
    resultado += `<p><strong>Type:</strong> ${type}</p>`;
    resultado += `<p><strong>Tag:</strong> ${tag}</p>`;
    resultado += `<p><strong>Alignment:</strong> ${alignment}</p>`;

    resultado += '<h2>Estadísticas:</h2>';
    resultado += resultadoStats;

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('descargarBtn').style.display = 'block';
}

function descargarPDF() {
    // Obtener valores de los campos adicionales
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const type = document.getElementById('type').value;
    const tag = document.getElementById('tag').value;
    const alignment = document.getElementById('alignment').value;

    // Obtener valores de las estadísticas
    const stats = ['fuerza', 'destreza', 'fortaleza', 'inteligencia', 'conciencia', 'carisma'];
    let statsContent = '';

    stats.forEach(stat => {
        const valor = parseInt(document.getElementById(stat).value);
        const modificador = Math.floor((valor - 10) / 2);
        statsContent += `${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${valor} (${modificador >= 0 ? '+' : ''}${modificador})\n`;
    });

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
    doc.text(name, 15, 20); // Nombre del personaje

    doc.setFontSize(12);
    doc.text(`Size: ${size}`, 15, 30);
    doc.text(`Type: ${type}`, 15, 40);
    doc.text(`Tag: ${tag}`, 15, 50);
    doc.text(`Alignment: ${alignment}`, 15, 60);

    doc.setFontSize(14);
    doc.text('Estadísticas:', 15, 80);

    doc.setFontSize(12);
    doc.text(statsContent, 15, 90);

    // Descargar el PDF
    doc.save('informacion_personaje.pdf');
}
