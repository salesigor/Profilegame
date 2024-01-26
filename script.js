const generateBtn = document.getElementById('generate-btn');
const card = document.getElementById('card');
const tipoElement = document.getElementById('tipo');
const nomeElement = document.getElementById('nome');
const conteudoElement = document.getElementById('conteudo');

async function fetchCartas(tipo) {
    const response = await fetch(`Cartas/${tipo.toLowerCase()}.json`);
    return response.json();
}

async function gerarNovaCarta() {
    const tipos = ['FILME', 'SERIE', 'COISA', 'PESSOA', 'LUGAR', 'MUSICA'];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];

    const { name, content } = await fetchCartas(tipo);

    tipoElement.textContent = tipo;
    nomeElement.textContent = name;

    // Limpar o conteúdo anterior
    conteudoElement.innerHTML = '';

    // Adicionar as dicas ao conteúdo
    content.forEach((tip, index) => {
        const tipElement = document.createElement('div');
        tipElement.className = 'tip';
        tipElement.textContent = `${index + 1}. ${tip}`;
        conteudoElement.appendChild(tipElement);
    });

    card.className = `card ${tipo.toLowerCase()}`;
}

// Chamada inicial para gerar uma carta quando a página é carregada
gerarNovaCarta();

generateBtn.addEventListener('click', gerarNovaCarta);
