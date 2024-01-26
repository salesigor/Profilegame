const card = document.getElementById('card');
const tipoElement = document.getElementById('tipo');
const nomeElement = document.getElementById('nome');
const conteudoElement = document.getElementById('conteudo');

async function fetchCartas(tipo) {
    try {
        const response = await fetch(`Cartas/${tipo.toLowerCase()}.json`);
        if (!response.ok) {
            throw new Error('Erro ao carregar dados.');
        }
        return response.json();
    } catch (error) {
        console.error(error);
        return { name: 'Erro', content: ['Falha ao carregar dados.'] };
    }
}

async function gerarNovaCarta() {
    const tipos = ['FILME', 'SERIE', 'COISA', 'PESSOA', 'LUGAR', 'MUSICA'];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];

    const { name, content } = await fetchCartas(tipo);

    tipoElement.textContent = tipo;
    nomeElement.textContent = name;

    conteudoElement.innerHTML = content.map((tip, index) => `
        <div class="tip">${index + 1}. ${tip}</div>
    `).join('');

    card.className = `card ${tipo.toLowerCase()}`;
}

// Chamada inicial para gerar uma carta quando a página é carregada
gerarNovaCarta();
