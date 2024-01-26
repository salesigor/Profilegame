const generateBtn = document.getElementById('generate-btn');
const card = document.getElementById('card');
const cardTitle = document.querySelector('.card .card-header .topic-title');
const cardName = document.querySelector('.card .card-header .topic-name');
const cardContent = document.querySelector('.card .card-content');

async function fetchCartas(tipo) {
    const response = await fetch(`Cartas/${tipo.toLowerCase()}.json`);
    return response.json();
}

async function gerarNovaCarta() {
    const tipos = ['FILME', 'SERIE', 'COISA', 'PESSOA', 'LUGAR', 'MUSICA'];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];

    const { name, content } = await fetchCartas(tipo);

    cardTitle.innerHTML = `
        <div class="topic-title ${tipo.toLowerCase()}">${tipo}</div>
    `;

    cardName.innerHTML = `
        <div class="topic-name" style="color: ${name.color}">${name}</div>
    `;

    cardContent.innerHTML = content.map((tip, index) => `
        <div class="tip">${index + 1}. ${tip}</div>
    `).join('');

    card.className = `card ${tipo.toLowerCase()}`;
}

generateBtn.addEventListener('click', gerarNovaCarta);

// Chamada inicial para gerar uma carta quando a página é carregada
gerarNovaCarta();
