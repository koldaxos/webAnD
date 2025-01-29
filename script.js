function mostrarInformacion() {
    // Obtener valores de los campos adicionales
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;
    const type = document.getElementById('type').value;
    const tag = document.getElementById('tag').value;
    const alignment = document.getElementById('alignment').value;

    // Obtener valores de las estadísticas
    const stats = ['fuerza', 'destreza', 'fortaleza', 'inteligencia', 'conciencia', 'carisma'];
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

function descargarWord() {
    // Obtener el contenido de la caja
    const contenido = document.getElementById('resultado').innerHTML;

    // Convertir el contenido HTML a un archivo Word
    const converted = htmlDocx.asBlob(contenido);

    // Crear un enlace para descargar el archivo
    const link = document.createElement('a');
    link.href = URL.createObjectURL(contenido);
    link.download = 'informacion_personaje.docx';
    link.click();
    URL.revokeObjectURL(link.href);
}
