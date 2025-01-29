function calcularModificadores() {
    const stats = ['fuerza', 'destreza', 'fortaleza', 'inteligencia', 'conciencia', 'carisma'];
    let modificadores = {};

    stats.forEach(stat => {
        const valor = parseInt(document.getElementById(stat).value);
        const modificador = Math.floor((valor - 10) / 2);
        modificadores[stat] = modificador;
    });

    let resultado = '<h2>Modificadores:</h2>';
    for (const [stat, mod] of Object.entries(modificadores)) {
        resultado += `<p>${stat.charAt(0).toUpperCase() + stat.slice(1)}: ${mod}</p>`;
    }

    document.getElementById('modificadores').innerHTML = resultado;
}
